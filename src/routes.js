import Events from "./pages/Events";
import Home from "./pages/Home";
import Layout from "./components/Layout";
const Routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
    ],
  },
];

export default Routes;
