import { movies } from "../../data/movies";
import { AppDispatch } from "../../types/redux";
import { Vote } from "../../utils/enums";
import { setCategories, setMovies } from "./movieSlice";

export const getMovies = () => async (dispatch: AppDispatch) => {
  const formatedMovies = movies.map((movie) => {
    return { ...movie, vote: Vote.NONE };
  });

  dispatch(setMovies(formatedMovies));
  return;
};

export const getCategories = () => async (dispatch: AppDispatch) => {
  const categories: string[] = [];
  movies.forEach((movie) =>
    movie.category.forEach((catego) => categories.push(catego))
  );

  const uniqueArray = categories.filter(function (item, pos, self) {
    return self.indexOf(item) === pos;
  });

  dispatch(setCategories(uniqueArray));
  return;
};
