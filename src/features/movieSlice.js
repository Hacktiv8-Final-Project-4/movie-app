/* eslint-disable no-useless-catch */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../services/api";

export const fetchMovieList = createAsyncThunk(
  "movies/fetchMovie",
  async ({ title }) => {
    try {
      const response = await getMovies({ title });
      const movies = response.data.Search;

      return {title, movies};

    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  isLoading: false,
  movieList: {},
  isError: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovieList.fulfilled, (state, action) => {
        const {title, movies} = action.payload;

        state.isLoading = false;
        state.movieList[title] = movies.filter((movie) => movie.Title = title);
      })
      .addCase(fetchMovieList.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const getMovieList = (state) => state.movies.movies;
export default movieSlice.reducer;
