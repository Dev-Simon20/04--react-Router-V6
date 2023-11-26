import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Error404 from "./pages/Error404";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <>
      <Header></Header>

      <BrowserRouter>
        {/*El componente menu se esta encargando de agregar la ruta en el navegador para ue se pueda renderizar el componenete asociado a la ruta */}
        <Menu />
        <Routes>
          {/* Renderiza el componente segun la ruta que se encuentre en el navegador */}
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />

          {/* Aca estamso aplicando una redireccion*/}
          <Route path="/about" element={<Navigate to={"/acerca"}/>} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
