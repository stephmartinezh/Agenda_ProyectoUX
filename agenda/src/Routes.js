import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginContainer from './componentes/Containers/LoginContainer';
import Principal from './componentes/paginaPrincipal/paginaPrincipal';
import Inicio from './componentes/PaginaInicio/paginaInicio';
import Actividades from './componentes/Actividades/actividades';
import SignUp from './componentes/SignUp/signup';
import { AuthProvider } from './componentes/Auth/Auth';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
    return(
        <AuthProvider>
            <Switch>
                <Route exact path='/' component = {Principal}/>
                <Route exact path='/login' component={LoginContainer}/>
                <Route exact path='/signUp' component={SignUp}/>
                <PrivateRoute exact path='/Inicio' component = {Inicio}/>
                <Route exact path='/actividades' component = {Actividades}/>
            </Switch>
        </AuthProvider>
    );
}

export default Routes;

