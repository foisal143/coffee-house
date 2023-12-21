import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home/Home';
import AddCoffee from '../pages/AddCoffee/AddCoffee';
import CoffeeDetails from '../pages/CoffeeDetails/CoffeeDetails';
import UpdateCoffee from '../pages/UpdateCoffee/UpdateCoffee';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/:id',
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: 'addcoffee',
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: 'updatecoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
    ],
  },
]);

export default router;
