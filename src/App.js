import "./App.css";
import Routes from "./routes";
import { useRoutes } from "react-router-dom";
import React, { useState, useEffect } from "react";
function App() {
  let element = useRoutes(Routes);
  return (
    <>
      <div className="App">{element} </div>
    </>
  );
}
export default App;
