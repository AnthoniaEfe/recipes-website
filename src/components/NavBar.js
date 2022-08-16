import "./NavBar.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useTheme } from "../hooks/useTheme";
import logo from "../assets/logo.svg";

export default function NavBar() {
  const { color } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <img src={logo} alt="" />
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
