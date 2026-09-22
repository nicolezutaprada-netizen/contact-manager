
import { Link } from 'react-router-dom';

// Recibe desde App la lista y la función que agrega un contacto.
export default function HomePage({ contacts, onAddContact }) {
  return (
    <section className="page">
      <div className="hero-panel">
        <p className="eyebrow">Tu agenda personal</p>
        <h1>Mis Contactos</h1>
        <p className="hero-panel__text">
          Mantén a tus personas favoritas siempre cerca y encuentra sus datos rápidamente.
        </p>
      </div>

      <div className="section-heading">
        <div>
          <h2>Todos los contactos</h2>
          <span className="contact-count">{contacts.length} contactos</span>
        </div>

        {/* Al hacer clic, ejecuta la función recibida desde App. */}
        <button className="add-button" onClick={onAddContact}>
          ＋ Agregar contacto
        </button>
      </div>

      <div className="contact-grid">
      {contacts.map(function(contact) {
        return (
            <Link key={contact.id} to={`/contact/${contact.id}`} className="contact-link">
              <span className="contact-avatar">{contact.name.charAt(0)}</span>
              <h3>{contact.name}</h3>
              <p>📞 {contact.phone}</p>
            </Link>
        );
      })}
      </div>
    </section>
  );
}
