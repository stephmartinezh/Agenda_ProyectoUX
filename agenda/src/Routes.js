import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginContainer from './componentes/Login/Login';
import Principal from './componentes/paginaPrincipal/paginaPrincipal';
import Inicio from './componentes/PaginaInicio/paginaInicio';
import Actividades from './componentes/Actividades/actividades';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component = {Principal}/>
            <Route exact path='/login' component={LoginContainer}/>
            <Route exact path='/inicio' component = {Inicio}/>
            <Route exact path='/actividades' component = {Actividades}/>
        </Switch>
    );
}

export default Routes;

