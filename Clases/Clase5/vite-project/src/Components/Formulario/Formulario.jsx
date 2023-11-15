import react, { useState } from "react"

import "./Formulario"

export const Formulario = () => {

    const [nombre,setNombre] = useState("");
    const [email,setEmail] = useState("");
    const [direccion,setDireccion] = useState("");
    const [mostrar,setMostrar] = useState(false);
    const [mostrarPassword,setMostrarPassword] = useState(false);

    function actualizarNombre(e){
        e.preventDefault();
        setNombre(e.target.value);
    }

    function actualizarEmail(e){
        e.preventDefault();
        setEmail(e.target.value);
    }

    function actualizarDireccion(e){
        e.preventDefault();
        setDireccion(e.target.value);
    }

    function enviarDatos(e){
        e.preventDefault();     
        setMostrar(true);
    }

    function mostrarPass(e){   
        e.preventDefault();          
        setMostrarPassword(!mostrarPassword);
    }

    return(
        <div>
            <div className="row my-5 justify-content-md-center">
                <div className="col-md-12">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="">Nombre</label>
                            <input type="text" name="" id="" value={nombre} onChange={ actualizarNombre }/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" name="" id="" onChange={ actualizarEmail }/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Direccion</label>
                            <input type="text" name="" id="" onChange={ actualizarDireccion }/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Contraseña</label>
                            <input type={mostrarPassword ? "text":"password"} name="" id="" /> 
                            <button className="btn btn-primary btn-sm ms-1" onClick={mostrarPass}>{mostrarPassword ? "Ocultar contraseña":"Mostrar contraseña"}</button>
                        </div>
                        <button type="submit" onClick={enviarDatos}>Enviar</button>
                    </form>                    
                </div>                
            </div>

            <div className="row my-5 justify-content-md-center">
                {mostrar && 
                <div className="alert alert-secondary col-md-12">                
                    <h3>Tus datos son:</h3>
                    <p><strong>Nombre: </strong> {nombre}</p>
                    <p><strong>Email: </strong> {email}</p>
                    <p><strong>Direccion: </strong> {direccion}</p>
                </div>
                }
            </div>
        </div>
    )
}
