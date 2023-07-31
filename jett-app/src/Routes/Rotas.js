import React from "react"
import { Routes, Route} from "react-router-dom"

import { Login } from "../Pages/Login"
import {Gerente} from "../Pages/Gerente-Dashboard"




export  const Rotas = () => {
    return (
        <Routes>
            <Route path="/" Component={Login} />
            <Route path="/Gerente/*" Component={Gerente} />
        </Routes>
    )
}