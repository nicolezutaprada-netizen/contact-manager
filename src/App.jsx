// Importa React y ReactDOM.
import { Routes, Route } from 'react-router-dom';

// Importa las páginas.
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

// Importa la barra de navegación.
import Navbar from './pages/Navbar';

import ContactDetailPage from './pages/ContactDetailPage';
import NotFoundPage from './pages/NotFoundPage';


export default function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>

      {/* Muestra los enlaces Home y About. */}
      <Navbar />

      {/* Elige qué página mostrar según la dirección actual. */}
      <Routes>
        {/* La dirección "/" muestra HomePage. */}
        <Route path="/" element={<HomePage />} />  
         <Route path="/contact/:id" element={<ContactDetailPage />} />
        {/* La dirección "/about" muestra AboutPage. */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </div>
  );
}
