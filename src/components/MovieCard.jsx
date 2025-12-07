// src/components/MovieCard.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const [selectedQuality, setSelectedQuality] = useState(movie.quality?.[0] ?? "720p");

  const handleDownload = () => {
    // fallback alert for now
    alert(`Downloading ${movie.name} in ${selectedQuality}`);
    // later: window.location.href = `http://localhost:5000/download/${movie.id}?q=${selectedQuality}`
  };

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.image} alt={movie.name} />
      </Link>

      <div>
        <h3 className="title">{movie.name}</h3>
        <div className="meta">{movie.category}</div>
      </div>

      <div className="quality-row">
        {movie.quality?.map((q) => (
          <button
            key={q}
            className={`btn ${selectedQuality === q ? "primary" : "ghost"}`}
            onClick={() => setSelectedQuality(q)}
          >
            {q}
          </button>
        ))}

        <button className="btn" onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
}
