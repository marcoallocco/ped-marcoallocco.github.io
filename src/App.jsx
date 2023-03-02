import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ErrorPage from './components/pages/Error';
import HomePage from './components/pages/Home';
import Prenotazioni from './components/pages/Prenotazioni';
import Avvisi from './components/pages/Avvisi';
import RootLayout from './components/pages/Root';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'prenotazioni',
        element: <Prenotazioni />
      },
      {
        path: 'avvisi',
        element: <Avvisi />
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
