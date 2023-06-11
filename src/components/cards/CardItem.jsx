/* eslint-disable react/prop-types */
export default function CardItem({ movie }) {
  console.log(movie);
  return (
    <div>
      <img
        src={movie.Poster}
        alt={movie.Title}
      />
      <span>{movie.Type}</span>
      <div>
        <h4>{movie.Title}</h4>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}