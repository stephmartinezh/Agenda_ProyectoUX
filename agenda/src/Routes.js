import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginContainer from './componentes/Containers/LoginContainer';
import Principal from './componentes/paginaPrincipal/paginaPrincipal';
import Inicio from './componentes/PaginaInicio/paginaInicio';
import SignUp from './componentes/SignUp/signup';
const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component = {Principal}/>
            <Route path='/login' component={LoginContainer}/>
            <Route exact path='/inicio' component = {Inicio}/>
            <Route exact path='/signUp' component = {SignUp}/>
        </Switch>
    );
}

export default Routes;

