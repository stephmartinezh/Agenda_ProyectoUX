import React, { Component } from 'react'
import './paginaInicio.css'
import { Link } from "react-router-dom"
import Calendar from 'react-calendar';
import fire from '../Fire/Fire';

const Inicio = (props) => {

    const {
        userName
    } = props;

    return (
        <div className="paginaInicio">
                <div className="paginaInicio-barra">
                    <div className="paginaPrincipal-navigation-items">
                        <ul>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/Inicio`}>Inicio</Link></button></li>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/actividades`}>Actividades</Link></button></li>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/listado`}>Notas</Link></button></li>          
                         </ul>
                    </div>
                </div>

                <div>
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