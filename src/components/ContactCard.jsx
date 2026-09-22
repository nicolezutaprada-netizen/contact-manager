import { useNavigate } from 'react-router-dom';

export default function ContactCard({
  id,
  name,
  phone,
  email,
  isFavorite
}) {

  //useNavigate es un hook de React Router que permite cambiar la ruta programáticamente.
  //hook significa que es una función especial que solo puede ser usada dentro de componentes funcionales de React.
  const navigate = useNavigate();

  //handleClick es una función que se ejecuta cuando el usuario hace clic en la tarjeta de contacto.
  //navigate es la constante que creamos  con use navigate, y se le pasa la ruta a la que queremos ir, en este caso `/contact/${id}`, donde `${id}` es el id del contacto.
  function handleClick() {
    navigate(`/contact/${id}`);
  }

  //style={cardStyle} aplica los estilos definidos en la constante cardStyle a la tarjeta de contacto.
  //onClick={handleClick} hace que cuando el usuario haga clic en la tarjeta, se ejecute la función handleClick, que redirige a la página de detalles del contacto.
//"style" solo se  puede usar para aplicar estilos en línea a un elemento HTML. No se puede usar para definir clases CSS ni para aplicar estilos globales.
  return (

    <div
      className={`contact-card${isFavorite ? ' contact-card--favorite' : ''}`}
      onClick={handleClick}
    >
      <h3 className="contact-card__title">
        {name}

        <span className="contact-card__favorite">
          {isFavorite ? '⭐' : '☆'}
        </span>
      </h3>

      <p className="contact-card__detail">
        📞 {phone}
      </p>

      <p className="contact-card__detail">
        ✉️ {email}
      </p>
    </div>
  );
}
