import React, {useState} from 'react';
import 'firebase/auth';
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

const[email2, setEmail2] = useState('');
const[password2, setPassword2] = useState('');
    return (
        <section className="login">
            <div className="loginContainer">
                <label>Usuario</label>
                <input 
                    type="text" 
                    autoFocus 
                    required 
                    value={email2} 
                    onChange={(e)=> setEmail2(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Contraseña</label>
                <input 
                    type="password" 
                    required 
                    value={password2} 
                    onChange= {(e) => setPassword2(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ?(
                    <>
                    <button onClick={handleSignup}>Sign in </button>
                    <p>¿Aún no tienes cuenta?<span>Registrarse</span></p>
                    </>
                    ): (
                    <>
                    <button onClick={handleLogin}>Log in</button>
                    <p>¿Tienes cuenta?<span>Sign up </span> </p>        
                    </>
                    )}
                </div>

            </div>
        </section>        
    );
};

export default Login;