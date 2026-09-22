import ContactCard from './ContactCard';


export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <div>
      {contacts.map(function(contact) {
        return (
          <div key={contact.id} className="contact-list-row">
            {/* key es un identificador único e id identifica al contacto. */}
            <ContactCard
             key={contact.id} 
              id={contact.id}
              name={contact.name}
              phone={contact.phone}
              isFavorite={contact.isFavorite}
              email={contact.email}
            />
            <button
              onClick={function() { onDeleteContact(contact.id); }}
              className="delete-button"
            >
              Eliminar
            </button>
          </div>
        );
      })}
    </div>
  );
}
