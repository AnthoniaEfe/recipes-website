import React from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
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
