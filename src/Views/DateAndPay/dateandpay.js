import './dateandpay.css'
import { ArrowLeft } from "react-feather"
import {Navigate} from 'react-router-dom'
import Button from '../../Components/Button/Button'

const DateAndPay = () => {

    let token = localStorage.getItem('token');
      console.log(token)
  
      if (!token) {
          return <Navigate to="/login" replace />;
      }

    return (
        <section className="body-dateandpay">
            <div className="add-position-header">
                <div id='add-positon-navbar'>
                    <ArrowLeft color="#666666" width={'40px'} className="mx-1" />
                    <img src="https://picsum.photos/seed/picsum/200/200" className="rounded-circle" alt="Cinque Terre" />
                </div>
            </div>
            <div className='text-principal'>
                <p>Agenda tu Cita</p>
            </div>
            <div>
                <p className='text-secondary'>servicio:</p>
                <p className='text-service'> Ecologico</p>
            </div>
            <div>
                <p className='text-secondary'>Vehículo:</p>
                <p className='text-service'> Jetta</p>
            </div>
            <div>
                <p className='text-secondary'>Ubicación:</p>
                <p className='text-service'> Mi Casa</p>
            </div>
            <div>
                <p className='text-secondary'>Fecha y Hora:</p>
                <p className='text-service'>12/04, 14:00</p>
            </div>
            <div>
                <p className='text-principal input-group'>Método de pago</p>
                <div className='pay-method '>
                    <input type="radio" name="efectivo" id="" className='mx-1 my-1 form-check-input'/> 
                    <label>Efectivo</label>
                    <input type="radio" name="paypal" id="" className='mx-1 my-1 form-check-input'/> 
                    <label >Paypal</label>
                </div>
            </div>
            <div className='button-date'>
                <Button color={'primary'} width={'medium'} >Agendar</Button>
            </div>
        </section>

    )

}

export default DateAndPay