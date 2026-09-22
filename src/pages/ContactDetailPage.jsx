//importa useParams y Link de react-router-dom para obtener parámetros de la URL y crear enlaces de navegación
import { useParams, Link } from 'react-router-dom';

// Recibe la lista desde App para buscar cualquier contacto, incluso los nuevos.
export default function ContactDetailPage({ contacts }) {
//Estamos obteniendo el parámetro "id" de la URL, que se usará para buscar el contacto correspondiente en la lista de contactos.
// id porque en la ruta definida en App.jsx se usa "/contact/:id", donde ":id" 
  const { id } = useParams();

//number(id) convierte el id de la URL (que es un string) a número para compararlo con los ids numéricos de los contactos.
//find devuelve el primer elemento q cumpla
  const contact = contacts.find(c => c.id === Number(id)); // si el id es igual al id del contacto
//!contact verifica si no se encontró un contacto con ese id. Si no se encuentra, muestra un mensaje de error y un enlace para volver al inicio.
  if (!contact) {
    return (
      <section className="page content-card content-card--center">
        <div className="page-icon">🔎</div>
        <h2>Contacto no encontrado</h2>
        <Link to="/" className="back-link">← Volver al inicio</Link>
      </section>
    );
  }
//si se encuentra:
  return (
    <section className="page content-card content-card--center">
      <div className="page-icon">👤</div>
      <h1>{contact.name}</h1>
      <p>Información del contacto</p>
      <div className="detail-list">
        <div className="detail-row"><span>📞</span><span>{contact.phone}</span></div>
        <div className="detail-row"><span>✉️</span><span>{contact.email}</span></div>
      </div>
      <Link to="/" className="back-link">← Volver a contactos</Link>
    </section>
  );
}
