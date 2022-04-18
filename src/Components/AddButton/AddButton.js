import React from "react"
import { MapPin, Plus } from "react-feather"
import carFront from "../../Images/car-front.svg"
import "./AddButton.css"
import { Link } from "react-router-dom";

function AddButton(props) {
  const { type } = props
  
  return (
    <div className="add-button position-relative d-flex flex-column align-items-center">
      <Link to={type == "vehicle" ? "/registerCar" : "/"}> 
        <div className="add-img">
          {type == "vehicle" ? <img src={carFront} className="front-car" /> : <MapPin stroke-width="1.5" size={40}color="#003366" />}
        </div>
        <div className="add-plus rounded-circle">
          <Plus color="#f3f3f3"/>
        </div>
      </Link>
      <p className="add-info">{type == "vehicle" ? "Añade un vehículo" : "Añade una ubicación"}</p>
    </div>
  )
}

export default AddButton