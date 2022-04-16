import React, { useState } from "react";
import axios from "axios";
import Button from "../../Components/Button/Button";
import { User, Lock } from 'react-feather'
import { Link, useNavigate } from "react-router-dom";
import './Login.css'



const Login = () => {
const navigate = useNavigate()
const [loginData, setLoginData]= useState({email: "", password: ""})
const [error, setError] = useState(null)

const postLogin = () => {
    axios.post('http://localhost:4000/auth/login', loginData)
    .then(res => {
        if(res.data){
            window.localStorage.setItem('token', res.data.token);
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
        <section className="login">
            <div className="login-header">
                <div>
                    <img src="https://picsum.photos/seed/picsum/200/200" className="rounded-circle" alt="Cinque Terre" />
                </div>
                <h1>Hey!</h1>
                {error && <p>Email o password incorrectos</p>}
            </div>
            <div className="login-body">
                <form>
                    <div className="login-input">
                        <User color="#666666" width={'20px'} className="mx-1"/>
                        <input type={'email'} placeholder='usuario' className="mx-1" onChange={handleEmailInput} />
                    </div>
                    <div className="login-input">
                        <Lock color="#666666" width={'20px'} className="mx-1" />
                        <input type={'password'} placeholder='contrasena' className="mx-1" onChange={handlePasswordInput} />
                    </div>
                    <a href='/' >olvidaste tu contrasena?</a>
                </form>
            </div>
            <div className="login-footer">
                <Button width={'medium'} color="primary" onClick={() => {postLogin()}} >Iniciar sesion!</Button>
                <p>No tienes una cuenta? <Link to="/registro">Registrate</Link></p>
            </div>
        </section>
    )
};

export default Login