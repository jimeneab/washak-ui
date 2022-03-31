import React from "react";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import './profile.css'
import { Mail, Phone, User } from "react-feather";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";



const Profile = () => {
    return (
        <section className="profile">
            <div className="profile-header">
                <div>
                    <img src="https://picsum.photos/seed/picsum/200/200" className="rounded-circle" alt="" />
                </div>
            </div>
            <h1>Completa tu Perfil</h1>
            <div>
                <form>
                    <div>
                        <User color="#666666" width={'20px'} className="mx-1" />
                        <input type="text" placeholder="Nombre" className="mx-1" />
                    </div>
                    <div>
                        <User color="#666666" width={'20px'} className="mx-1" />
                        <input type="text" placeholder="Apellido" className="mx-1" />
                    </div>
                    <div>
                        <Mail color="#666666" width={'20px'} className="mx-1" />
                        <input type="text" placeholder="Correo" className="mx-1" />
                    </div>
                    <div>
                        <Phone color="#666666" width={'20px'} className="mx-1" />
                        <input type="tel" placeholder="Telefono" className="mx-1" />
                    </div>
                </form>
            </div>
            <div>
                <div>
                    <button>< AiOutlineCar /></button>
                    <h3>Añade un vehículo</h3>
                </div>
                <div>
                    <button><MdLocationPin /></button>
                    <h3>Añade una ubicación</h3>
                </div>
            </div>
            <div>
                <Button width={'medium'} color="primary"> Guardar </Button>
                <Link to="/"><p>Completar mi perfil mas tarde</p></Link>
            </div>

        </section>
    )
}

export default Profile