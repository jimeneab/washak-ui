import React from "react";
import api from "../../lib/api";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import './profile.css'
import { Mail, Phone, User, Plus } from "react-feather";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";
import avatar from "../../Images/user-avatar.svg"
import AddButton from "../../Components/AddButton/AddButton"


const Profile = () => {

    const [profile, setProfile] = useState({})

    const profileData = event => {
        const name = event.target.name
        const value = event.target.value
        setProfile({...profile, [name]:value})
        console.log(profile)
    }

    const saveHandlerProfile = async () => {
        const result = await api.saveUser(profile)
        console.log(result)
    }

    return (
        <section className="profile bgimg-1">
            <div className="profile-header">
                <div className="complete-user-img">
                    <div className="rounded-circle user-circle">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="rounded-circle add-pic">
                        <Plus color="#f3f3f3" />
                    </div>
                </div>
                <h1 className="subtitle">Completa tu Perfil</h1>
            </div>
            <div className="profile-body mx-4">
                <form>
                    <div className="profile-input">
                        <User color="#003366" width={'20px'} className="mx-1" />
                        <input type="text" placeholder="Nombre" name="name" className="mx-1" onChange={profileData}/>
                    </div>
                    <div className="profile-input">
                        <User color="#003366" width={'20px'} className="mx-1" />
                        <input type="text" placeholder="Apellido" name="lastName" className="mx-1" onChange={profileData}/>
                    </div>
                    <div className="profile-input">
                        <Mail color="#003366" width={'20px'} className="mx-1" />
                        <input type="text" placeholder="Correo" name="mail" className="mx-1" onChange={profileData}/>
                    </div>
                    <div className="profile-input">
                        <Phone color="#003366" width={'20px'} className="mx-1" />
                        <input type="tel" placeholder="Telefono" name="phone" className="mx-1" onChange={profileData}/>
                    </div>
                </form>
            </div>
            <div className="complete-add d-flex mx-4">
                <AddButton type="vehicle"/>
                <AddButton />
            </div>
            <div className="profile-footer mx-4">
                <Button width={'large'} color="primary" onClick={saveHandlerProfile}> Guardar </Button>
                <Link className="link-complete" to="/">Completar mi perfil mas tarde</Link>
            </div>
        </section>
    )
}

export default Profile