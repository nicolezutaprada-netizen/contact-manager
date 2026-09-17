import * as ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Trae BrowserRouter de la librería que instalaste.
// Permite usar la dirección del navegador para manejar la navegación.
import { BrowserRouter } from 'react-router-dom';

// document.getElementById('root') busca el <div id="root"> de index.html.
// ReactDOM.createRoot lo convierte en un contenedor de React para que pueda mostrar componentes dentro de él.
// .render(...) indica qué componentes mostrar dentro de ese espacio.
ReactDOM.createRoot(document.getElementById('root')).render(
  // BrowserRouter permite usar rutas en los componentes que contiene.
  <BrowserRouter>
    {/* Muestra App, el componente principal de tu aplicación. */}
    <App />
  </BrowserRouter>
  // La línea anterior cierra BrowserRouter.
); // Cierra la llamada a render y termina la instrucción.
