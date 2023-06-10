import { useEffect } from "react";
import { searchMoviesByTitle } from "../features/searchSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Search() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(searchMoviesByTitle("avengers"));
  }, [dispatch]);

  console.log(movies?.searchResults);

  return (
    <div>
      <h1>Search Page</h1>
    </div>
  );
}