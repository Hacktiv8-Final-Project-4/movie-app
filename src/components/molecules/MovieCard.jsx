import Icon from "../atoms/Icon";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  if (!data) {
    // Movie data tidak lengkap, dapatkan penanganan yang sesuai
    return null;
  }

  return (
    <div className="relative">
      <Link to={`/movie-detail/${data.imdbID}`}>
        <img
          className="w-full h-[450px] object-cover"
          src={data.Poster}
          alt={`poster ${data.Title}`}
        />
        <p className="pt-2 text-[12px] text-[#9CA3AF] uppercase font-bold">
          Tahun {data.Year}
        </p>
        <h4 className="font-bold text-[18px] pt-1 text-[#111827]">
          {data.Title}
        </h4>
        <div className="absolute top-5 left-4">
          <span className="bg-white/90 backdrop-blur-sm rounded-md px-4 py-1.5 capitalize">
            {data.Type}
          </span>
        </div>
      </Link>
      <div className="absolute top-2 right-3">
        <Button className="hover:scale-110 transition-all duration-300 bg-white/40 backdrop-blur-md rounded-full py-1.5 px-2">
          <Icon
            name="heart"
            className="w-6 h-6 text-white hover:text-red-500 transition-all duration-300"
            fill="currentColor"
          />
        </Button>
      </div>
    </div>
  );
};

export default MovieCard;
