import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {

  const [title, setTitle] = useState("");

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  }

  return (
    <header className="bg-slate-500">
      <h1>Movie</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <input
              type="text"
              value={title}
              placeholder="search movies"
              onChange={handleInputChange}
            />
            <button>search</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}