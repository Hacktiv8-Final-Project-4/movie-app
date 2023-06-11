import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { imdbID } = useParams();

  return <div>Detail : {imdbID}</div>;
};

export default Detail;
