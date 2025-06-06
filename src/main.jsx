import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router/router.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
       <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1f1f1f",
            color: "#fff",
            borderRadius: "10px",
            padding: "12px 16px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
          },
          iconTheme: {
            primary: "#facc15",
            secondary: "#1f1f1f",
          },

          className: "",
          success: {
            style: {
              background: "#16a34a",
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "#dc2626",
              color: "#fff",
            },
          },
        }}
      ></Toaster>
    </AuthProvider>
  </StrictMode>
);
