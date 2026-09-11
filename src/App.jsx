

import Header from './components/Header';
import ContactList from './components/ContactList';
// Las propiedades de cada contacto coinciden con las que se leen en ContactList.
const contacts = [
  { id: 1, name: "Ana García", phone: "+1 (555) 123-4567", email: "ana@email.com", isFavorite: true },
  { id: 2, name: "Carlos López", phone: "+1 (555) 987-6543", email: "carlos@email.com", isFavorite: false },
  { id: 3, name: "María Torres", phone: "+1 (555) 456-7890", email: "maria@email.com", isFavorite: true },
  { id: 4, name: "Luis Martínez", phone: "+1 (555) 234-5678", email: "luis@email.com", isFavorite: false }
];

export default function App() {
// Recorre contacts y crea un nuevo array solo con los favoritos Y Guarda la cantidad final en la variable favoriteCount.
  const favoriteCount = contacts.filter(function(c) {
// c es el contacto que se está revisando en esta vuelta. Si c.isFavorite es true, se incluye; si es false, se excluye.
    return c.isFavorite;
// .length cuenta cuántos contactos quedaron en el nuevo array.
  }).length;

  return (
    <div style={{ padding: '20px', width: '100%', maxWidth: '600px', boxSizing: 'border-box', margin: '0 auto' }}>
      <Header />

      <p style={{ color: '#666', margin: '0 0 16px', lineHeight: 1.5 }}>
        Total: {contacts.length} contactos | Favoritos: {favoriteCount}
      </p>

      <ContactList contacts={contacts} />
    </div>
  );
}
