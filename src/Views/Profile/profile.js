import React from "react";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import './profile.css'
import { Mail, Phone, User } from "react-feather";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";



const Profile = () => {

    const [profile, setProfile] = useState({})

    const profileData = event => {
        const name = event.target.name
        const value = event.target.value
        setProfile({...profile, [name]:value})
    }

    const saveHandlerProfile = () => {
        
    }

    return (
        <section className="profile">
            <div className="profile-header">
                <div>
                    <img src="https://picsum.photos/seed/picsum/200/200" className="rounded-circle" alt="" />
                </div>
                <h1>Completa tu Perfil</h1>
            </div>
            <div className="profile-body mb-3">
                <form>
                    <div className="profile-input">
                        <User color="#666666" width={'20px'} className="mx-1" />
                        <input type="text" placeholder="Nombre" name="name" className="mx-1" onChange={profileData}/>
                    </div>
                    <div className="profile-input">
                        <User color="#666666" width={'20px'} className="mx-1" />
                        <input type="text" placeholder="Apellido" name="lastName" className="mx-1" onChange={profileData}/>
                    </div>
                    <div className="profile-input">
                        <Mail color="#666666" width={'20px'} className="mx-1" />
                        <input type="text" placeholder="Correo" name="mail" className="mx-1" onChange={profileData}/>
                    </div>
                    <div className="profile-input">
                        <Phone color="#666666" width={'20px'} className="mx-1" />
                        <input type="tel" placeholder="Telefono" name="phone" className="mx-1" onChange={profileData}/>
                    </div>
                </form>
            </div>
            <div className="col-12 d-flex ">
                <div className="col-6">
                    <button className="button-img">< AiOutlineCar /></button>
                    <h3>Añade un vehículo</h3>
                </div>
                <div className="col-6">
                    <button className="button-img"><MdLocationPin /></button>
                    <h3>Añade una ubicación</h3>
                </div>
            </div>
            <div className="profile-footer">
                <Button width={'medium'} color="primary" onClick={saveHandlerProfile}> Guardar </Button>
                <Link to="/"><p>Completar mi perfil mas tarde</p></Link>
            </div>
        </section>
    )
}

export default Profile