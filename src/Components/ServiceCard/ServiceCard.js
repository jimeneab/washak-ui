import React from "react"
import express from "../../Images/express.svg"
import interior from "../../Images/interior.svg"
import premium from "../../Images/premium.svg"
import "./ServiceCard.css"

function ServiceCard(props){
  const { type, price, info, image, className } = props
  const imageConfig = {
    express: express,
    interior: interior,
    premium: premium
  }

  const widthConfig = {
    express: "wide",
    interior: "wide",
    premium: "ultrawide",
  }  

  const setWidth = (isPremium) => isPremium === "premium" ? widthConfig[isPremium] : widthConfig[isPremium] 

  return(
    <div className={`card-service d-flex align-items-center me-4 ${setWidth(image)} ${className}`}>
      <div className="service-info">
        <p>
          {type}
        </p>
        <p>
          {price}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Vitae, sapiente cumque! Nostrum, itaque magnam! {info}
        </p>
      </div>
      <div className="service-img">
        <img src={imageConfig[image]} alt="Imagen tipo de servicio" />
      </div>
    </div>
  )
}

export default ServiceCard