import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import {Navigate} from 'react-router-dom'
import { Search } from 'react-feather'
import MapView from "../../Components/MapView/Mapview";
import NavBar from "../../Components/NavBar/NavBar";
import './AddPosition.css'
import axios from 'axios'



const AddPosition = () => {

    const [address, setAddress] = useState({})
    const token = localStorage.getItem('token')
    const userId = window.localStorage.getItem('user')
    const config = {headers: {'Content-Type': 'application/json', authorization:`${token}`}}

    if (!token) {
        return <Navigate to="/login" replace />;
    }
    
    const saveHandlerAddress = async () => {
        axios.post(`https://washak-api.washak.xyz/maps/${userId}`, address, config)
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })
    }

    const addressHandler = event => {
        const ubicacion = event.target.value
        console.log(address)
        setAddress({...address, ubicacion})
    }

    const additionalReference = event => {
        const referencias = event.target.value
        console.log(referencias)
        setAddress({...address, referencias})
        console.log(address)
    }


    return(
        <section className="add-position bgimg-1">
            <div className="add-position-header">
                <NavBar />
                <h1 className="title ms-4">Elige tu ubicación</h1>
            </div>
            <div className="add-position-body px-4">
                <form>
                    <div className="add-position-input">
                        <Search color="#666666" width={'20px'} className="mx-1"/>
                        <input type="search" placeholder='Calle #, Colonia, Ciudad, Estado' className="mx-1" onChange={addressHandler}/>
                    </div>
                </form>
                <div className="map-container">
                    <MapView></MapView>
                </div>
                <p className="current-position">Usar ubicación actual</p>
                <textarea placeholder="Referencias adicionales" name="more details" id="position-details" rows="3" onChange={additionalReference}></textarea>
            </div>
            <div className="add-position-footer mx-4">
                <Button width={'large'} color="primary" onClick={saveHandlerAddress}>Siguiente</Button>
            </div>
        </section>
    )
};

export default AddPosition