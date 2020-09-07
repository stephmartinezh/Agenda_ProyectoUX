import React from 'react'
import './paginaPrincipal.css'
import {Navbar, NavbarBrand} from  'reactstrap'

function Principal() {
    return( 
        <header className="paginaPrincipal">
            <nav className="paginaPrincipal-barra">
                <div className="paginaPrincipal-logo">
                    <a href="/">El logo</a>
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
    );
}

export default Principal; 