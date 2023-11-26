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
import Login from "./pages/Login";
import Dash from "./pages/Dash";

function App() {
  const [login, setLogin] = useState(false);
  const [productos,setProductos]=useState([
    { id: 1, nombre: "Producto 1", precio: "100" },
    { id: 2, nombre: "Producto 2", precio: "200" },
    { id: 3, nombre: "Producto 3", precio: "300" },
    { id: 4, nombre: "Producto 4", precio: "400" },
  ]);

  return (
    <>
      <Header></Header>

      <BrowserRouter>
        {/* El componente menu se esta encargando de agregar la ruta en el navegador para ue se pueda renderizar el componenete asociado a la ruta */}
        <Menu />
        <Routes>
          {/* Renderiza el componente segun la ruta que se encuentre en el navegador */}
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />

          {/* Aca estamso aplicando una redireccion */}
          <Route path="/about" element={<Navigate to={"/acerca"} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos productos={productos}/>} />
          <Route path="/productos/:id" element={<ProductoDetalle productos={productos}/>} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

{
  // Codigo para hacer una validacion simple de un login y redirigirlo a la ruta principal del usuario, tambien hay una proteccion simple de la ruta a traves de un useState login
  /* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setLogin={setLogin}/>}/>
        {login?<Route path="/dash" element={<Dash/>}/>:<Route path="/dash" element={<Navigate to={"/"}/>}/>}
      </Routes>
      </BrowserRouter> */
}
