import { Outlet } from "react-router-dom";

import NavBar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer";

export default function Layout() {


    return (<div>
        <NavBar />
        <Sidebar />
        <Outlet />
        <Footer/>
    </div>)
}