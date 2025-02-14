import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./styles/index.scss";
import "./styles/reset.scss";
import "./styles/variable.scss";
import { AppRoutes } from "./app/AppRouting.tsx";
import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
    <main className="container h-full w-full">
      <AppRoutes />
    </main>
  </BrowserRouter>,
);
