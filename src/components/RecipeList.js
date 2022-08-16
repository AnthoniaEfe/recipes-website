import "./RecipeList.css";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { projectFirestore } from "../firebase/config";
import deleteIcon from "../assets/delete_icon.svg";

export default function RecipeList({ recipes }) {
  const { mode, color } = useTheme();
  if (recipes.length === 0) {
    return <div className="error">No recipes to display...</div>;
  }

  const handleClick = (id) => {
    try {
      projectFirestore.collection("recipes").doc(id).delete();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3 style={{ color: color, borderColor: color }}>{recipe.title}</h3>
          <p>Just {recipe.cookingTime} to make</p>

          <div>
            <Link to={`/recipes/${recipe.id}`} style={{ color: color }}>
              Cook this
            </Link>
          </div>
          <img
            src={deleteIcon}
            alt=""
            onClick={() => handleClick(recipe.id)}
            className={`delete-icon ${mode}`}
          />
        </div>
      ))}
    </div>
  );
}
