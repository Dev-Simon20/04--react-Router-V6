import { Link } from "react-router-dom";

const Productos = () => {
  const productos = [
    { id: 1, nombre: "Producto 1", precio: "100" },
    { id: 2, nombre: "Producto 2", precio: "200" },
    { id: 3, nombre: "Producto 3", precio: "300" },
    { id: 4, nombre: "Producto 4", precio: "400" },
  ];
  return (
    <>
      <section>
        <h1>Productos</h1>
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}><Link to={`/productos/${producto.id}`}>{producto.nombre}</Link></li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default Productos;
