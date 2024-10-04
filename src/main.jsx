import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Layout from './components/Layout.jsx';
import Workspace from './components/Workspace/Workspace.jsx';
import MTGProvider from './components/MTGProvider.jsx';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Workspace />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <MTGProvider>
    <RouterProvider router={router} />
  </MTGProvider>
)
