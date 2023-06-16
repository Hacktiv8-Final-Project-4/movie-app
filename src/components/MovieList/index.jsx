/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { fetchMovieList } from "../../features/movieSlice";
import CardsCarousel from "../Cards/cardsCarousel";
import { useSelector, useDispatch } from "react-redux";

export default function MovieList({ title }) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  
  useEffect(() => {
    dispatch(fetchMovieList({ title }));
  }, [dispatch, title]);

  return (
    <div className="w-full mb-10 mt-10">
      <h2 className="text-xl sm:text-2xl mb-5 font-bold capitalize">{title}</h2>
      <CardsCarousel movies={movies?.movieList[title]} />
    </div>
  );
}

