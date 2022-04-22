import React from "react";
import { Watch, Facebook, Instagram, Twitter } from 'react-feather'
import registro from "../../Images/registro.svg"
import carFront from "../../Images/car-front.svg"
import product from "../../Images/product.svg"
import bucket from "../../Images/bucket.svg"
import shine from "../../Images/shine.svg"
import discount from "../../Images/discount.svg"
import { Link } from "react-router-dom";
import logo from "../../Images/logo-white.png"
import { motion } from "framer-motion"
import './Landing.css'

const Landing = () => {
    return (
        <div className="landing-page">
            <section className="landing-hero">
                <img className="logo-landing" src={logo} alt="washak logo" />  
            </section>
            <div className="washak-info py-5">
                <p className="mx-4 landing-p"> 
                    Washak✨ es una empresa mexicana dedicada a la
                    limpieza y detallado de automóviles que tiene como 
                    misión ofrecerte un servicio de la más alta calidad,
                    seguro, fácil y rápido llegando siempre hasta donde estés. 
                </p>
                <Link to='/login'>
                    <motion.button 
                        className="mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        >
                            Entrar
                    </motion.button>
                </Link>
            </div>
            <section className="landing-how-works pb-5 py-4">
                <div>
                    <h2 className="subtitle my-4">¿Cómo funciona?</h2>
                </div>
                <div className="card-how-works">
                    <div className="card-how-works-header">
                        <div className="icon-container">
                            <img className="landing-registro" src={registro} alt="" />
                        </div>
                    </div>
                    <div className="card-how-works-body">
                        <h3>Regístrate</h3>
                        <p>
                            Completa tu registro para que puedas
                            accesar a la plataforma y agregar tus
                            vehículos.   
                        </p>
                    </div>
                </div>
                <div className="card-how-works">
                    <div className="card-how-works-header">
                        <div className="icon-container d-flex flex-column justify-content-center">
                            <img src={carFront} alt="" />
                        </div>
                    </div>
                    <div className="card-how-works-body">
                        <h3>Elige</h3>
                        <p>
                            Selecciona tu vehículo, donde estarás,
                            el tipo de lavado que mejor se ajuste a tus necesidades, realiza
                            tu pago de manera segura a través de PayPal y espera a recibir un excelente
                            servicio.
                        </p>
                    </div>
                </div>
                <div className="card-how-works">
                    <div className="card-how-works-header">
                        <div className="icon-container d-flex justify-content-center">
                            <img className="landing-shine" src={shine} alt="" />
                        </div>
                    </div>
                    <div className="card-how-works-body">
                        <h3>Disfruta</h3>
                        <p>
                            Hora de brillar en cualquier camino, puedes dejarnos tus comentarios 
                            y llevar un seguimiento en tu historial de servicios.  
                        </p>
                    </div>
                </div>
            </section>
            <section className="landing-pros py-5">
                <h2 className="subtitle">PROS</h2>
                <div className="card-pros">
                    <div className="card-pros-img ms-4">
                        <Watch color="#036" size={80} strokeWidth={1.2} />
                    </div>
                    <div className="card-pros-content">
                        <p className="my-4 mx-3">
                            True on Demand. No pierdas más tiempo
                            en traslados y largas esperas, agenda tu cita 
                            y nosotros vamos hasta donde estes. 
                        </p>
                    </div>
                </div>
                <div className="card-pros">
                    <div className="card-pros-content">
                        <p className="m-4">
                            La más alta calidad con el mejor servicio, 
                            utilizamos los mejores productos del mercado
                            para mantener tu auto siempre brillando.   
                        </p>
                    </div>
                    <div className="card-pros-img me-4">
                        <img src={product} alt="pros"/>
                    </div>
                </div>
                <div className="card-pros">
                    <div className="card-pros-img ms-4">
                        <img src={bucket} alt="pros"/>
                    </div>
                    <div className="card-pros-content">
                        <p className="m-4">
                            Los procesos de Washak✨ reducen 
                            al mínimo el consumo de agua durante 
                            el lavado de tu auto, mantente amigable 
                            y cuidemos nuestro medio ambiente.
                        </p>
                    </div>
                </div>
                <div className="card-pros">
                    <div className="card-pros-content">
                        <p className="m-4">
                            Vuélvete un cliente frecuente y accede
                            a diferentes beneficios y promociones. 
                        </p>
                    </div>
                    <div className="card-pros-img me-4">
                        <img src={discount} alt="pros"/>
                    </div>
                </div>
            </section>
            <section className="landing-footer">
                    <Facebook className="m-2"/>
                    <Twitter className="m-2" />
                    <Instagram className="m-2"/>
            </section>
           {/*  <section className="landing-rates">
                <div>
                    <div className="rate-comment">
                        <div className="img-rate">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Landing