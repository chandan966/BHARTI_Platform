// src/components/SearchBar.jsx
export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="searchbar">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search movie..."
      />
    </div>
  );
}
