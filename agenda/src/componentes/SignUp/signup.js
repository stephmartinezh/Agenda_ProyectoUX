import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import fire from '../Fire/Fire';

const SignUp = ({history}) => {
    const handleSignup = useCallback(async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try{
            await fire
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
                history.push("/Inicio");
        } catch(error) {
            alert(error);
        }
    }, [history]);


    return (
        <section className="login">
            <div className="loginContainer">
                <form onSubmit={handleSignup}>
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
                    <button className="button-estilo" type="submit">Sign up</button>
                </form>
            </div>
        </section>
    )
};

export default withRouter(SignUp);