import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './paginaInicio.css'

const Inicio = () => {
    return (
        <div className="paginaInicio">
                <Navbar.Collapse id="basic-navbar-nav" className="paginaInicio-barra">
                    <Nav className="paginaPrincipal-navigation-items">
                        <ul>
                            <li><button type="button" className="boton-barraInicio"><a href="/">Inicio</a></button></li>
                            <NavDropdown title="Actividades" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                            <li><button type="button" className="boton-barraInicio"><a href="/">Notas</a></button></li>
                            <li><button type="button" className="boton-barraInicio"><a href="/">Contactos</a></button></li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>

                <div className="rectangulo-info">
                </div>
        </div>
    );
}

export default Inicio; 