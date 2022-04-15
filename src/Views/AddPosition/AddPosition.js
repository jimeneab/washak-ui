import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import { Search, ArrowLeft } from 'react-feather'
import MapView from "../../Components/MapView/Mapview";
import './AddPosition.css'
import api from '../../lib/api'



const AddPosition = () => {

    const [address, setAddress] = useState({})

    const addressHandler = event => {
        const direction = event.target.value
        console.log(address)
        setAddress({...address, direction})
    }

    const saveHandlerAddress = async () => {
        const result = await api.saveAddress(address)
        console.log(result)
    }

    return(
        <section className="add-position">
            <div className="add-position-header">
                <div id='add-positon-navbar'>
                    <ArrowLeft color="#666666" width={'40px'} className="mx-1" />
                    <img src="https://picsum.photos/seed/picsum/200/200" className="rounded-circle" alt="Cinque Terre" />
                </div>
                <h1>Anadir ubicacion</h1>
            </div>
            <div className="add-position-body">
                <form>
                    <div className="add-position-input">
                        <Search color="#666666" width={'20px'} className="mx-1"/>
                        <input type={'email'} placeholder='Calle #, Colonia, Ciudad, Estado' className="mx-1" onChange={addressHandler}/>
                    </div>
                </form>
                <div className="map-container">
                    <MapView></MapView>
                </div>
            </div>
            <div className="add-position-footer">
                <Button width={'medium'} color="primary" onClick={saveHandlerAddress}>Guardar</Button>
            </div>
        </section>
    )
};

export default AddPosition