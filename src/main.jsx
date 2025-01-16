import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import End from "./pages/End.jsx";
import Entry from "./pages/Entry.jsx";
import Landing from "./pages/Landing.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Landing />} />
          <Route path="/entry" element={<Entry />} />
          <Route path="/end" element={<End />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
