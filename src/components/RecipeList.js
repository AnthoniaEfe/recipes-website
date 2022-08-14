import "./RecipeList.css";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();
  if (recipes.length === 0) {
    return <div className="error">No recipes to display...</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>Just {recipe.cookingTime} to make</p>

          <div>
            {/* <p>{recipe.method}</p> */}
            <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
