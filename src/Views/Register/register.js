import React from "react";
import Button from "../../Components/Button/Button";
import './register.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, Mail, User } from "react-feather";
import axios from "axios";


const Register = () => {

    const [newUser, setNewUser] = useState({})
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)

    const formHandlerUser = event => {
        const name = event.target.name
        const value = event.target.value
        setNewUser({...newUser, [name]:value})
        console.log(newUser)
    }

    const saveHandlerUser = async () => {
        axios.post(`http://localhost:4000/user`, newUser)
        .then(res => {
            if(res.status === 200){
                setSuccess(200)
            }
        })
        .catch(err => {
            setError(err)
        })
    }

    return (
        <section className="register">
            <div className="register-header">
                <div>
                    <img src="https://picsum.photos/200/200" className="rounded-circle" alt="" />
                </div>
                <h1>Bienvenido</h1>
                {success && <p>Usuario creado con exito</p>}
                {error && <p>El usuario no pudo ser creado</p>}
            </div>
            <div className="register-body mb-3">
                <form>
                    <div className="register-input">
                        <User color="#666666" width={'20px'} className="mx-1" />
                        <input type="text" placeholder="Nombre" name="name" className="mx-1" onChange={formHandlerUser}/>
                    </div>
                    <div className="register-input">
                        <Mail color="#666666" width={'20px'} className="mx-1" />
                        <input type="email" placeholder="Correo" name="email" className="mx-1" onChange={formHandlerUser} />
                     </div>
                    <div className="register-input">
                        <Lock color="#666666" width={'20px'} className="mx-1" />
                        <input type="password" placeholder="Contraseña" name="password" className="mx-1" onChange={formHandlerUser}/>
                     </div>
                </form>
            </div>
            <div>
                <Button width={'medium'} color="secondary" onClick={() => saveHandlerUser()}>Registrate</Button>
                <p>Ya tienes cuenta? <Link to="/">Inicia Sesión</Link></p>
            </div>
        </section>
    )
}

export default Register