import Events from "./pages/Events";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Branch from "./pages/Branch";
import Login from "./pages/Login";
import Form from "./pages/EventAdmin";
const Routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        showNavbarAndFooter: true,
      },
      {
        path: "/events",
        element: <Events />,
        showNavbarAndFooter: true,
      },
      {
        path: "/branch",
        element: <Branch />,
        showNavbarAndFooter: true,
      },
      {
        path: "/login",
        element: <Login />,
        showNavbarAndFooter: false,
      },
      {
        path: "/form/:id",
        element: <Form />,
        showNavbarAndFooter: true,
      },
      {
        path: "/form",
        element: <Form />,
        showNavbarAndFooter: true,
      },
    ],
  },
];

export default Routes;
