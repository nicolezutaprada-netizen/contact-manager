# Contact Manager

Agenda de contactos desarrollada con React, JavaScript, Vite y React Router. Este laboratorio practica rutas, navegación con `Link` y `NavLink`, parámetros dinámicos y páginas de error.

## Funcionalidades implementadas

- Navegación entre Home y About sin recargar la página.
- Lista de contactos en la página principal.
- Botón **Agregar contacto** que actualiza la lista y el contador.
- Ruta dinámica `/contact/:id` para mostrar los detalles de cada contacto.
- Lectura del parámetro `id` con `useParams()`.
- Botón **Volver a contactos** en la página de detalle.
- Ruta `*` para mostrar una página 404 cuando la dirección no existe.
- Diseño adaptable con estilos en `App.css` e `index.css`.

## Rutas disponibles

| Ruta | Página |
| --- | --- |
| `/` | Lista de contactos |
| `/about` | Información de la aplicación |
| `/contact/:id` | Detalle de un contacto |
| Cualquier otra ruta | Página 404 |

Ejemplos de rutas dinámicas:

- `/contact/1`
- `/contact/2`
- `/contact/3`

## Tecnologías

- React y JSX
- React Router
- JavaScript
- CSS
- Vite
- pnpm

## Ejecutar el proyecto

Abre PowerShell dentro de la carpeta `Contact-Manager` y ejecuta:

```powershell
pnpm.cmd install
pnpm.cmd dev
```

Después abre la dirección indicada por Vite, normalmente [http://localhost:5173/](http://localhost:5173/). Mantén la terminal abierta mientras utilizas la aplicación.

## Estructura principal

```text
src/
├── components/
│   ├── Header.jsx
│   ├── ContactCard.jsx
│   └── ContactList.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ContactDetailPage.jsx
│   ├── NotFoundPage.jsx
│   └── Navbar.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

- `main.jsx` envuelve la aplicación con `BrowserRouter`.
- `App.jsx` define las rutas mediante `Routes` y `Route`.
- `Navbar.jsx` permite navegar entre Home y About.
- `HomePage.jsx` muestra la lista de contactos.
- `ContactDetailPage.jsx` obtiene el ID de la URL y muestra el contacto correspondiente.
- `NotFoundPage.jsx` captura las direcciones que no coinciden con ninguna ruta.

## Verificación de la entrega

1. Comprobar que los enlaces Home y About cambian de página.
2. Hacer clic en un contacto y comprobar que abre su página de detalle.
3. Confirmar que la URL cambia en cada navegación.
4. Usar **Volver a contactos** desde la página de detalle.
5. Escribir una ruta inexistente, como `/ruta-invalida`, y comprobar que aparece la página 404.
6. Pulsar **Agregar contacto** y comprobar que aparece una tarjeta nueva y que también abre su detalle.

## Repositorio

[Contact Manager en GitHub](https://github.com/nicolezutaprada-netizen/contact-manager)
