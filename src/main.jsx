import React from "react"; // ты забыл импортировать React!
import ReactDOM from "react-dom/client"; // и ReactDOM тоже!
import "./index.css";
import App from "./App";
import { AuthProvider } from "./AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
