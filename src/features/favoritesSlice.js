import { createSlice } from "@reduxjs/toolkit";
import findMovie from "../utils/findMovie";
import unmatchedMovies from "../utils/unmatchedMovies";

const initialState = {
  favorites: [],
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const { movie } = action.payload;

      const isMovieAxist = findMovie(state.favorites, movie.imdbID);

      if (!isMovieAxist) {
        state.favorites.push(movie);
      }
    },
    removeFromFavorites: (state, action) => {
      const { movieId } = action.payload;

      state.favorites = unmatchedMovies(state.favorites, movieId);
    }
  }
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
