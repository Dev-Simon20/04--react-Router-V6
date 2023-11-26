import { Link,NavLink } from "react-router-dom"
const Menu=()=>{
    return(
        //coloca la ruta en el navegador para que se renderize el componenete asociado a la ruta
        <>
        <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/acerca">Acerca</Link>
        <Link to="/about">about</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/inexistente"></Link>
       </nav>
       <nav className="menu">
        <NavLink className={({isActive})=>isActive?"active-link":null}  to="/">Home</NavLink>
        <NavLink className={({isActive})=>isActive?"active-link":null}  to="/acerca">Acerca</NavLink>
        <NavLink className={({isActive})=>isActive?"active-link":null}  to="/contacto">Contacto</NavLink>
       </nav>
       </>
    )
}

export default Menu