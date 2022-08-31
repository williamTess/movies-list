import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import FilterNumberItems from "../../components/filter-number-items/FilterNumberItems";
import Pages from "../../components/pages/Pages";
import SearchDropdown from "../../components/search-dropdown/SearchDropdown";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { selectMovieByFilter } from "../../redux/movie/selectors";
import { getMovies } from "../../redux/movie/thunks";
import { roundUp } from "../../utils/utils";
import { s } from "./style";

const Home = () => {
  const dispatch = useAppDispatch();
  const [numberItemPerPage, setNumberItemPerPage] = useState<number>(4);
  const [page, setPage] = useState<number>(1);
  const [category, setCategory] = useState<string>("");
  const { moviesFiltered, movieLen } = useAppSelector((state) =>
    selectMovieByFilter(state, { numberItemPerPage, page, category })
  );

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  console.log("test");

  const onClickPageSize = (value: number) => {
    setNumberItemPerPage(value);
    setPage(1);
  };

  const onClickPage = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const onClickCategory = (value: string) => {
    setCategory(value);
  };

  return (
    <s.Container>
      <s.TitleContainer>
        <s.Title>MOVIE WEB</s.Title>
      </s.TitleContainer>
      <s.FilterContainer>
        <FilterNumberItems onClickPage={onClickPageSize} />
        <SearchDropdown onClickCategory={onClickCategory} />
      </s.FilterContainer>
      <s.CardsContainer>
        {moviesFiltered.map((movie) => (
          <Card
            key={movie.id}
            movie={movie}
            numberCardsPerPage={numberItemPerPage}
          />
        ))}
      </s.CardsContainer>
      <s.PageContainer>
        <Pages
          page={page}
          maxPage={roundUp(movieLen / numberItemPerPage)}
          onClick={onClickPage}
        />
      </s.PageContainer>
    </s.Container>
  );
};

export default Home;
