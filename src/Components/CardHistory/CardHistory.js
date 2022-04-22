import React from "react"
import Crossover from "../Crossover";
import Moto from "../Motorcicle";
import Suv from "../Suv";
import Sedan from "../Sedan";
import Hatchback from "../Hatchback";
import Pickup from "../Pickup";
import Van from "../Van";
import "./CardHistory.css"
import { MapPin, Calendar } from "react-feather"

function CardHistory({ image, service, brand, model, location, date, time }) {
  const getCarType = () => {
    switch(image){
      case 'motocicleta': return <Moto width={80}stroke="#036" />;
      case 'crossover': return <Crossover className="small-img" stroke="#036" />;
      case 'sedan': return <Sedan className="small-img" stroke="#036" />;
      case 'hatchback': return <Hatchback className="small-img" stroke="#036" />;
      case 'suv': return <Suv className="small-img" stroke="#036" />;
      case 'pickup': return <Pickup className="small-img" stroke="#036" />;
      case 'van': return <Van className="small-img" stroke="#036" />;
      default: return <Sedan className="small-img" stroke="#036"/>;
    }
   }

  return (
    <div className="card-history d-flex align-items-center">
      <div className="card-history-img">
          {getCarType()}
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