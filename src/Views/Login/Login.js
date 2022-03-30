import React from "react";
import Button from "../../Components/Button/Button";
import { User, Lock } from 'react-feather'
import './Login.css'



const Login = () => {

    return(
        <section className="login">
            <div className="login-header">
                <div>
                    <img src="https://picsum.photos/seed/picsum/200/200" className="rounded-circle" alt="Cinque Terre" />
                </div>
                <h1>Hey!</h1>
            </div>
            <div className="login-body">
                <form>
                    <div className="login-input">
                        <User color="#666666" width={'20px'} className="mx-1"/>
                        <input type={'email'} placeholder='usuario' className="mx-1"/>
                    </div>
                    <div className="login-input">
                        <Lock color="#666666" width={'20px'} className="mx-1" />
                        <input type={'password'} placeholder='contrasena' className="mx-1" />
                    </div>
                    <a href='' >olvidaste tu contrasena?</a>
                </form>
            </div>
            <div className="login-footer">
                <Button width={'medium'} color="primary">Iniciar sesion!</Button>
                <p>No tienes una cuenta? <a href="/"> Registrate </a></p>
            </div>
        </section>
    )
};

export default Login