import React, {useState, Link} from 'react';
import 'firebase/auth';
import {useFirebaseApp} from 'reactfire';

const SignUp = (props) =>{
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
                <label>Correo electrónico</label>
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
                    <p>¿Tienes cuenta?<span>Log in</span></p>
                    </>
                    ): (
                    <>
                    <button onClick={submit}>Sign up</button>
                    <p>¿Tienes cuenta?<span>Log in </span> </p>        
                    </>
                    )}
                </div>

            </div>
        </section>        
    );
};

export default SignUp;