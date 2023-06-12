import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MainLayout, CardWrapper, Card } from "../components";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovieList, getMovieList } from "../features/movieSlice";

import { SwiperSlide, Swiper } from "swiper/react";
import { Controller } from "swiper";
import "swiper/swiper.min.css";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getMovieList);

  useEffect(() => {
    dispatch(fetchMovieList());
  }, [dispatch]);

  return (
    <MainLayout>
      <h1 className="text-[36px] font-bold">New Arrival</h1>
      <Swiper spaceBetween={16} slidesPerView={4}>
        <CardWrapper>
          {movies.map((movie, idx) => (
            <SwiperSlide key={idx}>
              <Link to={`/movie-detail/${movie.imdbID}`} className="w-full">
                <Card data={movie} />
              </Link>
            </SwiperSlide>
          ))}
        </CardWrapper>
      </Swiper>
      <h1 className="text-[36px] font-bold">New Arrival</h1>
      <Swiper spaceBetween={16} slidesPerView={4}>
        <CardWrapper>
          {movies.map((movie, idx) => (
            <SwiperSlide key={idx}>
              <Link to={`/movie-detail/${movie.imdbID}`} className="w-full">
                <Card data={movie} />
              </Link>
            </SwiperSlide>
          ))}
        </CardWrapper>
      </Swiper>
    </MainLayout>
  );
};

export default Home;
