import React from "react"
import "./CardHistory.css"
import { MapPin, Calendar } from "react-feather"
import Crossover from "../Crossover";
import Moto from "../Motorcicle";
import Suv from "../Suv";
import Sedan from "../Sedan";
import Hatchback from "../Hatchback";
import Pickup from "../Pickup";
import Van from "../Van";

function CardHistory({ service, brand, model, location, date, time, vehiculo }) {

const getCarType = () => {
  switch(vehiculo){
    case 'motocicleta': return <Moto stroke={'black'} />;
    case 'crossover': return <Crossover stroke={'black'} />;
    case 'sedan': return <Sedan stroke={'black'} />;
    case 'hatchback': return <Hatchback stroke={'black'} />;
    case 'suv': return <Suv stroke={'black'} />;
    case 'pickup': return <Pickup stroke={'black'} />;
    case 'van': return <Van stroke={'black'} />;
    default: return <Sedan stroke={'black'} />;
  }
 }



  return (
    <div className="card-history d-flex align-items-center">
      <div className="card-history-img">
          <img src={getCarType()} alt="Imagen vehículo" />
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
          <a href="./rateService">Calificar</a>
        </p>
      </div>
    </div>
  )
}

export default CardHistory 