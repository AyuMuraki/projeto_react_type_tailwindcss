import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Certifique-se de que esse arquivo está sendo importado corretamente

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
