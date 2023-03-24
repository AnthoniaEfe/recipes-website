import "./Recipe.css";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { projectFirestore } from "../../firebase/config";

export default function Recipe() {
  const { mode, color } = useTheme();
  const { id } = useParams();
  console.log({ id });

  const navigate = useNavigate();
  const [recipe, setRecipe] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = () => {
    projectFirestore.collection("recipes").doc(id).update({
      title: "New Title",
    });
  };

  useEffect(() => {
    setIsPending(true);

    const unSub = projectFirestore
      .collection("recipes")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setError("No recipe found");
          setIsPending(false);
        }
      });

    return () => unSub();
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [error, navigate]);

  return (
    <div className={`recipe ${mode}`}>
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {recipe && (
        <div>
          <h3 className="page-title" style={{ color: color }}>
            {recipe.title}
          </h3>
          <p>Takes {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients &&
              recipe.ingredients.map((ing) => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
        </div>
      )}


    </div>
  );
}
