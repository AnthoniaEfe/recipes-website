import "./Home.css";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";

import React from "react";

export default function Home() {
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      <h2>Cook something new...</h2>
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}
