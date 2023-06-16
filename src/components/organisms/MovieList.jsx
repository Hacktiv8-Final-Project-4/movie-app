/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { fetchMovieList } from "../../features/movieSlice";
import MovieCarousel from "./MovieCarousel";
import { useSelector, useDispatch } from "react-redux";

export default function MovieList({ title }) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  
  useEffect(() => {
    dispatch(fetchMovieList({ title }));
  }, [dispatch, title]);

  return (
    <div className="w-full mb-10">
      <h2 className="text-2xl mb-5 font-bold capitalize">{title}</h2>
      <MovieCarousel movies={movies?.movieList[title]} />
    </div>
  );
}

