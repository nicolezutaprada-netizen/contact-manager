// Importa el componente Link de react-router-dom para crear enlaces de navegación.
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    // nav agrupa los enlaces de navegación.
    <nav style={{
      display: 'flex',             // Coloca los enlaces en una fila.
      gap: '20px',                 // Deja 20px de separación entre ellos.
      padding: '15px',             // Deja 15px de espacio interior.
      backgroundColor: '#f5f5f5',  // Pone un fondo gris claro.
      marginBottom: '20px',        // Deja 20px de espacio debajo del nav.
      borderRadius: '8px'          // Redondea las esquinas.
    }}>
      {/* to="/" indica que este enlace lleva a la ruta de inicio.
          textDecoration quita el subrayado y color pone el texto gris oscuro. */}
      <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
        🏠 Home
      </Link>

      {/* Este enlace lleva a la ruta "/about", con los mismos estilos. */}
      <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>
        ℹ️ About
      </Link>
    </nav>
  );
}