/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function CardItem({ movie }) {
  
  return (
    <div className="relative">
      <Link to="">
        <img
          className="h-[350px] w-full object-cover xl:h-[280px]"
          src={movie.Poster}
          alt={movie.Title}
        />
      </Link>
      <span 
        className="bg-[rgba(0,0,0,0.7)] px-2 py-1 text-xs rounded-md absolute top-3 left-3 font-medium text-white">
        {movie.Type}
      </span>
      <div className="mt-3">
        <h4 
          className="text-base font-medium mb-1">
          {movie.Title}
        </h4>
        <p className="text-slate-500 text-sm">
          {movie.Year}
        </p>
      </div>
      <button>
        <i className="fa-regular fa-heart"></i>
      </button>
    </div>
  );
}