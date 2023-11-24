import Events from './pages/events/Events';
import AllEvents from './pages/events/AllEvents';
import Home from './pages/Home';
import Layout from './components/Layout';
import Branch from './pages/Branch';
import BranchChapters from './pages/BranchChapters';
import EventDetails from './pages/events/event';
const Routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/all-events',
        element: <AllEvents />,
      },
      {
        path: '/branch',
        element: <Branch />,
      },
      {
        path: '/events/event',
        element: <EventDetails />,
      },
    ],
  },
];

export default Routes;
