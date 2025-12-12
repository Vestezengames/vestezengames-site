import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-logo">VestezenGames</div>

      <button
        className={`nav-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        <NavLink to="/" end className="nav-link" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/pp" className="nav-link" onClick={closeMenu}>
          Privacy Policy
        </NavLink>
        <NavLink to="/tos" className="nav-link" onClick={closeMenu}>
          Terms of Service
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={closeMenu}>
          About
        </NavLink>
      </nav>
    </header>
  );
}