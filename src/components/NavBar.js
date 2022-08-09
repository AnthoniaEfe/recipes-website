import "./NavBar.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          Vesta Cooking
        </Link>
        <SearchBar />
        <Link to="/create" className="create">
          Create New Recipe
        </Link>
      </nav>
    </div>
  );
}
