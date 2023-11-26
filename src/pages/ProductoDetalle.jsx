import { useParams, useNavigate } from "react-router-dom";

const ProductoDetalle = ({productos}) => {
   
  const navigate=useNavigate();
  let ident=parseInt(useParams().id)-1;
  
  const handleBack=()=>{
    navigate(-1)
  }
  return (
    <>
      <section>
        <h1>Detalle del producto</h1>
        <h2>{productos[ident].nombre}</h2>
        <h2>{productos[ident].precio}</h2>
        <button onClick={handleBack}>Regresar</button>
      </section>
    </>
  );
};
export default ProductoDetalle;