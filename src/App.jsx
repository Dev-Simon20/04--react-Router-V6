import { useState } from "react";
import { BrowserRouter, Routes, Route,Link, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";
import Header from "./components/Header";



function App() {
  const [login,setLogin]=useState(false)

  return (
    <>
      <Header></Header>
      
      <BrowserRouter>
       <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/acerca">Acerca</Link>
        <Link to="/contacto">Contacto</Link>
       </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/acerca" element={<Acerca/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
