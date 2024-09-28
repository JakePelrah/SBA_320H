import { Navigate, Outlet } from 'react-router-dom';
import { useLoggedIn } from '../providers/LoggedInProvider';


// if user is not logged in, redirect to login page
export default function PrivateRoute() {

    const {isLoggedIn} = useLoggedIn();
    return isLoggedIn
        ? <Outlet />
        : <Navigate to="/login" />;
}