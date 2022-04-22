import React from "react"
import {Navigate} from 'react-router-dom'
import NavBar from "../../Components/NavBar/NavBar"
import Button from "../../Components/Button/Button"
import "./Progress.css"
import express from "../../Images/express.svg"
import { MapPin, Calendar } from "react-feather"

function Progress({ service, brand, location, date, time }) {


  let token = localStorage.getItem('token');
  console.log(token)

  if (!token) {
      return <Navigate to="/login" replace />;
  }


  return(
    <div className="bgimg-2">
      <NavBar type="progress" />
      <section className='mx-4'>
        <h1 className='title'>En proceso</h1>
        <div className="card-progress d-flex flex-column justify-content-center align-items-center">
          <img src={express} alt="Imagen coche limpio" className="card-progress-img" />
          <div className="step-progress">
            {/* step progress bar */}
          </div>
          <div className="card-progress-info">
            <p>Premium {service}</p>
            <p>VW {brand}</p>
            <div className="info-progress-location d-flex">
              <MapPin color="#003366" size={20} /><p className="ms-2">San Gabriel{location}</p>
            </div>
            <div className="info-progress-date d-flex">
              <Calendar color="#003366" size={20} /><p className="ms-2">12/04/2022{date} • 17:45{time}</p>
            </div>
          </div>
        </div>
        <Button width="large"color="secondary">Cancelar</Button>
      </section>
    </div>
  )
}

export default Progress