import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList, fetchMovieList } from "../../features/movieSlice";

import Button from "../atoms/Button";
import MovieCard from "../molecules/MovieCard";

import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import Icon from "../atoms/Icon";
SwiperCore.use([Navigation]);

const MovieCarousel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieList());
  }, [dispatch]);

  const movies = useSelector(getMovieList);
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
    <div className="relative">
      <div className="w-full">
        <Swiper
          ref={swiperRef}
          spaceBetween={16}
          slidesPerView={4}
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
              slidesPerView: 4,
            },
          }}
        >
          {movies.map((movie, idx) => (
            <SwiperSlide key={idx}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Button
        onClick={slideToPrev}
        className={`hidden lg:block absolute -left-24 top-[calc(50%_-_60px)] px-4 py-2 rounded ${
          isBeginning ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <Icon name="chevron-left" className="w-14 h-14" />
      </Button>
      <Button
        onClick={slideToNext}
        className={`hidden lg:block absolute -right-24 top-[calc(50%_-_60px)] px-4 py-2 rounded ${
          isEnd ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <Icon name="chevron-right" className="w-14 h-14" />
      </Button>
    </div>
  );
};

export default MovieCarousel;
