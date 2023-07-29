
import React, { useState } from "react";

import SideBar from "../Components/SideBar/SideBar.jsx";
import Navbar from "../Components/Navbar.jsx";
import MenuItens from "../Components/Menu-Itens.jsx";

import items from "../Data/SideBar-Gerente.json"

export const Gerente = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <main>
            <SideBar isSidebarOpen={isSidebarOpen} items={items} />
            <Navbar handleSidebarToggle={handleSidebarToggle} />
            <div className="menu">
                <MenuItens />
            </div>
        </main>
    );

}

export default Gerente;