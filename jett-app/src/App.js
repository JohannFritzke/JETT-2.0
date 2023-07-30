/* eslint-disable no-restricted-globals */

import Gerente from "./Pages/Gerente-Dashboard.jsx";
import Login from "./Pages/Login.jsx";

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gerente />}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
