import Events from "./pages/Events";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Branch from "./pages/Branch";
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
      {
        path: "/branch",
        element: <Branch />,
      },
    ],
  },
];

export default Routes;
