import { Button, Input } from 'reactstrap'
import React from 'react'
import { useState } from 'react'
import api from '../../../src/lib/api'

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
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <div>
                        <h1>Añade un vehiculo</h1>
                    </div>
                    <div>
                        <h2>Tipo de vehiculo</h2>
                    </div>
                    <div className='d-flex justify-content-around'>
                        <Button onClick={formHandler} value="car" name="vehiculo">Car</Button>
                        <Button onClick={formHandler} value="van" name="vehiculo">Van</Button>
                        <Button onClick={formHandler} value="truck" name="vehiculo">Truck</Button>
                    </div>
                    <div>
                        <h4>Datos del vehiculo</h4>
                    </div>
                    <div>
                        <Input onChange={formHandler} type='text' name='marca' className='m-3' placeholder='Marca' />
                        <Input onChange={formHandler} type='text' name='modelo' className='m-3' placeholder='Modelo' />
                        <Input onChange={formHandler} type='text' name='color' className='m-3' placeholder='Color' />
                        <Input onChange={formHandler} type='text' name='placa' className='m-3' placeholder='Placa (Opcional)' />
                    </div>
                    <div>
                        <Button onClick={saveHandler} >Guardar vehiculo</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterCar