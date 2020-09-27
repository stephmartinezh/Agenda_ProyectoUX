import React from 'react'
import { Link } from "react-router-dom"
import './actividades.css'

const Actividades = () => {
    return(
        <div className="actividades">
                <div className="actividades-barra">
                    <div className="paginaPrincipal-navigation-items">
                        <ul>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/Inicio/`}>Inicio</Link></button></li>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/actividades/`}>Actividades</Link></button></li>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/notas/`}>Notas</Link></button></li>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/contactos/`}>Contactos</Link></button></li>                        
                        </ul>
                    </div>
                </div>
                <button className="boton-agregar"><Link to={`/`} style={{ color: 'inherit',textDecoration: 'none' }}>+ Crear</Link></button>
        </div>
    );
}

export default Actividades; 