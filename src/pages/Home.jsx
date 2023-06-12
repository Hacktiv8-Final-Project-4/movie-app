import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieList, getMovieList } from "../features/movieSlice";

import { MainLayout, CardWrapper, Card } from "../components";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getMovieList);

  useEffect(() => {
    dispatch(fetchMovieList());
  }, [dispatch]);

  return (
    <MainLayout>
      <h1 className="text-[36px] font-bold">New Arrival</h1>
      <CardWrapper>
        {movies.map((movie, idx) => (
          <Link
            to={`/movie-detail/${movie.imdbID}`}
            key={idx}
            className="w-[calc(25%_-_3rem)] relative"
          >
            <Card data={movie} key={idx} />
          </Link>
        ))}
      </CardWrapper>
    </MainLayout>
  );
};

export default Home;
