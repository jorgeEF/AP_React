import react, { useState } from "react"

import "./Formulario"

export const Formulario = () => {

    const [nombre,setNombre] = useState("");
    const [email,setEmail] = useState("");
    const [direccion,setDireccion] = useState("");
    const [mostrar,setMostrar] = useState(false);
    const [mostrarPassword,setMostrarPassword] = useState(false);

    //clase 6
    const [nombreValido,setNombreValido] = useState(false);
    const [emailValido,setEmailValido] = useState(false);
    const [direccionValida,setDireccionValida] = useState(false);
    const [mostrarErrores,setMostrarErrores] = useState(false);


    //nombreValido ? console.log("Valido") : console.log("No valido");


    function actualizarNombre(e){               
        setNombreValido(e.target.value.length>3);        
        nombreValido ? setNombre(e.target.value) : setNombre("");
    }

    function actualizarEmail(e){        
        // expresiones regulares (regex)
        let emailChar = /^\S+[a-zA-Z]+@+\S+\.\S+$/;        
        setEmailValido(emailChar.test(e.target.value))
        emailValido ? setEmail(e.target.value) : setEmail("");        
    }

    function actualizarDireccion(e){        
        setDireccionValida(e.target.value.length>3);
        direccionValida ? setDireccion(e.target.value) : setDireccion("");
    }

    function enviarDatos(e){
        e.preventDefault();
        setMostrar(true);
        if(!nombreValido || !emailValido || !direccionValida){
            setMostrarErrores(true)
        }
    }

    function mostrarPass(e){
        e.preventDefault();      
        setMostrarPassword(!mostrarPassword);
    }

    

    return(
        <div>
            <div className="row my-5 justify-content-md-center">
                <div className="col-md-12">
                    <h1>Formulario react</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="" id="nombre" onChange={ actualizarNombre }/>
                            {(!nombreValido && mostrarErrores )&& <small className="text-danger">Nombre no valido</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="" id="email" onChange={ actualizarEmail }/>
                            {(!emailValido && mostrarErrores )&& <small className="text-danger">Email no valido</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="direccion">Direccion</label>
                            <input type="text" name="" id="direccion" onChange={ actualizarDireccion }/>
                            {(!direccionValida && mostrarErrores )&& <small className="text-danger">Dirección no valida</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input type={mostrarPassword ? "text":"password"} name="" id="password" /> 
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
