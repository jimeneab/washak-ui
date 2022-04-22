import { React, useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import NavBar from "../../Components/NavBar/NavBar"
import Button from "../../Components/Button/Button"
import "./Progress.css";
import axios from 'axios'
import express from "../../Images/express.svg"
import { MapPin, Calendar } from "react-feather"

function Progress({ service, brand, location, date, time }) {

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
    <div className="bgimg-2">
      <NavBar />
      <section className='mx-4'>
        <h1 className='title'>En proceso</h1>
        {
          serviceInfo &&
          serviceInfo.map((service, index) => {
            const { packageWash, marca, place, day, month, hour } = service

            return (
              <div className="card-progress d-flex flex-column justify-content-center align-items-center">
                <img src={express} alt="Imagen coche limpio" className="card-progress-img" />
                <div className="step-progress">
                  {/* step progress bar */}
                </div>
                <div className="card-progress-info">
                  <p>{packageWash}</p>
                  <p>{marca}</p>
                  <div className="info-progress-location d-flex">
                    <MapPin color="#003366" size={20} /><p className="ms-2">{place}</p>
                  </div>
                  <div className="info-progress-date d-flex">
                    <Calendar color="#003366" size={20} /><p className="ms-2">{`${day} ${month}`} • {hour}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
        <Button width="large" color="secondary">Cancelar</Button>
      </section>
    </div>
  )
}

export default Progress