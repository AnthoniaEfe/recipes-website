import "./Create.css";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import { projectFirestore } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

import React from "react";

export default function Create() {
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [method, setMethod] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);

  const navigate = useNavigate();
  const { color, mode } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipe = {
      title: title,
      cookingTime: `${cookingTime} minutes`,
      method: method,
      ingredients: ingredients,
    };
    try {
      await projectFirestore.collection("recipes").add(recipe);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const newIngredients = newIngredient.trim();

    if (newIngredients && !ingredients.includes(newIngredients)) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredients]);
    }

    // console.log(ingredients);
    setNewIngredient("");
    ingredientInput.current.focus();
  };
  return (
    <div className={`create-recipe ${mode}`}>
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Recipe Title
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          Recipe Ingredients
          <input
            type="text"
            onChange={(e) => setNewIngredient(e.target.value)}
            value={newIngredient}
            ref={ingredientInput}
          />
          <button
            className="add-ing-btn"
            onClick={handleAdd}
            style={{ backgroundColor: color }}
          >
            Add Ingredient
          </button>
        </label>
        <p>
          Current Ingredients:
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>

        <label>
          Recipe Time (minutes)
          <input
            type="number"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
          />
        </label>

        <label>
          Recipe Method
          <textarea
            rows="6"
            columns="70"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            required
          />
        </label>

        <button className="add-recipe-btn" style={{ backgroundColor: color }}>
          Add Recipe
        </button>
      </form>

      <button
        className="close-recipe-form"
        onClick={() => navigate("/")}
        style={{ backgroundColor: color }}
      >
        Close
      </button>
    </div>
  );
}

// fetch("http://localhost:3000/recipes/", {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(recipe),
// });
