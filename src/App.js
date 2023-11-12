import "./App.css";
import Routes from "./routes";
import { useRoutes } from "react-router-dom";
import React from "react";
function App() {
  let element = useRoutes(Routes);
  return (
    <React.Fragment>
      <div className="App">{element} </div>
    </React.Fragment>
  );
}
export default App;
