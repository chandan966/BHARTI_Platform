import { useParams } from "react-router-dom";
import { movies } from "../data/movies";

export default function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find(m => m.id.toString() === id);

  if (!movie) return <h2 style={{ color: "white" }}>Movie not found</h2>;

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", padding: "20px" }}>
      <h1>{movie.name}</h1>
      <img src={movie.image} alt={movie.name} style={{ width: "300px", borderRadius: "10px" }} />
      <p>Category: {movie.category}</p>
      <p>Description: {movie.description || "No description available"}</p>
      <div>
        {movie.quality.map((q) => (
          <button key={q} style={{ margin: "5px", padding: "10px", backgroundColor: "green", color: "#fff", border: "none", borderRadius: "5px" }}>
            Download {q}
          </button>
        ))}
      </div>
    </div>
  );
}
