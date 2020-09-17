import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginContainer from './componentes/Containers/LoginContainer';
import Principal from './componentes/paginaPrincipal/paginaPrincipal';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component = {Principal}/>
            <Route path='/login' component={LoginContainer}/>
        </Switch>
    );
}

export default Routes;

