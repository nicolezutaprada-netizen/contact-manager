//importa useParams y Link de react-router-dom para obtener parámetros de la URL y crear enlaces de navegación
import { useParams, Link } from 'react-router-dom';

export default function ContactDetailPage() {
//Estamos obteniendo el parámetro "id" de la URL, que se usará para buscar el contacto correspondiente en la lista de contactos.
// id porque en la ruta definida en App.jsx se usa "/contact/:id", donde ":id" 
  const { id } = useParams();

  // Por ahora, datos hardcodeados (en M2 vendrán de API)
  const contacts = [
    { id: 1, name: "Ana García", phone: "555-1234", email: "ana@email.com" },
    { id: 2, name: "Carlos López", phone: "555-5678", email: "carlos@email.com" },
    { id: 3, name: "María Torres", phone: "555-9012", email: "maria@email.com" }
  ];

//number(id) convierte el id de la URL (que es un string) a número para compararlo con los ids numéricos de los contactos.
//find devuelve el primer elemento q cumpla
  const contact = contacts.find(c => c.id === Number(id)); // si el id es igual al id del contacto
//!contact verifica si no se encontró un contacto con ese id. Si no se encuentra, muestra un mensaje de error y un enlace para volver al inicio.
  if (!contact) {
    return (
      <div>
        <h2>Contacto no encontrado</h2>
        <Link to="/">← Volver al inicio</Link>
      </div>
    );
  }
//si se encuentra:
  return (
    <div>
      <Link to="/">← Volver</Link>
      <h1>{contact.name}</h1>
      <p>📞 {contact.phone}</p>
      <p>📧 {contact.email}</p>
    </div>
  );
}