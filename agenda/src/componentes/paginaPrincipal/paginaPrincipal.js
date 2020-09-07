import React from 'react'
import './paginaPrincipal.css'
import {Button} from 'reactstrap'

function Principal() {
    return( 
        <div>
            <header className="paginaPrincipal">
                <nav className="paginaPrincipal-barra">
                    <div className="paginaPrincipal-logo">
                        <a href="/">Agenda Virtual</a>
                    </div>
                    <div className="espacio"></div>
                    <div className="paginaPrincipal-navigation-items">
                        <ul>
                            <li><a href="/">Log in</a></li>
                            <li><a href="/">Sign in</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <img class="imagen" src="img_pantallaPrincipal.png" alt="Imagen de inicio"></img>
            <h1><center>¿Necesitas organizar tus eventos y contactos?</center></h1>
            <br></br>
            <p><font size="5"><center>Con esta agenda virtual ahora puedes hacerlo</center></font></p>
            <p><font size="5"><center>en menos tiempo y sin mucho esfuerzo.</center></font></p>
            <br></br>
            <button type="button" class="boton-estilo">Crea tu agenda virtual</button>
        </div>
    );
}

export default Principal; 