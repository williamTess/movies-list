import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { Movie } from "../../types/Movie";
import { slices } from "../../utils/enums";

export interface MovieState {
  movies: Movie[];
}

const initialState: MovieState = {
  movies: [],
};

export const movieSlice = createSlice({
  name: slices.MOVIE,
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
      return;
    },
    like: (state, action: PayloadAction<Movie>) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );

      if (index >= 0) {
        state.movies[index].likes += 1;
      }
      return;
    },
    dislike: (state, action: PayloadAction<Movie>) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );

      if (index >= 0) {
        state.movies[index].dislikes += 1;
      }
      return;
    },
    unlike: (state, action: PayloadAction<Movie>) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );

      if (index >= 0) {
        state.movies[index].likes -= 1;
      }
      return;
    },
    undislike: (state, action: PayloadAction<Movie>) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );

      if (index >= 0) {
        state.movies[index].dislikes -= 1;
      }
      return;
    },
    remove: (state, action: PayloadAction<Movie>) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );

      if (index >= 0) {
        state.movies.splice(index, 1);
      }
      return;
    },
  },
});

const { actions, reducer } = movieSlice;
export const { setMovies, like, dislike, unlike, undislike, remove } = actions;
export { reducer as movieReducer };
