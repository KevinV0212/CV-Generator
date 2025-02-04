import { useState } from "react";
import "./App.css";
import { NavLink, Outlet } from "react-router";

function App() {
  return (
    <>
      <Outlet />
      <footer>
        <p className="body">&copy; 2025 Kevin Vu</p>
      </footer>
    </>
  );
}

export default App;
