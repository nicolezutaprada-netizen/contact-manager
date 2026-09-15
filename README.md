# Contact Manager

Agenda de contactos desarrollada con React, JavaScript y Vite. El proyecto practica componentes reutilizables, estado con `useState`, props, funciones como props y manejo de eventos.

## Funcionalidades implementadas

- Encabezado con el componente `Header`.
- Tarjetas `ContactCard` con nombre, teléfono, correo y una estrella según `isFavorite`.
- Lista generada con `.map()` en `ContactList`, con `key={contact.id}` en el contenedor de cada contacto.
- Borde y fondo condicionales para distinguir contactos favoritos.
- Estado de contactos administrado con `useState` en `App.jsx`.
- Botón **Agregar Contacto** que incorpora un contacto de ejemplo y actualiza la lista.
- Nombre del nuevo contacto calculado con `contacts.length + 1`, como “Contacto 4”.
- Botón **Eliminar** junto a cada tarjeta, con confirmación mediante `window.confirm()`.
- Eliminación mediante `.filter()`, conservando los contactos cuyo ID es diferente al seleccionado.
- Contador total que se actualiza al agregar o eliminar contactos.

La aplicación inicia con tres contactos: Ana García, Carlos López y María Torres. Ana y María están marcadas como favoritas en los datos iniciales.

## Flujo de datos y funciones

`App.jsx` mantiene el estado y define `handleAddContact` y `handleDeleteContact`.

La lista recibe los datos y la función para eliminar:

```jsx
<ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
```

`ContactList` crea las tarjetas y, al pulsar Eliminar, llama a `onDeleteContact(contact.id)`. `App` solicita confirmación y actualiza el estado con `setContacts`. React muestra entonces la nueva lista y el total actualizado.

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

En Windows PowerShell puedes usar:

```powershell
pnpm.cmd install
pnpm.cmd dev
```

Abre la dirección indicada por Vite junto a `Local`, normalmente [http://localhost:5173/](http://localhost:5173/). Mantén la terminal abierta mientras utilizas la aplicación. Para detener el servidor, pulsa `Ctrl + C`.

## Estructura principal

```text
src/
├── components/
│   ├── Header.jsx
│   ├── ContactCard.jsx
│   └── ContactList.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

- `App.jsx`: estado, funciones para agregar y eliminar, y contador total.
- `ContactList.jsx`: recorrido de contactos, envío de props y botones de eliminación.
- `ContactCard.jsx`: presentación de los datos y estilos según favorito.
- `Header.jsx`: encabezado de la aplicación.
- `main.jsx`: inicio de React.

## Comprobación manual

1. Abrir la página y comprobar que aparecen tres contactos y el total de 3.
2. Comparar las tarjetas favoritas con la de Carlos: cambian el borde, el fondo y la estrella.
3. Pulsar **Agregar Contacto**: debe aparecer “Contacto 4” y el total debe pasar a 4.
4. Pulsar **Eliminar** y cancelar: la lista y el total deben permanecer iguales.
5. Pulsar **Eliminar** y aceptar: debe desaparecer únicamente el contacto elegido y disminuir el total.
6. Eliminar todos los contactos: el total debe quedar en 0; el botón Agregar debe seguir disponible.

## Alcance actual

Los cambios se mantienen en memoria durante el uso de la página. Al recargarla, se recuperan los tres contactos iniciales.

El botón Agregar utiliza datos de ejemplo, sin formulario. El número del nombre depende del tamaño actual de la lista y puede repetirse después de eliminar contactos. Los identificadores temporales se generan con `Date.now()`.

Los favoritos se distinguen visualmente según sus datos; esta versión no incluye botón para cambiarlos, filtro de favoritos ni contador de favoritos.

## Repositorio

[Contact Manager en GitHub](https://github.com/nicolezutaprada-netizen/contact-manager)
