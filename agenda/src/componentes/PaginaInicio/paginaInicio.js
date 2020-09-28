import React, { Component } from 'react'
import './paginaInicio.css'
import { Link } from "react-router-dom"
import Calendar from 'react-calendar';
import fire from '../Fire/Fire';

import { Inject ,ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';


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
                            <div className="espacio"></div>
                            <div className="paginaPrincipal-navigation-items">
                                <ul>
                                    <li><button type="button" className="boton-barraInicio"><Link to={`/`} onClick={() => fire.auth().signOut()}>Cerrar Sesión</Link></button></li>       
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
                <div>
                    <Calendario />
                </div>
        </div>
    );
}

class Calendario extends React.Component {
    
    render() {
        return <ScheduleComponent> 
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
    }
}


export default Inicio; 