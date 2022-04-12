import React from "react";
import Button from "../../Components/Button/Button";
import './register.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, Mail, User } from "react-feather";
import api from "../../lib/api";


const Register = () => {


    const [newUser, setNewUser] = useState({})

    const formHandlerUser = event => {
        const name = event.target.name
        const value = event.target.value
        setNewUser({...newUser, [name]:value})
        console.log(newUser)
    }

    const saveHandlerUser = async () => {
        const result = await api.saveUser(newUser)
        console.log(result)
    }


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
                        <input type="text" placeholder="Usuario" name="User" className="mx-1" onChange={formHandlerUser}/>
                    </div>
                    <div className="register-input">
                        <User color="#666666" width={'20px'} className="mx-1" />
                        <input type="text" placeholder="Apellido" name="lastName" className="mx-1" onChange={formHandlerUser}/>
                    </div>
                    <div className="register-input">
                        <Mail color="#666666" width={'20px'} className="mx-1" />
                        <input type="email" placeholder="Correo" name="Mail" className="mx-1" onChange={formHandlerUser} />
                     </div>
                    <div className="register-input">
                        <Lock color="#666666" width={'20px'} className="mx-1" />
                        <input type="password" placeholder="Contraseña" name="Password" className="mx-1" onChange={formHandlerUser}/>
                     </div>
                </form>
            </div>
            <div>
                <Button width={'medium'} color="secondary" onClick={saveHandlerUser}>Registrate</Button>
                <p>Ya tienes cuenta? <Link to="/">Inicia Sesión</Link></p>
            </div>

        </section>


    )
}

export default Register