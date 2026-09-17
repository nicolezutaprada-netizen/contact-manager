import ContactCard from './ContactCard';


export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <div>
      {contacts.map(function(contact) {
        return (
          <div key={contact.id} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '10px'
          }}>
            //key es un identificador unico pero id es el identificador del contacto
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
              style={{
                backgroundColor: '#ff4444',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Eliminar
            </button>
          </div>
        );
      })}
    </div>
  );
}