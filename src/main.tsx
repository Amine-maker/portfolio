import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./styles/index.css";
import "./styles/reset.css";
import { AppRoutes } from "./app/AppRouting.tsx";
import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
    <main className="container h-full w-full border-2 border-red-800">
      <AppRoutes />
    </main>
  </BrowserRouter>,
);

