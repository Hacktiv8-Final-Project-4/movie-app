import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchMoviesByTitle } from "../../features/searchSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if(title.length) {
        dispatch(searchMoviesByTitle(title));
        navigate(`/search=${title}`, {replace: true});
      }
    }, 500);

    return () => clearTimeout(timeOut);
  }, [dispatch, navigate, title]);

  return (
    <header>
      <nav className="border-gray-200 dark:bg-gray-900 fixed z-50 top-0 left-0 right-0">
        <div className="max-w-screen-xl flex items-center mx-auto p-4 gap-x-10">
          <Link to="/" 
            className="w-max text-2xl font-semibold text-white flex items-center gap-x-3">
            <i className="fa-solid fa-circle-play text-yellow-500"></i>
            <span className="-mt-1">Movie</span>
          </Link>
          {/* search */}
          <ul className="w-full flex items-center gap-x-5">
            <li className="w-max text-white font-medium">
              <Link to="/">Home</Link>
            </li>
            <li className="w-max text-white font-medium">
              <Link to="/favorites">Favorites</Link>
            </li>
            <li className="w-full flex justify-end">
              <div className="flex md:order-2">
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Search</span>
                </button>
                <div className="relative hidden md:block">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fa-solid fa-magnifying-glass text-slate-500"></i>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input 
                    type="text" 
                    id="search-navbar" 
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-400 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."
                    autoComplete="off"
                    onChange={handleInputChange}
                  />
                </div>
                <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                  <span className="sr-only">Open menu</span>
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
