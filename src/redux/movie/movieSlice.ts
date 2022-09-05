import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { Movie } from "../../types/Movie";
import { slices, Vote } from "../../utils/enums";

export interface MovieState {
  movies: Movie[];
  categories: string[];
}

const initialState: MovieState = {
  movies: [],
  categories: [],
};

export const movieSlice = createSlice({
  name: slices.MOVIE,
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
      return;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
      return;
    },
    like: (state, action: PayloadAction<Movie>) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );

      if (index >= 0) {
        state.movies[index].likes += 1;
        state.movies[index].vote = Vote.UP;
      }
      return;
    },
    dislike: (state, action: PayloadAction<Movie>) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );

      if (index >= 0) {
        state.movies[index].dislikes += 1;
        state.movies[index].vote = Vote.DOWN;
      }
      return;
    },
    unlike: (state, action: PayloadAction<Movie>) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );

      if (index >= 0) {
        state.movies[index].likes -= 1;
        state.movies[index].vote = Vote.NONE;
      }
      return;
    },
    undislike: (state, action: PayloadAction<Movie>) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );

      if (index >= 0) {
        state.movies[index].dislikes -= 1;
        state.movies[index].vote = Vote.NONE;
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
export const {
  setMovies,
  setCategories,
  like,
  dislike,
  unlike,
  undislike,
  remove,
} = actions;
export { reducer as movieReducer };
