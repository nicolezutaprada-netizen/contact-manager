// Importa NavLink para crear enlaces y marcar la ruta activa.
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <span className="navbar__logo">📱</span>
        <span>Contact Manager</span>
      </div>

      <div className="navbar__links">
        <NavLink to="/" className="nav-link">
          🏠 Home
        </NavLink>

        <NavLink to="/about" className="nav-link">
          ℹ️ About
        </NavLink>
      </div>
    </nav>
  );
}
