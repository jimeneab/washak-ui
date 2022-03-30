import React from "react";
import Button from "../../Components/Button/Button";
import { Activity } from 'react-feather'
import { Link } from "react-router-dom";
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
                        <Activity />
                        <input />
                    </div>
                    <div className="login-input">
                        <Activity />
                        <input />
                    </div>
                    <p>olvidaste tu contrasena?</p>
                </form>
            </div>
            <div className="login-footer">
                <Button>Iniciar sesion!</Button>
                <p>No tienes una cuenta? <Link to="/home">Registrate</Link></p>
            </div>
        </section>
    )
};

export default Login