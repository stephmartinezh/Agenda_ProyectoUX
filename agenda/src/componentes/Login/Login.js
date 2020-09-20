import React from 'react';

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
    } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Usuario</label>
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
                    <p>¿Aún no tienes cuenta?<span>Registrarse</span></p>
                    </>
                    ): (
                    <>
                    <button onClick={handleSignup}>Log in</button>
                    <p>¿Tienes cuenta?<span>Sign up </span> </p>        
                    </>
                    )}
                </div>

            </div>
        </section>        
    );
};

export default Login;