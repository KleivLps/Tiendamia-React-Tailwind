import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

//obteniendo el contenedor del DOM donde se montara la aplicacion

const container = document.getElementById("root");

//If Else del contenedor para el antinull

if (container) {
  //creando la raiz con createRoot
  const root = createRoot(container);

  //renderizando en raiz
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("No se encontro el elemento con la ID 'root' ");
}
