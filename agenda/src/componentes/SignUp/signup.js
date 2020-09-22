import React, {useState, Link} from 'react';
import 'firebase/auth';

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


    return (
        <section className="login">
            <div className="loginContainer">
                <label>Correo electrónico</label>
                <input 
                    type="text" 
                    autoFocus 
                    required 
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Contraseña</label>
                <input 
                    type="password" 
                    required 
                    value={password} 
                    onChange= {(e) => setPassword(e.target.value)}
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
                    <button onClick={handleSignup}>Sign up</button>
                    <p>¿Tienes cuenta?<span>Log in </span> </p>        
                    </>
                    )}
                </div>

            </div>
        </section>        
    );
};

export default SignUp;