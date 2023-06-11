/* eslint-disable react/prop-types */
import CardItem from "./CardItem";

export default function Cards({ className, movies }) {
  // console.log(movies);
  return (
    <div className={className}>
      {movies.map((movie) => (
        <CardItem 
          key={movie.imdbID}
          movie={movie}
        />
      ))}
    </div>
  );
}