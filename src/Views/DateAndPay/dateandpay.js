import './dateandpay.css'
import { Navigate } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import NavBar from '../../Components/NavBar/NavBar.js'
import { ShoppingCart, Calendar, MapPin } from 'react-feather'
import carFront from "../../Images/car-front.svg"

const DateAndPay = () => {

    let token = localStorage.getItem('token');
      console.log(token)
  
      if (!token) {
          return <Navigate to="/login" replace />;
      }

    return (
        <section className="bgimg-1">
            <NavBar />
            <h2 className="title mx-4">Agenda tu cita</h2>
            <div className='mx-4 d-flex flex-column align-items-start confirm-info'>
                <div className='d-flex'>
                    <ShoppingCart color="#003366" size={30}/>
                    <p>
                        <b className='ms-4'>Tipo de servicio: </b> Express
                    </p>
                </div>
                <div className='d-flex'>
                    <img src={carFront} style={{width:35}} />
                    <p>
                        <b className='ms-4'>Vehículo: </b> Jeep • placa
                    </p>
                </div>
                <div className='d-flex'>
                    <div className="d-flex ms-1 align-items-center justify-content-center">
                        <MapPin color="#003366" size={30}/>
                    </div>
                    <p className='ms-4'>
                        <b>Ubicación: </b> San Gabriel 248. San Cayetano, Aguascalientes, Ags. 20010
                    </p>
                </div>
                <div className='d-flex'>
                    <Calendar className="ms-1"color="#003366" size={30}/>
                    <p>
                        <b className='ms-4'>Fecha y hora: </b> 20 de Abril • 14:00 hrs
                    </p>
                </div>
                <div className="checkout">
                    <p className='mb-0'><b>Subtotal</b> $90.00</p>
                    <p className='mb-0'><b>IVA</b> $14.40</p>
                    <p className='mb-0'><b>Total</b> $104.40</p>
                </div>
            </div>

            <div>
                <h2 className='subtitle mx-4 input-group'>Método de pago</h2>
                {/* <div className='pay-method '>
                    <input type="radio" name="efectivo" id="" className='mx-1 my-1 form-check-input'/> 
                    <label>Efectivo</label>
                    <input type="radio" name="paypal" id="" className='mx-1 my-1 form-check-input'/> 
                    <label >Paypal</label>
                </div> */}
            </div>
            <div className='mx-4 mt-4'>
                <Button color={'primary'} width={'large'} >PayPal</Button>
            </div>
        </section>

    )

}

export default DateAndPay