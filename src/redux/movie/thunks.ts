import { movies } from "../../data/movies";
import { AppDispatch } from "../../types/redux";
import { setMovies } from "./movieSlice";

export const getMovies = () => async (dispatch: AppDispatch) => {
  dispatch(setMovies(movies));

  return;
};
