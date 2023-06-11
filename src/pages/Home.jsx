import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieList, getMovieList } from "../features/movieSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getMovieList);

  useEffect(() => {
    dispatch(fetchMovieList("marvel"));
  }, [dispatch]);

  return (
    <div>
      {movies.map((movie, idx) => (
        <Link key={idx} to={`movie-detail/${movie.imdbID}`}>
          <h1>{movie.Title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Home;
