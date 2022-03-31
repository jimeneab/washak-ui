import React from "react";
import '../Home/home.css'
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { Lock, Mail, User } from "react-feather";

const Home = () => {
    return (
        <section className="register">
            <div className="register-header">
                <div>
                    <img src="https://picsum.photos/200/200" className="rounded-circle" alt="" />
                </div>
                <h1>Bienvenido</h1>
            </div>
            <div className="register-body mb-3">
                <form>
                    <div className="register-input">
                        <User color="#666666" width={'20px'} className="mx-1" />
                        <input type="text" placeholder="Usuario" className="mx-1" />
                    </div>
                    <div className="register-input">
                        <Mail color="#666666" width={'20px'} className="mx-1" />
                        <input type="email" placeholder="Correo" className="mx-1" />
                    </div>
                    <div className="register-input">
                        <Lock color="#666666" width={'20px'} className="mx-1" />
                        <input type="password" placeholder="Contraseña" className="mx-1" />
                    </div>
                    <div className="register-input">
                        <Lock color="#666666" width={'20px'} className="mx-1" />
                        <input type="password" placeholder="Confirmar Contraseña" className="mx-1" />
                    </div>
                </form>
            </div>
            <div>
                <Button width={'medium'} color="secondary">Registrate</Button>
                <p>Ya tienes cuenta? <Link to="/">Inicia Sesión</Link></p>
            </div>

        </section>


    )
}

export default Home