
//border: dibuja un borde gris de 1 píxel.
//padding: deja espacio dentro del borde, alrededor del contenido.
//margin: deja espacio fuera del borde, separando la tarjeta de otros elementos.
//borderRadius: redondea las esquinas.
//color: 'blue': pone el nombre en azul.


export default function ContactCard({ name, phone, email, isFavorite }) {
  const cardStyle = {
    border: isFavorite ? '2px solid #ffd700' : '1px solid #ddd', // Si es favorito, el borde es dorado y más grueso; si no, es gris y delgado.
    borderRadius: '8px',
    overflowWrap: 'anywhere',
    padding: '15px',
    marginBottom: '10px',
    backgroundColor: isFavorite ? '#fffef0' : '#fff'
  };

  return (
    <div style={cardStyle}>
      {/* Aplica los estilos guardados en cardStyle. */}
      {/* Margen inferior de 10px para separar el nombre de los datos. */}
      <h3 style={{ margin: '0 0 10px 0', lineHeight: 1.4 }}>
        {name}
        <span style={{ marginLeft: '10px' }}> 
          {isFavorite ? '⭐' : '☆'}
        </span>
      </h3>
      <p style={{ margin: '5px 0', color: '#666' }}>📞 {phone}</p>
      <p style={{ margin: '5px 0', color: '#666' }}>✉️ {email}</p>
      
    </div>
  );
}



