import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import fire from '../Fire/Fire';
import { AuthContext } from '../Auth/Auth';

const Login = ({history}) => {

    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try{
            await fire
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
                history.push("/Inicio");
        } catch(error) {
            alert(error);
        }
    }, [history]);

    const { currentUser } = useContext(AuthContext);

    if(currentUser){
        return <Redirect to={`/Inicio`}
                />;
    }

    return (
        <section className="login">
            <div className="loginContainer">
                <form onSubmit={handleLogin}>
                    <label>Correo</label>
                    <input 
                    name="email" 
                    autoFocus 
                    required 
                    type="email"
                    placeholder="Correo"
                    />
                    <br></br><br></br>
                    <label>Contraseña</label>
                    <input 
                    name="password"
                    required
                    type="password"
                    placeholder="Contraseña"
                    />
                    <br></br><br></br><br></br><br></br>
                    <button className="button-estilo" type="submit">Log in</button>
                </form>
            </div>
        </section>
    )
};

export default withRouter(Login);