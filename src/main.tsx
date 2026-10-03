import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App.tsx";
import AddTask from "./components/AddTask.tsx";
import EditTask from "./components/EditTask.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  { path: "/addtask", Component: AddTask },
  { path: "/task/:id", Component: EditTask },
]);

const root = document.getElementById("root")!;

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
