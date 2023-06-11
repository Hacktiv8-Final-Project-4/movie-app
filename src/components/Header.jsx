import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  }

  const handleOnSearch = () => {
    if (title.length) {
      navigate(`/search=${title}`, {replace: true});
    }
  }

  return (
    <header 
      className="flex items-center p-5 gap-x-5 border-b border-slate-200">
      <h1 className="text-xl font-semibold">
        Movie
      </h1>
      <nav>
        <ul className="flex items-center gap-x-5">
          <li className="text-slate-700 hover:text-sky-500 font-medium">
            <Link to="/">Home</Link>
          </li>
          <li>
            <input
              className="text-slate-700 border border-slate-300 px-3 py-2 text-sm rounded-md focus:border-2 focus:border-sky-500 focus:outline-none"
              type="text"
              value={title}
              placeholder="Search Movies"
              onChange={handleInputChange}
            />
            <button
              onClick={handleOnSearch} 
              className="bg-sky-500 px-5 py-2 text-sm font-medium rounded-md ml-3 capitalize text-white hover:bg-sky-700 active:bg-sky-500">
              search
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}