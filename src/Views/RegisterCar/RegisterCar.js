import { Input } from 'reactstrap'
import React from 'react'
import { useState } from 'react'
import api from '../../../src/lib/api'
import Button from '../../Components/Button/Button'
import { ArrowLeft } from 'react-feather'
import './RegisterCar.css'

function RegisterCar() {
    const [newCars, setNewCars] = useState({})

    const formHandler = event => {
        const value = event.target.value
        const property = event.target.name
        setNewCars({ ...newCars, [property]: value })
    }
    const saveHandler = async () => {
        const result = await api.saveCars(newCars)
        console.log(result)
    }
    return (
        <div className='container'>
            <div className='row justify-content-center register'>
                <div className='col-12'>
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
                        <div>
                            <h2 className='secondary-text'>Tipo de vehiculo</h2>
                        </div>
                        <div className='d-flex justify-content-around'>
                            <Button onClick={formHandler} value="car" name="vehiculo">Car</Button>
                            <Button onClick={formHandler} value="van" name="vehiculo">Van</Button>
                            <Button onClick={formHandler} value="truck" name="vehiculo">Truck</Button>
                        </div>
                        <div className='mt-5'>
                            <h2 className='secondary-text'>Datos del vehiculo</h2>
                        </div>
                        <div className='input'>
                            <Input onChange={formHandler} type='text' name='marca' className='mb-3 rounded ' placeholder='Marca' />
                            <Input onChange={formHandler} type='text' name='modelo' className='mb-3 rounded ' placeholder='Modelo' />
                            <Input onChange={formHandler} type='text' name='color' className='mb-3 rounded ' placeholder='Color' />
                            <Input onChange={formHandler} type='text' name='placa' className='mb-3 rounded ' placeholder='Placa (Opcional)' />
                        </div>
                        <div className='registerCar-footer'>
                            <Button onClick={saveHandler} width={'medium'} color={'primary'} >Guardar vehiculo</Button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default RegisterCar