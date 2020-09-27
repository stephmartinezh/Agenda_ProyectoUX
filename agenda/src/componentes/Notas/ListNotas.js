import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Calendar from 'react-calendar';
import fire from '../Fire/Fire';

const ListNotas = () => {
    return (
        <div className="paginaInicio">
                <div className="paginaInicio-barra">
                    <div className="paginaPrincipal-navigation-items">
                        <ul>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/Inicio`}>Inicio</Link></button></li>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/actividades`}>Actividades</Link></button></li>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/listado`}>Notas</Link></button></li>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/contactos`}>Contactos</Link></button></li>                        
                         </ul>
                    </div>
                </div>

                <div className="rectangulo-info">
                    <center><img className="imagen-usuario" src="user.jpg"  alt="Imagen de inicio"></img></center>
                    <h3><center className="name-usuario">@USUARIO</center></h3>
                    <h3><center className="name-usuario">UBICACION</center></h3>
                    <h3><center className="name-usuario">HORA</center></h3>
                    <center><button type="button" className="boton-cerrarSesion"><Link to={`/`} style={{ color: 'inherit',textDecoration: 'none' }} onClick={() => fire.auth().signOut()}>CERRAR SESIÓN</Link></button></center>
                </div>
                <div className="rectangulo-info-derecha">
                    <Listar />     
                </div>
                <center><button type="button" className="boton-cerrarSesion"><Link to={`/newnotas`} style={{ color: 'inherit',textDecoration: 'none' }} onClick={() => fire.auth().signOut()}>CREAR NUEVA NOTA</Link></button></center>
        </div>
    );
}

class Listar extends Component {
    
    state = {
        notes: []
    }

    componentDidMount() {
        var ListNotas = [];//inicio nueva lista
        var storageList = localStorage.getItem('ListNotas') //jalo la lista de la memoria 
        if (storageList == null) {// si la lista esta vacia 
            ListNotas = []
        } else {
            ListNotas = JSON.parse(storageList);//tomo los valores que tiene 
        }
        this.setState({notes: ListNotas})
    }


    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>Etiqueta: {note.etiqueta}</h5>
                                </div>
                                <div className="card-body">
                                    <p>
                                       Contenido: {note.content}
                                    </p>
                                    <p>
                                        Fecha: {note.fecha}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }

}


export default ListNotas; 