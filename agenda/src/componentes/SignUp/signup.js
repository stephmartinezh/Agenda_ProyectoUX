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

    const[email2, setEmail2] = useState('');
    const[password2, setPassword2] = useState('');

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Correo electrónico</label>
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