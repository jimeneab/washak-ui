import { Input } from 'reactstrap'
import {Navigate} from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import Button from '../../Components/Button/Button'
import { ArrowLeft } from 'react-feather'
import './RegisterCar.css'

function RegisterCar() {
    const [newCars, setNewCars] = useState({})

    let token = localStorage.getItem('token');
    console.log(token)

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    const userId = window.localStorage.getItem('user')
    const config = {headers: {'Content-Type': 'application/json',authorization:`${token}`}}

    const formHandler = event => {
        const value = event.target.value
        const property = event.target.name
        setNewCars({ ...newCars, [property]: value })
    }
    const saveHandler = async () => {
        axios.post(`http://localhost:4000/cars/${userId}`, newCars, config)
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })
    }



    return (
       
            <div className='row justify-content-center register'>
               
                    <section>
                        <div className='add-position-header'>
                            <div id='add-positon-navbar' >
                                <ArrowLeft color="#666666" width={'40px'} className="mx-1" />
                                <img src="https://picsum.photos/seed/picsum/200/200" className="rounded-circle" alt="Cinque Terre" />
                            </div>
                        </div>
                        <div className='principal-text'>
                            <h1>Añade un vehiculo</h1>
                        </div>
                        <div className='secondary-text'>
                            <h2>Tipo de vehiculo</h2>
                        </div>
                        <div className='d-flex justify-content-around'>
                            <Button onClick={formHandler} value="car" name="vehiculo" className='button-registerCar'>Car</Button>
                            <Button onClick={formHandler} value="van" name="vehiculo" className='button-registerCar'>Van</Button>
                            <Button onClick={formHandler} value="truck" name="vehiculo" className='button-registerCar'>Truck</Button>
                        </div>
                        <div className='secondary-text mt-5'>
                            <h2>Datos del vehiculo</h2>
                        </div>
                        <div className='input'>
                            <Input onChange={formHandler} type='text' name='marca' className='mb-3 rounded registerCar-input' placeholder='Marca' />
                            <Input onChange={formHandler} type='text' name='modelo' className='mb-3 rounded registerCar-input' placeholder='Modelo' />
                            <Input onChange={formHandler} type='text' name='color' className='mb-3 rounded registerCar-input' placeholder='Color' />
                            <Input onChange={formHandler} type='text' name='placa' className='mb-3 rounded registerCar-input' placeholder='Placa (Opcional)' />
                        </div>
                        <div className='registerCar-footer'>
                            <Button onClick={saveHandler} width={'medium'} color={'primary'} >Guardar vehiculo</Button>
                        </div>
                    </section>
                </div>
    )
}

export default RegisterCar