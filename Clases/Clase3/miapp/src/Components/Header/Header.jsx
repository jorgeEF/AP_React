import "./Header.css";

const Header=()=>{

    return(
        // jsx = combinacion js + xml-html
        <header className="Header">
            <h2>logo</h2>
            <nav>
                <a href="/">Inicio</a>
                <a href="/about">Acerca de</a>
                <a href="/contact">Contacto</a>             
            </nav>
        </header>
    )
}

export default Header;