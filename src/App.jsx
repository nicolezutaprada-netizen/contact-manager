import { useState } from 'react';
import Header from './components/Header';
import ContactList from './components/ContactList';


//contacts → la lista de datos.
//setContacts → la función que cambia esa lista.
export default function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Ana García", phone: "555-1234", email: "ana@email.com", isFavorite: true },
    { id: 2, name: "Carlos López", phone: "555-5678", email: "carlos@email.com", isFavorite: false },
    { id: 3, name: "María Torres", phone: "555-9012", email: "maria@email.com", isFavorite: true }
  ]);

  
// En App.jsx, agregar función y botón
function handleAddContact() {
  const newContact = {
    id: Date.now(), // ID único temporal
    name: "Contacto " + (contacts.length + 1),
    phone: "000-0000",
    email: "nuevo@email.com",
    isFavorite: false
  };

  setContacts([...contacts, newContact]);
}


// En App.jsx
//HABER ENTONCES EN EL MOMENTO EN EL QUE EL USUARIO SELECCIONA ELIMINAR ESE CONTACT ID ENTRA EN FILTER  Y FILTER SOLO
//  GUARDA A LOS QUE SEAN DIFERENTES DEL CONTACT ID Q EL USUARIO PRESIONO PA ELIMINAR, 
// QUEDANDO SOLO LOS Q NO SE QUIEREN ELIMINAR
function handleDeleteContact(contactId) {
  if (window.confirm("¿Estás seguro de que deseas eliminar este contacto?")) {
    const updatedContacts = contacts.filter(function(contact) {
      return contact.id !== contactId;
    });

    setContacts(updatedContacts);
  }
}



  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Header />
<button
  onClick={handleAddContact}
  style={{ marginBottom: '20px', padding: '10px 20px' }}
>
  + Agregar Contacto
</button>
      <p>Total: {contacts.length} contactos</p>
      <ContactList   
      contacts={contacts}
      onDeleteContact={handleDeleteContact} />
    </div>
  );
}


