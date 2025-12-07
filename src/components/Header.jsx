// src/components/Header.jsx
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <div className="logo">BH</div>
        <div className="title">BHARTI Platform</div>
      </div>

      <nav className="nav">
        <NavLink to="/hollywood">Hollywood</NavLink>
        <NavLink to="/tollywood">Tollywood</NavLink>
        <NavLink to="/bollywood">Bollywood</NavLink>
      </nav>
    </header>
  );
}
