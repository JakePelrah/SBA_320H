import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar/Sidebar.jsx"
import Footer from "./Workspace/Footer.jsx";
import { useEffect } from "react";
import LightBox from "./Lightbox/LightBox.jsx";

export default function Layout() {

    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    }, [])

    return (<div>
        <Sidebar />
        <LightBox/>
        <Outlet />
        <Footer />
    </div>)
}