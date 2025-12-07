// src/components/Banner.jsx
export default function Banner({ movie }) {
  if (!movie) return null;
  return (
    <div className="banner" style={{ backgroundImage: `url(${movie.image})` }}>
      <div className="overlay" />
      <div className="content">
        <h2>{movie.name}</h2>
        <p style={{ color: "var(--muted)" }}>{movie.category}</p>
      </div>
    </div>
  );
}
