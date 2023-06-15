/* eslint-disable no-useless-catch */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../services/api";

export const fetchMovieList = createAsyncThunk(
  "movies/fetchMovie",
  async () => {
    try {
      const response = await getMovies();
      // console.log(response.data.Search);
      return response.data.Search;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  isLoading: false,
  movies: [],
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
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovieList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const getMovieList = (state) => state.movies.movies;
export default movieSlice.reducer;
