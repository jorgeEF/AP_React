import react, { useState } from "react"
// import "./Formulario.css"

export const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");    
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [nombreValido, setNombreValido] = useState(false);
    const [apellidoValido, setApellidoValido] = useState(false);
    const [emailValido, setEmailValido] = useState(false);
    const [telefonoValido, setTelefonoValido] = useState(false);
    const [passwordValido, setPasswordValido] = useState(false);
    const [confirmPasswordValido, setConfirmPasswordValido] = useState(false);  
    const [mostrarErrores, setMostrarErrores] = useState(false);


    function actualizarNombre(e) {
        setNombreValido(e.target.value.length > 3);
        nombreValido ? setNombre(e.target.value) : setNombre("");
    }

    function actualizarApellido(e) {
        setApellidoValido(e.target.value.length > 3);
        apellidoValido ? setApellido(e.target.value) : setApellido("");
    }

    function actualizarEmail(e) {
        let emailChar = /^\S+[a-zA-Z]+@+\S+\.\S+$/;
        setEmailValido(emailChar.test(e.target.value))
        emailValido ? setEmail(e.target.value) : setEmail("");
    }

    function actualizarTelefono(e) {
        let telChar = /[+0123456789]/;
        setTelefonoValido(telChar.test(e.target.value));
        telefonoValido ? setTelefono(e.target.value) : setTelefono("");        
    }

    function actualizarPassword(e) {
        const nuevaPassword = e.target.value;
        const esPasswordValida = nuevaPassword.length >= 8;
    
        setPasswordValido(esPasswordValida);
    
        if (esPasswordValida) {
            setPassword(nuevaPassword);
        } else {
            setPassword("");
        }        
    }

    function actualizarConfirmarPassword(e) {        
        if ((e.target.value === password) && passwordValido){
            setConfirmPasswordValido(true);
            setConfirmPassword(e.target.value);            
        }
        else{
            setConfirmPasswordValido(false);
            setConfirmPassword("");            
        }
    }

    const showToast = () => {
        const toastLiveExample = document.getElementById('liveToast');
        if (toastLiveExample) {
          const toastBootstrap = new window.bootstrap.Toast(toastLiveExample);
          toastBootstrap.show();
        }
    };

    function enviarDatos(e) {
        e.preventDefault();        
        if (!nombreValido || !apellidoValido || !emailValido || !telefonoValido || !passwordValido || !confirmPasswordValido) {
            setMostrarErrores(true)
        }
        else {
            showToast();
        }
    }    

    return (
        <div className="container text-center w-50 mt-5 bg-light border border-1 rounded-1 p-5 d-flex flex-column justify-content-center">
            <h2>Formulario de registro</h2>
            <form>
                <div className="row">
                    <div className="col text-end">
                        Nombre:
                    </div>
                    <div className="col text-start">
                        <input type="text" name="" id="nombre" onChange={actualizarNombre} />
                    </div>
                    <div className="col text-start">
                        {(!nombreValido && mostrarErrores) && <small className="text-danger">Nombre no válido</small>}
                    </div>
                </div>
                <div className="row">
                    <div className="col text-end">
                        Apellido:
                    </div>
                    <div className="col text-start">
                        <input type="text" name="" id="apellido" onChange={actualizarApellido} />
                    </div>
                    <div className="col text-start">
                        {(!apellidoValido && mostrarErrores) && <small className="text-danger">Apellido no válido</small>}
                    </div>
                </div>
                <div className="row">
                    <div className="col text-end">
                        Email:
                    </div>
                    <div className="col text-start">
                        <input type="email" name="" id="email" onChange={actualizarEmail} />
                    </div>
                    <div className="col text-start">
                        {(!emailValido && mostrarErrores) && <small className="text-danger">Email no válido</small>}
                    </div>
                </div>
                <div className="row">
                    <div className="col text-end">
                        Telefono:
                    </div>
                    <div className="col text-start">
                        <input type="email" name="" id="telefono" onChange={actualizarTelefono} />
                    </div>
                    <div className="col text-start">
                        {(!telefonoValido && mostrarErrores) && <small className="text-danger">Telefono no válido</small>}
                    </div>
                </div>
                <div className="row">
                    <div className="col text-end">
                        Contraseña:
                    </div>
                    <div className="col text-start">
                        <input type="password" name="" id="password" onChange={actualizarPassword}/>
                    </div>
                    <div className="col">
                        <div className="col text-start">
                            {(!passwordValido && mostrarErrores) && <small className="text-danger">Contraseña no válida</small>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-end">
                        Confirmar contraseña:
                    </div>
                    <div className="col text-start">
                        <input type="password" name="" id="confirmPassword" onChange={actualizarConfirmarPassword}/>
                    </div>
                    <div className="col">
                        <div className="col text-start">
                            {(!confirmPasswordValido && mostrarErrores) && <small className="text-danger">Las contraseñas no coinciden</small>}
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <button type="submit" className="btn btn-primary" onClick={enviarDatos}>Enviar</button>
                </div>
            </form>
               
            <div className="toast-container position-fixed top-0 start-50 translate-middle-x">
                <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <strong className="me-auto">Formulario de registro</strong>                    
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body text-center">            
                        Registro completado!                    
                    </div>
                </div>
            </div>
            
        </div>

    )
}