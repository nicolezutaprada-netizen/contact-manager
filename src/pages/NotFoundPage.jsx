import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link to="/">← Volver al inicio</Link>
    </div>
  );
}