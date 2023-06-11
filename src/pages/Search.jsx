import { useEffect } from "react";
import { searchMoviesByTitle } from "../features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import slicedParams from "../utils/slicedParams";

export default function Search() {
  const dispatch = useDispatch();
  const { searchParams } = useParams();
  const title = slicedParams(searchParams, 7, searchParams.length);
  
  const movies = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(searchMoviesByTitle(title));
  }, [title, dispatch]);

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