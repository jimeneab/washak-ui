import React from "react";
import '../Home/home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="register">
                        <section className="register-header">
                            <div>
                                <div>
                                    <img src="https://picsum.photos/200/200" className="rounded-circle" alt="" />
                                </div>
                                <h1>Bienvenido</h1>
                            </div>
                            <div className="register-body mb-3">
                                <form>
                                    <div className="form-group">
                                        <input type="text" placeholder="Usuario" className="form-control mb-3" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Correo" className="form-control mb-3" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" placeholder="Contraseña" className="form-control mb-3" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" placeholder="Confirmar Contraseña" className="form-control mb-3" />
                                    </div>
                                </form>
                                <div>
                                    <button className="btn btn-primary mb-3">Registrate</button>
                                    <p>Ya tienes cuenta? <Link to="/register">Inicia Sesión</Link></p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home