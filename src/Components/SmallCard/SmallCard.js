import React from "react"
import jeep from "../../Images/jeep-min.svg"
import "./SmallCard.css"

function SmallCard({ type, brand, model }){
  return(
    <div className="small-card me-4">
      <p className="small-info">
        {brand} • {model}
      </p>
      <img src={jeep} alt="tipo de vehículo" className="small-img" />
    </div>
  )
}

export default SmallCard