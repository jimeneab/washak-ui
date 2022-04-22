import React, { useState } from "react";
import axios from "axios";
import Button from "../../Components/Button/Button";
import { Mail, Lock } from 'react-feather'
import { Link, useNavigate, Navigate } from "react-router-dom";
import './Login.css'
import logo from "../../Images/logo.svg"



const Login = () => {
const navigate = useNavigate()
const [loginData, setLoginData]= useState({email: "", password: ""})
const [error, setError] = useState(null)

let token = localStorage.getItem('token')
        if (token) {
            return <Navigate to="/home" replace />;
        }

const postLogin = () => {
    axios.post('https://washak-api.washak.xyz/auth/login', loginData)
    .then(res => {
        if(res.data){
            window.localStorage.setItem('token', res.data.token.token)
            window.localStorage.setItem('user', res.data.token.user)
            navigate('/home')
        }
    })
    .catch(e => {
        setError(e)
    })
}

const handleEmailInput = (e) => {
    const value = e.target.value
    setLoginData({...loginData,'email': value})
}

const handlePasswordInput = (e) => {
    const value = e.target.value
    setLoginData({...loginData, 'password': value})
}
    return(
        <section className="login bgimg-2 px-4">
            <div className="login-header">
                <div>
                    <Link to='/'>
                        <img src={logo} className="logo" alt="washak logo" />
                    </Link>
                </div>
            </div>
            <div className="login-body"> 
                {error && <p>Email o password incorrectos</p>}
                <form>
                    <div className="login-input">
                        <Mail color="#003366" width={'20px'} className="mx-1"/>
                        <input type={'email'} placeholder='Correo' onChange={handleEmailInput} className="mx-1"/>
                    </div>
                    <div className="login-input">
                        <Lock color="#003366" width={'20px'} className="mx-1" />
                        <input type={'password'} placeholder='Contraseña' className="mx-1" onChange={handlePasswordInput} />
                    </div>
                    <a href='/' >olvidaste tu contraseña?</a>
                </form>
            </div>
            <div className="login-footer">
                <Button width={'large'} color="secondary" onClick={() => { postLogin() }} >Iniciar sesion</Button>
                <p className="p-registro">No tienes una cuenta? <Link className="link-registro" to="/registro">Regístrate</Link></p>
            </div>
        </section>
    )
};

export default Login