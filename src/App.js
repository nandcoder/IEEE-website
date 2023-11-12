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

// import "./App.css";

// import Loader from '../src/components/Loader';

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {

//     setTimeout(() => {
//       setLoading(false);
//     }, 1500);
//   }, []);
//   let element = useRoutes(Routes);
//   return (
//     <div className="app">
//       {loading ? (
//         <Loader />
//       ) : (
//         <p></p>
//       )}
//       <div className="mobile-message">
//     Please use a desktop to view this website
//     </div>

//     </div>

//   );
// }

// export default App;
