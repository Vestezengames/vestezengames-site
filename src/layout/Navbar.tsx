import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-logo">VestezenGames</div>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/pp">PP</NavLink>
        <NavLink to="/tos">TOS</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}
