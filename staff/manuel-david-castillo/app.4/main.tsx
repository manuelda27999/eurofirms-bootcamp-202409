import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App"

const rootElement: HTMLElement | null = document.querySelector("#root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.log("No se encontró el el rootElement");
}
