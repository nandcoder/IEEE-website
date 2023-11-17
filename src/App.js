import React from 'react';
import './App.css';
import Routes from './routes';
import { useRoutes } from 'react-router-dom';
function App() {
  let element = useRoutes(Routes);
  return (
    <React.Fragment>
      <div className='App'>{element} </div>
    </React.Fragment>
  );
}
export default App;
