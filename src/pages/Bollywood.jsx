import { useState } from "react";
import { movies } from "../data/movies";
import MovieCard from "../components/MovieCard";
import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";


export default function Hollywood() {
  const [searchTerm, setSearchTerm] = useState("");
const bollywoodMovies = movies.filter(m => m.category === "Bollywood");
const filteredMovies = bollywoodMovies.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()));



  // Pick first movie as banner
  const bannerMovie = filteredMovies[0];

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", padding: "20px" }}>
      <h2 style={{ color: "#fff" }}>Hollywood Movies</h2>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Banner movie={bannerMovie} />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}
