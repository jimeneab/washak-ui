import React from "react";
import { User, Facebook, Instagram, Twitter } from 'react-feather'
import './Landing.css'

const Landing = () => {
    return (
        <div className="landing-page">
            <section className="landing-hero">
                <h1>Washak</h1>
                <div>
                    <button>Entrar!</button>
                </div>
            </section>
            <section className="landing-how-works py-5">
                <div>
                    <h2>Como funciona?</h2>
                </div>
                <div className="card-how-works">
                    <div className="card-how-works-header">
                        <div className="icon-container">
                            <User color="#666666" width={'60px'} className="mx-1"/>
                        </div>
                    </div>
                    <div className="card-how-works-body">
                        <h3>Registra</h3>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                <div className="card-how-works">
                    <div className="card-how-works-header">
                        <div className="icon-container">
                            <User color="#666666" width={'60px'} className="mx-1"/>
                        </div>
                    </div>
                    <div className="card-how-works-body">
                        <h3>Selecciona</h3>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                <div className="card-how-works">
                    <div className="card-how-works-header">
                        <div className="icon-container">
                            <User color="#666666" width={'60px'} className="mx-1"/>
                        </div>
                    </div>
                    <div className="card-how-works-body">
                        <h3>Disfruta</h3>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
            </section>
            <section className="landing-pros py-5">
                <h2>PROS</h2>
                <div className="card-pros">
                    <div className="card-pros-img">
                        <img src="https://indiepropub.com/wp-content/uploads/2021/09/Hombre-lavando-auto..-678x381.png" alt="pros"/>
                    </div>
                    <div className="card-pros-content">
                        <p className="p-3">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                <div className="card-pros">
                    <div className="card-pros-content">
                        <p className="p-3">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                    <div className="card-pros-img">
                        <img src="https://indiepropub.com/wp-content/uploads/2021/09/Hombre-lavando-auto..-678x381.png" alt="pros"/>
                    </div>
                </div>
                <div className="card-pros">
                    <div className="card-pros-img">
                        <img src="https://indiepropub.com/wp-content/uploads/2021/09/Hombre-lavando-auto..-678x381.png" alt="pros"/>
                    </div>
                    <div className="card-pros-content">
                        <p className="p-3">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                <div className="card-pros">
                    <div className="card-pros-content">
                        <p className="p-3">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                    <div className="card-pros-img">
                        <img src="https://indiepropub.com/wp-content/uploads/2021/09/Hombre-lavando-auto..-678x381.png" alt="pros"/>
                    </div>
                </div>
            </section>
            <section className="landing-footer">
                    <Facebook className="m-2"/>
                    <Twitter className="m-2" />
                    <Instagram className="m-2"/>
            </section>
        </div>
    )
}

export default Landing