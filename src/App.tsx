import { NavLink, Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-logo">VestezenGames</div>
        <nav className="nav-links">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/pp" className="nav-link">
            PP
          </NavLink>
          <NavLink to="/tos" className="nav-link">
            TOS
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pp" element={<PrivacyPolicy />} />
          <Route path="/tos" element={<TermsOfService />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
