import React from 'react'
import './paginaPrincipal.css'

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
        </div>
    );
}

export default Principal; 