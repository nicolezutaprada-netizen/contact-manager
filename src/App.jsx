// Importa los componentes necesarios para crear las rutas.
import { Routes, Route } from 'react-router-dom';
// Importa useState para guardar y actualizar la lista de contactos.
import { useState } from 'react';

// Importa las páginas.
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

// Importa la barra de navegación.
import Navbar from './pages/Navbar';

import ContactDetailPage from './pages/ContactDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';


export default function App() {
  // contacts contiene la lista actual y setContacts permite actualizarla.
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Ana García', phone: '555-1234', email: 'ana@email.com' },
    { id: 2, name: 'Carlos López', phone: '555-5678', email: 'carlos@email.com' },
    { id: 3, name: 'María Torres', phone: '555-9012', email: 'maria@email.com' }
  ]);

  // Agrega un contacto nuevo conservando todos los contactos anteriores.
  function handleAddContact() {
    const newContact = {
      id: Date.now(),
      name: `Contacto ${contacts.length + 1}`,
      phone: '000-0000',
      email: 'nuevo@email.com'
    };

    setContacts([...contacts, newContact]);
  }

  return (
    <main className="app-shell">

      {/* Muestra los enlaces Home y About. */}
      <Navbar />

      {/* Elige qué página mostrar según la dirección actual. */}
      <Routes>
        {/* La dirección "/" muestra HomePage. */}
        {/* Envía los contactos y la función para agregar a HomePage mediante props. */}
        <Route
          path="/"
          element={<HomePage contacts={contacts} onAddContact={handleAddContact} />}
        />

        {/* Envía la misma lista para encontrar el contacto seleccionado por su ID. */}
        <Route
          path="/contact/:id"
          element={<ContactDetailPage contacts={contacts} />}
        />
        {/* La dirección "/about" muestra AboutPage. */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </main>
  );
}
