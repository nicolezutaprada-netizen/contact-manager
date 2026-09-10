
//border: dibuja un borde gris de 1 píxel.
//padding: deja espacio dentro del borde, alrededor del contenido.
//margin: deja espacio fuera del borde, separando la tarjeta de otros elementos.
//borderRadius: redondea las esquinas.
//color: 'blue': pone el nombre en azul.


export default function ContactCard({ name, phone, email, isFavorite }) {
  const cardStyle = {
    border: isFavorite ? '2px solid #ffd700' : '1px solid #ddd', // Si es favorito, el borde es dorado y más grueso; si no, es gris y delgado.
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '10px',
    backgroundColor: isFavorite ? '#fffef0' : '#fff'
  };

  return (
    <div style={cardStyle}> //pa usar los estilos de la constante cardsrstyle
      <h3 style={{ margin: '0 0 10px 0' }}> // 0 margen arriba, 0 margen derecha, 10px margen abajo, 0 margen izquierda
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


