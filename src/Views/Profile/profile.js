import React, { useEffect } from "react";
import axios from "axios"
import Button from "../../Components/Button/Button";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import './profile.css'
import { Mail, User, Plus } from "react-feather";
import avatar from "../../Images/user-avatar.svg"
import AddButton from "../../Components/AddButton/AddButton"



const Profile = () => {

    const [profile, setProfile] = useState({})
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)

    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('user')

    useEffect(() => {
        getUserData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    const profileData = event => {
        const name = event.target.name
        const value = event.target.value
        setProfile({ ...profile, [name]: value })
    }

    const getUserData = () => {
        axios.get(`http://localhost:4000/user/${userId}`)
            .then(res => {
                setProfile({ ...profile, 'name': res.data?.User?.name, 'email': res.data?.User?.email })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const saveHandlerProfile = () => {
        axios.patch(`http://localhost:4000/user/${userId}`, profile)
            .then(res => {
                if (res.data) {
                    setSuccess(true)
                }
            })
            .catch(err => {
                setError(err)
            })

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
                {success && <p>El usuario se ha actualizado con exito</p>}
                {error && <p>El no pudo ser actualizado</p>}
            </div>
            <div className="profile-body mx-4">
                <form>
                    <div className="profile-input">
                        <User color="#003366" width={'20px'} className="mx-1" />
                        <input type="text" value={profile.name} name="name" className="mx-1" onChange={profileData} />
                    </div>
                    <div className="profile-input">
                        <Mail color="#003366" width={'20px'} className="mx-1" />
                        <input type="text" value={profile.email} name="email" className="mx-1" onChange={profileData} />
                    </div>
                </form>
            </div>
            <div className="complete-add d-flex mx-4">
                <AddButton type="vehicle" />
                <AddButton />
            </div>
            <div className="profile-footer mx-4">
                <Button width={'large'} color="primary" onClick={saveHandlerProfile}> Guardar </Button>
                {/* <Link className="link-complete" to="/">Completar mi perfil mas tarde</Link> */}
            </div>
        </section>
    )
}

export default Profile