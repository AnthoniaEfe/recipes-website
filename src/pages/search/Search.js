import "./Search.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";
import { useTheme } from "../../hooks/useTheme";

export default function Search() {
  const { mode } = useTheme();
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("query");

  const url = " http://localhost:3000/recipes?q=" + query;

  const { data, error, isPending } = useFetch(url);
  return (
    <div className={`search ${mode}`}>
      <h2 className="page-title">Recipes that contain "{query}"</h2>

      {isPending && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
