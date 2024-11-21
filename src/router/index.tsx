// routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import {Home} from '../pages/Home'
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // هذه هي الصفحة الرئيسية التي تحتوي على Navbar و Outlet
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
