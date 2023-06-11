import { useSelector } from "react-redux";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import slicedParams from "../utils/slicedParams";
import Cards from "../components/cards/Cards";

export default function Search() {
  const { searchParams } = useParams();
  const title = slicedParams(searchParams, 7, searchParams.length);
  
  const movies = useSelector((state) => state.search);

  return (
    <>
      <Header />
      <main>
        <h1>{title}</h1>
        <Cards
          className="" 
          movies={movies?.searchResults} 
        />
      </main>
    </>
  );
}