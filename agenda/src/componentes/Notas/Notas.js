import React from 'react'
import './Notas.css'
import { Link } from "react-router-dom"
import fire from '../Fire/Fire';

const Inicio = () => {
    return (
        <div className="paginaInicio">
                <div className="paginaInicio-barra">
                    <div className="paginaPrincipal-navigation-items">
                        <ul>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/Inicio/`}>Inicio</Link></button></li>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/actividades/`}>Actividades</Link></button></li>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/notas/`}>Notas</Link></button></li>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/contactos/`}>Contactos</Link></button></li>  
                        </ul>
                    </div>
                </div>

                <div className="rectangulo-info">
                    <center><img class="imagen-usuario" src="user.jpg"  alt="Imagen de inicio"></img></center>
                    <h3><center className="name-usuario">@USUARIO</center></h3>
                    <h3><center className="name-usuario">UBICACION</center></h3>
                    <h3><center className="name-usuario">HORA</center></h3>
                    <center><button type="button" className="boton-cerrarSesion"><Link to={`/`} style={{ color: 'inherit',textDecoration: 'none' }} onClick={() => fire.auth().signOut()}>CERRAR SESIÓN</Link></button></center>
                </div>
                <div className="rectangulo-info-derecha">

                </div>
        </div>
    );
}

export default Inicio; 