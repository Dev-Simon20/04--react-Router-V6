import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

let initialForm={
    usuario:"",
    password:""
}
const Login=({setLogin})=>{
    const navigate =useNavigate();
    const[form,setForm]=useState(initialForm);


    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const verificar=(e)=>{
         e.preventDefault();
         const logeo={
            usuario:'usuario3',
            password:'usuario3'
        }
         if (form.usuario==logeo.usuario&&form.password==logeo.password) {
            console.log("Usuario corrrecto");
            setLogin(true);
            navigate('dash');
         }
         else{
            console.log("Usuario Incorecto");
         }
    }
    return (
        <>
         <h1>Login</h1>
         <form onSubmit={verificar}>
            <input type="text" name="usuario" onChange={handleChange} value={form.usuario} />
            <br />
            <input type="password" name="password" onChange={handleChange} value={form.password} />
            <br />
            <input type="submit"></input>
         </form>
        </>
    )
}

export default Login