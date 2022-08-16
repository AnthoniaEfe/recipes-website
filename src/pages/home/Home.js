import "./Home.css";
import { projectFirestore } from "../../firebase/config";
import RecipeList from "../../components/RecipeList";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection("recipes").onSnapshot(
      (snapshot) => {
        if (snapshot.exist === false) {
          setIsPending(false);
          setError("No recipes found");
        } else {
          let results = [];
          snapshot.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });

          setData(results);
          setIsPending(false);
        }
      },
      (error) => {
        setIsPending(false);
        setError(error.message);
      }
    );

    return () => unsub();
  }, []);
  return (
    <div className="home">
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
