import "./styles/index.css";

import App from "./app/App.tsx";
import { AuthProvider } from "./app/context/AuthContext";
import React from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
  