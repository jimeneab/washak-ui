import { Button, Input } from 'reactstrap'
import React from 'react'

function RegisterCar() {
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
                        <Button>Car</Button>
                        <Button>Van</Button>
                        <Button>Truck</Button>
                    </div>
                    <div>
                        <h4>Datos del vehiculo</h4>
                    </div>
                    <div>
                        <Input type='text' name='marca' className='m-3' placeholder='Marca' />
                        <Input type='text' name='modelo' className='m-3' placeholder='Modelo' />
                        <Input type='text' name='color' className='m-3' placeholder='Color' />
                        <Input type='text' name='placa' className='m-3' placeholder='Placa (Opcional)' />
                    </div>
                    <div>
                        <Button>Guardar vehiculo</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterCar