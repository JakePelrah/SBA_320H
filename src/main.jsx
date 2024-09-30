import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Layout from './components/Layout.jsx';
import Binder from './components/Binder.jsx';
import Workspace from './components/Workspace.jsx';
import './index.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Workspace/>
      },
      {
        path:'binder',
        element:<Binder/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
