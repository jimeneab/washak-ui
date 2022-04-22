import axios from 'axios'
import { useEffect, useState } from 'react'
import { Calendar, MapPin, ShoppingCart } from 'react-feather'
import { useNavigate } from 'react-router-dom'
import { useQueryParams } from '../../helpers/useQueryParams'
import Button from '../../Components/Button/Button'
import NavBar from '../../Components/NavBar/NavBar.js'
import carFront from "../../Images/car-front.svg"
import { PayPalButton } from "react-paypal-button-v2";
import './dateandpay.css'

const DateAndPay = () => {

    const [serviceInfo, setServiceInfo] = useState()
    const token = localStorage.getItem('token')
    const { serviceId } = useQueryParams()
    const config = { headers: { authorization: `${token}` } }
    const navigate = useNavigate()

    console.log(serviceId)

    useEffect(() => {
            const params = (new URL(document.location)).searchParams
            const serviceIdParams = params.get("serviceId")
            console.log("service id:", serviceIdParams)
            axios.get(`https://washak-api.washak.xyz/services/${serviceIdParams}`, config)
            .then(res => {
                console.log("all services", res.data.cars)
                setServiceInfo(res.data.cars)
            })
            .catch(e => {
                console.error(e)
            })

        const redirectFunction = () => navigate('/login')

        if (!token) {
            redirectFunction()
        }
    }, [serviceId])

    const { packageWash, marca, placa, place, day, month, hour } = serviceInfo || {}
    const priceConfig = {
        EXPRESS: 90,
        COMPLETE: 150,
        PREMIUM: 220
    }
    const iva = priceConfig[packageWash] * 0.16
    const total = priceConfig[packageWash] + iva

    return (
        <section className="bgimg-1">
            <NavBar />
            <h2 className="title mx-4">Agenda tu cita</h2>
            {serviceInfo &&
                        (
                        <div className='mx-4 d-flex flex-column align-items-start confirm-info'>
                            <div className='d-flex'>
                                <ShoppingCart color="#003366" size={30} />
                                <p>
                                    <b className='ms-4'>Tipo de servicio: </b> {packageWash}
                                </p>
                            </div>
                            <div className='d-flex'>
                                <img src={carFront} style={{ width: 35 }} />
                                <p>
                                    <b className='ms-4'>Vehículo: </b> {marca} • {placa}
                                </p>
                            </div>
                            <div className='d-flex'>
                                <div className="d-flex ms-1 align-items-center justify-content-center">
                                    <MapPin color="#003366" size={30} />
                                </div>
                                <p className='ms-4'>
                                    <b>Ubicación: </b> {place}
                                </p>
                            </div>
                            <div className='d-flex'>
                                <Calendar className="ms-1" color="#003366" size={30} />
                                <p>
                                    <b className='ms-4'>Fecha y hora: </b> {`${day} ${month}`} • {hour}
                                </p>
                            </div>
                            <div className="checkout">
                                <p className='mb-0'><b>Subtotal</b> ${priceConfig[packageWash]}.00</p>
                                <p className='mb-0'><b>IVA</b> ${iva}</p>
                                <p className='mb-0'><b>Total</b> ${total}</p>
                            </div>
                        </div>
                    )
            }

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
                <PayPalButton
                    amount={Math.ceil(total/20)}
                    
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details) => {
                        navigate("/workInProgress");

                        // OPTIONAL: Call your server to save the transaction
                       /*  return fetch("/paypal-transaction-complete", {
                            method: "post",
                            body: JSON.stringify({
                                orderID: data.orderID
                            })
                        }); */
                    }}
                />
                <Button color={'primary'} width={'large'} >PayPal</Button>
            </div>
        </section>

    )

}

export default DateAndPay