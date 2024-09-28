import { createRoot } from "react-dom/client";
import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";
import LoggedInProvider from "./providers/LoggedInProvider";
import "./index.css";



createRoot(document.getElementById("root")!).render(
  <LoggedInProvider>
    <RouterProvider router={router} />
  </LoggedInProvider>

);
