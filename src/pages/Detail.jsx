import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../features/detailSlice";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  const dispatch = useDispatch();

  const details = useSelector((state) => state.detail);
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(getMovieDetails({ movieId }));
  }, [dispatch, movieId]);

  console.log(details?.movieDetails);

  return <div>Detail : {movieId}</div>;
};

export default Detail;
