# Contact Manager

Agenda de contactos desarrollada con React, JavaScript y Vite. Este laboratorio practica componentes reutilizables, props, listas y estilos condicionales.

## Funcionalidades implementadas

- Encabezado con el componente `Header`.
- Tarjetas `ContactCard` que reciben y muestran las props `name`, `phone`, `email` e `isFavorite`.
- Lista de contactos generada con `.map()` en `ContactList`.
- Identificación de cada tarjeta mediante `key={contact.id}`.
- Borde, fondo y estrella que cambian según el valor de `isFavorite`.
- Contador total con `contacts.length` y contador de favoritos con `.filter().length`.

Los datos se definen en el array `contacts` de `src/App.jsx`. Actualmente hay cuatro contactos, dos de ellos favoritos. Al modificar el array y guardar, la lista y los contadores reflejan esos datos.

## Tecnologías

- React y JSX
- JavaScript
- CSS y estilos inline
- Vite
- pnpm

## Ejecutar el proyecto

Requisitos: Node.js y pnpm instalados.

Abre una terminal dentro de la carpeta `Contact-Manager` y ejecuta:

```bash
pnpm install
pnpm dev
```

En Windows PowerShell puedes usar `pnpm.cmd install` y `pnpm.cmd dev`.

Abre la dirección que indique Vite junto a `Local`, normalmente `http://localhost:5173/`. Mantén la terminal abierta mientras utilizas la aplicación. Para detenerla, pulsa `Ctrl + C`.

## Estructura principal

```text
src/
├── components/
│   ├── Header.jsx
│   ├── ContactCard.jsx
│   └── ContactList.jsx
├── App.jsx
├── index.css
└── main.jsx
```

`App.jsx` contiene los datos y calcula los contadores. `ContactList` recorre los contactos y pasa sus datos a `ContactCard`. `Header` muestra el encabezado.

## Verificación de la entrega

1. Comprobar que aparecen el encabezado y las cuatro tarjetas con nombre, teléfono y correo.
2. Comprobar que el contador muestra cuatro contactos y dos favoritos.
3. Comparar un favorito con un contacto normal: deben cambiar la estrella, el borde y el fondo.
4. Agregar un contacto al array con un `id` único y guardar: debe aparecer una tarjeta adicional y actualizarse el total.
5. Cambiar `isFavorite` en los datos y guardar: deben actualizarse los estilos y la cantidad de favoritos.

## Repositorio

[Contact Manager en GitHub](https://github.com/nicolezutaprada-netizen/contact-manager)
