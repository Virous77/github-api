import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { UserProvider } from "./store/UserContext";
import { AlertProvider } from "./store/AlertContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <AlertProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </AlertProvider>
    </UserProvider>
  </React.StrictMode>
);
