import React from "react";
import Button from "../../Components/Button/Button";
import './register.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, Mail, User } from "react-feather";
import axios from "axios";
import logoMedium from "../../Images/logo-medium.svg"


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
                setSuccess(true)
            }
        })
        .catch(err => {
            setError(err)
        })
    }

    return (
        <section className="register bgimg-2">
            <div className="register-header">
                <div>
                    <img src={logoMedium} alt="washak medium logo" />
                </div>
                <h1>bienvenido</h1>
            </div>
            <div className="register-body mx-4">
                {success && <p>Usuario creado con exito</p>}
                {error && <p>El usuario no pudo ser creado</p>}
                <form>
                    <div className="register-input">
                        <User color="#003366" width={'20px'} className="mx-1" />
                        <input type="text" placeholder="Usuario" name="name" className="mx-1" onChange={formHandlerUser}/>
                    </div>
                    <div className="register-input">
                        <Mail color="#003366" width={'20px'} className="mx-1" />
                        <input type="email" placeholder="Correo" name="email" className="mx-1" onChange={formHandlerUser} />
                     </div>
                    <div className="register-input">
                        <Lock color="#003366" width={'20px'} className="mx-1" />
                        <input type="password" placeholder="Contraseña" name="password" className="mx-1" onChange={formHandlerUser}/>
                     </div>
                </form>
            </div>
            <div className="mx-4">
                <Button width={'large'} color="secondary" onClick={() => saveHandlerUser()}>Regístrate</Button>
                <p className="p-registro">Ya tienes cuenta? <Link className="link-registro" to="/login">Inicia Sesión</Link></p>
            </div>
        </section>
    )
}

export default Register