import React from 'react'
import { Link } from "react-router-dom"
import './paginaPrincipal.css'


const Principal = () => {
    return (
        <div className="App">
            <header className="paginaPrincipal">
                <nav className="paginaPrincipal-barra">
                    <div className="paginaPrincipal-logo">
                        <a href="/">Agenda Virtual</a>
                    </div>
                    <div className="espacio"></div>
                    <div className="paginaPrincipal-navigation-items">
                        <ul>
                            <li><button type="button" className="boton-barra"><Link to={`/login`}>Login</Link></button></li>
                            <li><button type="button" className="boton-barra"><Link to={`/signUp/`}>Sign in</Link></button></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <img className="imagen" src="img_pantallaPrincipal.png" alt="Imagen de inicio"></img>
            <h1><center>¿Necesitas organizar tus eventos y contactos?</center></h1>
            <br></br>
            <center><p><font size="5">Con esta agenda virtual ahora puedes hacerlo</font></p></center>
            <center><p><font size="5">en menos tiempo y sin mucho esfuerzo.</font></p></center>
            <br></br>

            <div className="center">
                <button type="button" className="boton-estilo"><Link to={`/signUp`} style={{ color: 'inherit',textDecoration: 'none' }}>Crea tu agenda virtual</Link></button>
            </div>

            <br></br><br></br><br></br>

            <div className="rectangulo-primeraParte">
                <center><img className="imagen-computadora" src="principal_computadora.png" alt="Imagen de la página web"></img></center>
            </div>
            <br></br><br></br><br></br>

            <h1><center>Funciones de la agenda virtual</center></h1>
            <br></br><br></br><br></br>


            <div className="imagen-primera">
                <img src="calendario.png" alt="Calendario organizador"></img>
                <p><font size="5">Calendario organizador</font></p>
            </div>

            <div className="imagen-segunda">
                <img src="actividades.png" alt="Programador de actividades"></img>
                <p><font size="5">Programador de actividades</font></p>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

            <div className="imagen-notas">
                <img src="notas.png" alt="Calendario organizador"></img>
                <p><font size="5">Manejo de notas</font></p>
            </div>

            <div className="imagen-segunda">
                <img src="contactos.png" alt="Almacenador de contactos"></img>
                <p><font size="5">Almacenador de contactos</font></p>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

            <div className="rectangulo-segundaParte">
                <br></br>
                <h1><center>Beneficios de la agenda virtual</center></h1>
                <div className="center">
                    <ul>
                        <li><font size="5">Nunca se pierda de otra reunión o cumpleaños</font></li>
                        <br></br>
                        <li><font size="5">Mantega sus contactos en orden</font></li>
                        <br></br>
                        <li><font size="5">Planifique eventos o sesiones informativas</font></li>
                        <br></br>
                        <li><font size="5">Escriba su idea o apunte para la siguiente reunión</font></li>
                    </ul>
                    <br></br><br></br>
                </div>
            </div>
            <br></br><br></br>

            <div className="center">
                <button type="button" className="boton-estilo-final"><Link to={`/signUp`} style={{ color: 'inherit',textDecoration: 'none' }}>Empieza tu nueva agenda virtual</Link></button>
            </div>

        </div>
    );
}

export default Principal; 