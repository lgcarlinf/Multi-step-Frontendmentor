import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FormProvider from "./context/formContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FormProvider>
    <App />
  </FormProvider>
);
