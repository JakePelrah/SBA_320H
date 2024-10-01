import { Outlet } from "react-router-dom";

import NavBar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer";
import { useEffect } from "react";

export default function Layout() {

    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    }, [])

    return (<div>
        {/* <NavBar /> */}
        <Sidebar />
        <Outlet />
        <Footer />
    </div>)
}