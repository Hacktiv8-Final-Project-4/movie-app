/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList, fetchMovieList } from "../../features/movieSlice";

import Button from "../atoms/Button";
import MovieCard from "../molecules/MovieCard";

import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import Icon from "../atoms/Icon";
import CardItem from "../Cards/cardItem";
SwiperCore.use([Navigation]);

const MovieCarousel = ({ movies }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const slideToPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideToNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setIsBeginning(swiperRef.current.swiper.isBeginning);
      setIsEnd(swiperRef.current.swiper.isEnd);
    }
  };

  return (
    <div className="relative w-full">
      <Swiper
        ref={swiperRef}
        spaceBetween={16}
        slidesPerView={5}
        navigation
        onSlideChange={handleSlideChange}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {movies?.map((movie, idx) => (
          <SwiperSlide key={idx}>
            {movie && <CardItem movie={movie} />}
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        onClick={slideToPrev}
        className={`hidden w-12 h-12 border-2 border-slate-500 lg:block absolute -left-5 bg-white rounded-full shadow-md top-[calc(50%_-_60px)] rounded z-20 ${
          isBeginning ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <i className="fa-solid fa-angle-left text-lg"></i>
      </Button>
      <Button
        onClick={slideToNext}
        className={`hidden w-12 h-12 bg-white border-2 border-slate-500 rounded-full lg:block absolute -right-5 top-[calc(50%_-_60px)] px-4 py-2 rounded z-20 ${
          isEnd ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <i className="fa-solid fa-angle-right text-lg"></i>
      </Button>
    </div>
  );
};

export default MovieCarousel;
