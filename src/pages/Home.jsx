import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", padding: "20px" }}>
      <h1>Welcome to BHARTI Platform</h1>
      <p>Select a category:</p>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/hollywood" style={{ color: "white" }}>Hollywood</Link>
        <Link to="/tollywood" style={{ color: "white" }}>Tollywood</Link>
        <Link to="/bollywood" style={{ color: "white" }}>Bollywood</Link>
      </nav>
    </div>
  );
}
