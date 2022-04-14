import React from "react"
import jeep from "../../Images/jeep-min.svg"
import "./CardHistory.css"
import { MapPin, Calendar } from "react-feather"
function CardHistory({ service, brand, model, location, date, time }) {
  return (
    <div className="card-history d-flex align-items-center">
      <div className="card-history-img">
          <img src={jeep} alt="Imagen vehículo" />
      </div>
      <div className="card-history-info">
        <p className="history-brand">{service} • {brand} {model}</p>
        <div className="history-location d-flex align-items-center">
          <MapPin color="#003366" width="20px"/><p className="ms-2">{location}</p>
        </div>
        <div className="history-date d-flex">
          <Calendar color="#003366" width="20px"/><p className="ms-2">{date} {time}</p> 
        </div>
        <p className="calificar mt-2 mb-0">
          <a href="./CardHistory.js">Calificar</a>
        </p>
      </div>
    </div>
  )
}

export default CardHistory 