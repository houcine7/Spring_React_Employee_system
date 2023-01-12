import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./context/contextProvider";
import { initialState } from "./context/initiatlState";
import { reducer } from "./context/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider
      initialState={initialState}
      children={<App />}
      reducer={reducer}
    ></StateProvider>
  </React.StrictMode>
);
