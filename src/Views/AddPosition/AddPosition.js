import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import { Search } from 'react-feather'
import MapView from "../../Components/MapView/Mapview";
import NavBar from "../../Components/NavBar/NavBar";
import './AddPosition.css'



const AddPosition = () => {

    const [address, setAddress] = useState({})

    const addressHandler = event => {
        const direction = event.target.value
        console.log(address)
        setAddress({...address, direction})
    }

    return(
        <section className="add-position bgimg-1">
            <div className="add-position-header">
                <NavBar />
                <h1 className="title ms-4">Elige tu ubicación</h1>
            </div>
            <div className="add-position-body">
                <form className="mx-4">
                    <div className="add-position-input">
                        <Search color="#666666" width={'20px'} className="mx-1"/>
                        <input type="search" placeholder='Calle #, Colonia, Ciudad, Estado' className="mx-1" onChange={addressHandler}/>
                    </div>
                </form>
                <div className="map-container mx-4">
                    <MapView></MapView>
                </div>
                <p className="current-position ms-4">Usar ubicación actual</p>
            </div>
            <div className="add-position-footer">
                <Button width={'medium'} color="primary">Guardar</Button>
            </div>
        </section>
    )
};

export default AddPosition