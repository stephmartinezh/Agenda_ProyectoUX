import React, {useState} from 'react';
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';
import fire from '../fireb';

const Login = (props) =>{
    const{
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = useState('');
    const [email2, setEmail2] = useState('');
    const [password2, setPassword2] = useState('');
    const firebase = useFirebaseApp();
    //const user = useUser();

    const submit = async() =>{
        await firebase.auth().createUserWithEmailAndPassword(email2,password2);
    }

    const logout = async ()=>{
        await firebase.auth().signOut();
    }

    const login = async ()=>{
        await firebase.auth().signInWithEmailAndPassword(email2,password2);
    }

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Usuario</label>
                <input 
                    type="text" 
                    autoFocus 
                    required 
                    value={email2} 
                    onChange={(ev)=> setEmail2(ev.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Contraseña</label>
                <input 
                    type="password" 
                    required 
                    value={password2} 
                    onChange= {(ev) => setPassword2(ev.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ?(
                    <>
                    <button onClick={handleLogin}>Sign in </button>
                    <p>¿Aún no tienes cuenta?<span>Registrarse</span></p>
                    </>
                    ): (
                    <>
                    <button onClick={submit}>Log in</button>
                    <p>¿Tienes cuenta?<span>Sign up </span> </p>        
                    </>
                    )}
                </div>

            </div>
        </section>        
    );
};

export default Login;