
import React, { useState } from "react";


import SideBar from "../Components/SideBar/SideBar.jsx";
import Navbar from "../Components/Navbar.jsx";
import MenuItens from "../Components/Menu-Itens.jsx";



import SideBar_Itens from "../Data/SideBar-Gerente.json"
import Menu_Itens from "../Data/Menu-Gerente.json"
import Menu_Itens2 from "../Data/SideBar-Gerente.json"

import { Routes, Route } from 'react-router-dom';


export const Gerente = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <main>
            <SideBar isSidebarOpen={isSidebarOpen} items={SideBar_Itens} />
            <Navbar handleSidebarToggle={handleSidebarToggle} />

            <Routes>
                <Route path="/" element={<MenuItens itens={Menu_Itens} />} />
                <Route path="/Cadastros" element={<MenuItens itens={Menu_Itens2} />} />
            </Routes>

            
        </main>
    );

}

export default Gerente;