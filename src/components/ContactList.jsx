import ContactCard from './ContactCard';

export default function ContactList({ contacts }) {
  if (contacts.length === 0) { // Si no hay contactos, muestra un mensaje indicando que no hay contactos.
    return <p style={{ color: '#999' }}>No hay contactos</p>;
  }

  return ( // Si hay contactos, recorre el array de contactos y devuelve un nuevo array con los elementos transformados en componentes ContactCard.
    <div>
      {contacts.map(function(contact) {
        return (
          <ContactCard
          //MISMOS ERROS QUE EN EL ARRAY DE CONTACTS, PARA QUE SEAN IGUALES Y NO HAYA ERRORES. SI NO SON IGUALES, NO FUNCIONA.(CONTACT...)
            key={contact.id}
            name={contact.name} //name= es el que debe ser igual al parametro del contact card
            phone={contact.phone}
            email={contact.email}
            isFavorite={contact.isFavorite}
          />
        );
      })}
    </div>
  );
}