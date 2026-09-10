
//border: dibuja un borde gris de 1 píxel.
//padding: deja espacio dentro del borde, alrededor del contenido.
//margin: deja espacio fuera del borde, separando la tarjeta de otros elementos.
//borderRadius: redondea las esquinas.
//color: 'blue': pone el nombre en azul.
export default function ContactCard() {
  return (
    <div style={{
      border: '1px solid gray',
      padding: '15px',
      margin: '10px',
      borderRadius: '5px'
    }}>
      <h3 style={{ color: 'blue' }}>Ana García</h3>
      <p>📱 Teléfono: +52 555-9876</p>
      <p>✉️ Email: ana@email.com</p>
    </div>
  );
}