import { useEffect } from "react";
import { searchMoviesByTitle } from "../features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";

export default function Search() {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.search);
  useEffect(() => {
    dispatch(searchMoviesByTitle("avengers"));
  }, [dispatch]);

  console.log(movies?.searchResults);

  return (
    <>
      <Header />
      <main>
        <h1>Search Page</h1>
      </main>
    </>
  );
}