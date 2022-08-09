import "./Recipe.css";
import { useFetch } from "../../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";

import React, { useEffect } from "react";

export default function Recipe() {
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;
  const { data: recipe, isPending, error } = useFetch(url);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [error, navigate]);
  return (
    <div className="recipe">
      {/* <h2>RECIPE</h2> */}
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {recipe && (
        <div>
          <h3 className="page-title">{recipe.title}</h3>
          <p>Takes {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients && recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </div>
      )}
    </div>
  );
}
