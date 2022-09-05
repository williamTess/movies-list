import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/useRedux";
import {
  dislike,
  like,
  remove,
  undislike,
  unlike,
} from "../../redux/movie/movieSlice";
import { colors } from "../../styles/colors";
import { Movie } from "../../types/Movie";
import { Vote } from "../../utils/enums";
import { percentage } from "../../utils/utils";
import ButtonVote from "../button-vote/ButtonVote";
import { s } from "./style";

interface Props {
  movie: Movie;
  numberCardsPerPage: number;
}

const Card = (props: Props) => {
  const { movie, numberCardsPerPage } = props;
  const { title, likes, dislikes, image, category, vote } = movie;
  const [voteIndex, setVoteIndex] = useState<Vote>(vote);
  const rate = percentage(likes, dislikes);
  const dispatch = useAppDispatch();
  const big = numberCardsPerPage === 4;

  const RenderCategories = () => {
    return (
      <s.CategoryContainer>
        {category.map((cat, index) => (
          <s.CategoryTile key={cat} big={big} colorIndex={index + 1}>
            {cat}
          </s.CategoryTile>
        ))}
      </s.CategoryContainer>
    );
  };

  const onClickRemove = () => {
    dispatch(remove(movie));
  };

  const voteAction = (value: Vote) => {
    if (value === Vote.UP) {
      voteIndex === Vote.DOWN && dispatch(undislike(movie));
      dispatch(like(movie));
      setVoteIndex(value);
    } else if (value === Vote.DOWN) {
      voteIndex === Vote.UP && dispatch(unlike(movie));
      dispatch(dislike(movie));
      setVoteIndex(value);
    } else if (value === Vote.NONE) {
      voteIndex === Vote.UP && dispatch(unlike(movie));
      voteIndex === Vote.DOWN && dispatch(undislike(movie));
      setVoteIndex(value);
    }
  };

  return (
    <s.Card big={big}>
      <s.CardImage>
        <s.Image src={image} alt={title} />
      </s.CardImage>
      <s.CardContent>
        <s.TitleContainer>
          <s.Title big={big}>{title}</s.Title>
        </s.TitleContainer>
        <RenderCategories />
        <s.VoteContainer big={big}>
          <ButtonVote
            direction={Vote.UP}
            color={vote === Vote.UP ? colors.blueLight : colors.grey}
            value={likes}
            onClick={() => voteAction(vote === Vote.UP ? Vote.NONE : Vote.UP)}
            size={big ? 50 : 40}
          />
          <ButtonVote
            direction={Vote.DOWN}
            color={vote === Vote.DOWN ? colors.pinkLight : colors.grey}
            value={dislikes}
            onClick={() =>
              voteAction(vote === Vote.DOWN ? Vote.NONE : Vote.DOWN)
            }
            size={big ? 50 : 40}
          />
        </s.VoteContainer>
        <s.RemoveButtonContainer>
          <s.CardRemoveButton big={big} onClick={onClickRemove}>
            Supprimer le film
          </s.CardRemoveButton>
        </s.RemoveButtonContainer>
      </s.CardContent>
      <s.CardRate>{`${rate}%`}</s.CardRate>
    </s.Card>
  );
};

export default Card;
