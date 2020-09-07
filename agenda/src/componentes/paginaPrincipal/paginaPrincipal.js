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
            <h1><center>¿Necesitas organizar tus eventos y contactos?</center></h1>
            <br></br>
            <p><font size="5"><center>Con esta agenda virtual ahora puedes hacerlo</center></font></p>
            <p><font size="5"><center>en menos tiempo y sin mucho esfuerzo.</center></font></p>
            <br></br>

            <button type="button" class="boton-estilo">Crea tu agenda virtual</button>

            <br></br><br></br><br></br>

            <div className="rectangulo-primeraParte">
                <center><img class="imagen-computadora" src="principal_computadora.png" alt="Imagen de la página web"></img></center>
            </div>
            <br></br><br></br><br></br>

            <h1><center>Funciones de la agenda virtual</center></h1>
            <br></br><br></br><br></br>

                
            <div className="imagen-primera">
                <img src="calendario.png" alt="Calendario organizador"></img>
                <p><font size="5">Calendario organizador</font></p>
            </div>
            <div className="imagen-segunda">
                <img src="actividades.png" alt="Programador de actividades"></img>

                <p><font size="5">Programador de actividades</font></p>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

            <div className="imagen-notas">
                <img src="notas.png" alt="Calendario organizador"></img>
                <p><font size="5">Manejo de notas</font></p>
            </div>
            <div className="imagen-segunda">
                <img src="contactos.png" alt="Almacenador de contactos"></img>

                <p><font size="5">Almacenador de contactos</font></p>
            </div>
        </div>
    );
}

export default Principal; 