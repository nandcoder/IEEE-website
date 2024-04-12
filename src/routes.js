import Events from "./pages/events/Events";
import AllEvents from "./pages/events/AllEvents";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Branch from "./pages/Branch";
// import BranchChapters from './pages/BranchChapters';
import EventDetails from "./pages/events/event";
import Login from "./pages/Login";
import Form from "./pages/EventAdmin";
import Ourteam from "./pages/Ourteam";
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
        path: "/all-events",
        element: <AllEvents />,
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
      {
        path: "/events/event",
        element: <EventDetails />,
      },
      {
        path: "/our-team",
        element: <Ourteam />,
      },
    ],
  },
];

export default Routes;
