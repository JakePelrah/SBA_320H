import { createBrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar.tsx";
import Home from "../components/Home.tsx";
import Tutors from "../components/tutor/Tutors.tsx"
import SchedulerTemp from "../components/scheduler/CreateSession.tsx";
import ErrorPage from "../components/error-page.tsx";
import Session from "../components/session/Session.tsx";
import Login from "../components/login/Login.tsx";
import PrivateRoute from "../routes/PrivateRoute.tsx";
import Failure from "../components/failure/Failure.tsx";
import ProfilePage from "../components/profile/Profile.tsx";


// See https://reactrouter.com/en/main/start/tutorial
export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />, // redirect to /login if not logged in
    children: [
      {
        path: "/",
        element: <NavBar />, // render NavBar on every page
        errorElement: <ErrorPage />,
        children: [
          /* 
          Add a new routes to the end of this array
          */
          
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "tutors",
            element: <Tutors />,
          },
          {
            path: "sessions",
            element: <Session />
          },
          {
            path: "Login",
            element: <Login/>
          },
          {
            path: "create-session",
            element: <SchedulerTemp />,
          },
          {
            path: "failure",
            element: <Failure />,
          },
          {
            path: "profile",
            element: <ProfilePage />
          }
        ],
      }]
  }
]);
