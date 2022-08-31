import { createSelector } from "@reduxjs/toolkit";
import { Movie } from "../../types/Movie";
import { RootState } from "../../types/redux";

export const selectMovieByFilter = createSelector(
  [
    (state: RootState) => state.movie.movies,
    (
      state: RootState,
      filter: {
        numberItemPerPage: number;
        page: number;
        category?: string;
      }
    ) => filter,
  ],
  (movies: Movie[], filter) => {
    const { numberItemPerPage, page, category } = filter;
    const filteredMovies: Array<Movie[]> = [];

    if (category) {
      movies = movies.filter((movie) => movie.category.includes(category));
    }
    const len = movies.length;

    for (let i = 0; i < movies.length; i += numberItemPerPage) {
      const chunk = movies.slice(i, i + numberItemPerPage);
      filteredMovies.push(chunk);
    }

    return { moviesFiltered: filteredMovies[page - 1], movieLen: len };
  }
);

export const selectMovieCategories = createSelector(
  [(state: RootState) => state.movie.movies],
  (movies: Movie[]) => {
    const categories: string[] = [];
    movies.forEach((movie) =>
      movie.category.forEach((catego) => categories.push(catego))
    );

    const uniqueArray = categories.filter(function (item, pos, self) {
      return self.indexOf(item) === pos;
    });

    return uniqueArray;
  }
);
