import React, { Component } from 'react'
import './paginaInicio.css'
import { Link } from "react-router-dom"
import Calendar from 'react-calendar';

const Inicio = () => {
    return (
        <div className="paginaInicio">
                <div className="paginaInicio-barra">
                    <div className="paginaPrincipal-navigation-items">
                        <ul>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/Inicio/`}>Inicio</Link></button></li>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/actividades/`}>Actividades</Link></button></li>
                            <li><button type="button" className="boton-barraInicio"><a href="/">Notas</a></button></li>
                            <li><button type="button" className="boton-barraInicio"><a href="/">Contactos</a></button></li>
                        </ul>
                    </div>
                </div>

                <div className="rectangulo-info">
                    <center><img class="imagen-usuario" src="user.jpg"  alt="Imagen de inicio"></img></center>
                    <h3><center className="name-usuario">@USUARIO</center></h3>
                    <h3><center className="name-usuario">UBICACION</center></h3>
                    <h3><center className="name-usuario">HORA</center></h3>
                    <center><button type="button" className="boton-cerrarSesion"><Link to={`/`} style={{ color: 'inherit',textDecoration: 'none' }}>CERRAR SESIÓN</Link></button></center>
                </div>
                <div className="rectangulo-info-derecha">
                    <div className="calendario">
                        <Calendario />
                    </div>
                    <div className="rectagulo-final"></div>
                </div>
        </div>
    );
}

class Calendario extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
      return (
        <div>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
            calendarType={"US"}
          />
        </div>
      );
    }
}


export default Inicio; 