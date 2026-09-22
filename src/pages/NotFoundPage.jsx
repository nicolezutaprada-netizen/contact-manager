import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="page content-card content-card--center">
      <p className="error-number">404</p>
      <h1>Página no encontrada</h1>
      <p>La dirección que escribiste no existe en Contact Manager.</p>
      <Link to="/" className="back-link">← Volver al inicio</Link>
    </section>
  );
}
