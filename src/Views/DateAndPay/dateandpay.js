import axios from 'axios'
import { useEffect, useState } from 'react'
import { Calendar, MapPin, ShoppingCart } from 'react-feather'
import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import NavBar from '../../Components/NavBar/NavBar.js'
import carFront from "../../Images/car-front.svg"
import './dateandpay.css'

const DateAndPay = () => {

    const [serviceInfo, setServiceInfo] = useState()
    const token = localStorage.getItem('token')
    const config = { headers: { authorization: `${token}` } }
    const navigate = useNavigate()

    useEffect(() => {
        const userId = localStorage.getItem('user')
        axios.get(`https://washak-api.washak.xyz/services/byUser/${userId}`, config)
            .then(res => {
                console.log(res.data.allService)
                setServiceInfo(res.data.allService)
            })
            .catch(e => {
                console.error(e)
            })

        const redirectFunction = () => navigate('/login')

        if (!token) {
            redirectFunction()
        }
    }, [navigate])

    return (
        <section className="bgimg-1">
            <NavBar />
            <h2 className="title mx-4">Agenda tu cita</h2>
            {serviceInfo &&
                serviceInfo.map((service, index) => {
                    const { packageWash, marca, placa, place, day, month, hour } = service

                    return (
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
                                <p className='mb-0'><b>Subtotal</b> $90.00</p>
                                <p className='mb-0'><b>IVA</b> $14.40</p>
                                <p className='mb-0'><b>Total</b> $104.40</p>
                            </div>
                        </div>
                    )
                })
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
                <Button color={'primary'} width={'large'} >PayPal</Button>
            </div>
        </section>

    )

}

export default DateAndPay