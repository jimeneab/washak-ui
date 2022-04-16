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
                <textarea placeholder="Referencias adicionales" name="more details" id="position-details" rows="3"></textarea>
            </div>
            <div className="add-position-footer mx-4">
                <Button width={'large'} color="primary">Guardar</Button>
            </div>
        </section>
    )
};

export default AddPosition