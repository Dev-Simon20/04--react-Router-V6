import { useParams, useSearchParams } from "react-router-dom";

const ProductoDetalle = () => {

  const productos = [
    { id: 1, nombre: "Producto 1", precio: "100" },
    { id: 2, nombre: "Producto 2", precio: "200" },
    { id: 3, nombre: "Producto 3", precio: "300" },
    { id: 4, nombre: "Producto 4", precio: "400" },
  ];

  let ident=parseInt(useParams().id)-1;
  console.log(useParams().id);
  return (
    <>
      <section>
        <h1>Detalle del producto</h1>
        <h2>{productos[ident].nombre}</h2>
        <h2>{productos[ident].precio}</h2>
      </section>
    </>
  );
};
export default ProductoDetalle;