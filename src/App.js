import "./App.css";

//pages
import Home from "./pages/home/Home.js";
import Recipe from "./pages/recipes/Recipe.js";
import Create from "./pages/create/Create.js";
import Search from "./pages/search/Search.js";
import NavBar from "./components/NavBar.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
