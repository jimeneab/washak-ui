import React, { useState } from "react";
import axios from "axios";
import Button from "../../Components/Button/Button";
import { User, Lock } from 'react-feather'
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import logo from "../../Images/logo.svg"



const Login = () => {
const navigate = useNavigate()
const [loginData, setLoginData]= useState({email: "", password: ""})
const [error, setError] = useState(null)

const postLogin = () => {
    axios.post('http://localhost:4000/auth/login', loginData)
    .then(res => {
        if(res.data){
            window.localStorage.setItem('token', res.data.token)
            window.localStorage.setItem('user', res.data.token.user)
            console.log(res)
            navigate('/')
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
                    <img src={logo} className="logo" alt="washak logo" />
                </div>
            </div>
            <div className="login-body"> 
                {error && <p>Email o password incorrectos</p>}
                <form>
                    <div className="login-input">
                        <User color="#003366" width={'20px'} className="mx-1"/>
                        <input type={'email'} placeholder='usuario' onChange={handleEmailInput} className="mx-1"/>
                    </div>
                    <div className="login-input">
                        <Lock color="#003366" width={'20px'} className="mx-1" />
                        <input type={'password'} placeholder='contraseña' className="mx-1" onChange={handlePasswordInput} />
                    </div>
                    <a href='/' >olvidaste tu contraseña?</a>
                </form>
            </div>
            <div className="login-footer">
                <Button width={'large'} color="secondary" onClick={() => {postLogin()}} >Iniciar sesion</Button>
                <p className="p-registro">No tienes una cuenta? <Link className="link-registro" to="/registro">Regístrate</Link></p>
            </div>
        </section>
    )
};

export default Login