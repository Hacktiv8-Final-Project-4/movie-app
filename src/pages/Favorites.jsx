import { useSelector } from "react-redux";
import Header from "../components/Header";
import Cards from "../components/cards/Cards";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites)

  return (
    <>
      <Header />
      <main className="w-full my-12 px-5 xl:max-w-6xl xl:mx-auto xl:px-0">
        <h2 className="mb-5 text-xl capitalize font-medium">Favorites Movies</h2>
        <Cards
          className="grid grid-cols justify-center sm:grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" 
          movies={favorites?.favoriteMovies} 
        />
      </main>
    </>
  )
}