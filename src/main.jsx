import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ContextProvider from "./ContexApi/ContextProvider";
import { RouterProvider } from "react-router-dom";
import { route } from "./routes/route";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={route}></RouterProvider>
    </ContextProvider>
  </StrictMode>
);
