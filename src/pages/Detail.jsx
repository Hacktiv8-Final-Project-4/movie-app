import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../features/detailSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Detail = () => {
  const dispatch = useDispatch();

  const { movieDetails } = useSelector((state) => state.detail);
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(getMovieDetails({ movieId }));
  }, [dispatch, movieId]);

  let rates = [];

  for(let i = 1; i <= 5; i++) {
    if (i > Math.round(movieDetails.imdbRating / 2)) {
      rates.push(
        <i className="fa-regular fa-star text-yellow-500 text-sm"></i>
      );
    } else {
      rates.push(
        <i className="fa-solid fa-star text-yellow-500 text-sm"></i>
      );
    }
  }

  return (
    <>
      <Header />
      <main className="my-32 max-w-3xl mx-auto">
        <div className="flex gap-x-6">
          <img
            className="min-h-[480px]"
            src={movieDetails.Poster}
            alt={movieDetails.Title}
          />
          <table>
            <thead>
              <tr>
                <th colSpan="2">
                  <h4 className="text-xl font-medium text-left">
                    {movieDetails.Title}
                  </h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-slate-600">
                <td>Genre:</td>
                <td>{movieDetails.Genre}</td>
              </tr>
              <tr className="text-slate-600">
                <td>Release:</td>
                <td>{movieDetails.Released}</td>
              </tr>
              <tr className="text-slate-600">
                <td>Rate:</td>
                <td>{rates}</td>
              </tr>
              <tr className="text-slate-600">
                <td>Director:</td>
                <td>{movieDetails.Director}</td>
              </tr>
              <tr className="text-slate-600">
                <td>Writer:</td>
                <td>{movieDetails.Writer}</td>
              </tr>
              <tr className="text-slate-600">
                <td>Language:</td>
                <td>{movieDetails.Language}</td>
              </tr>
              <tr className="text-slate-600">
                <td>Country:</td>
                <td>{movieDetails.Country}</td>
              </tr>
              <tr className="text-slate-600">
                <td>Runtime:</td>
                <td>{movieDetails.Runtime}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 w-11/12">
          <p className="font-medium text-lg">Plot</p>
          <p className="text-slate-500">{movieDetails.Plot}</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Detail;
