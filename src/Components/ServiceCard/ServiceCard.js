import React from "react"
import express from "../../Images/express.svg"
import interior from "../../Images/interior.svg"
import premium from "../../Images/premium.svg"
import premiumLight from "../../Images/premium-light.svg"
import interiorLight from "../../Images/complete-light.svg"
import expressLight from "../../Images/express-light.svg"
import "./ServiceCard.css"

function ServiceCard(props){
  const { type, price, image, className } = props
  const imageConfig = {
    express: express,
    interior: interior,
    premium: premium,
    premiumLight: premiumLight,
    interiorLight: interiorLight,
    expressLight: expressLight
  }

  const textConfig = {
    EXPRESS: "Nuestro servicio más rápido y eficiente, consiste en un lavado de exteriores que requiere poca agua, puede ser sin contacto",
    COMPLETE: "Este servicio incluye lavado de exteriores y detallado de interiores, requeriras en algún momento abrirnos tu auto.",
    PREMIUM: "El servicio más completo que ofrecemos, incluye lavado y encerado de exteriores y detallado de interiores"
  }

  const widthConfig = {
    express: "wide",
    interior: "wide",
    premium: "ultrawide",
    premiumLight: "ultrawide",
    interiorLight: "wide",
    expressLight: "wide"
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
          {textConfig[type]}
        </p>
      </div>
      <div className="service-img">
        <img src={imageConfig[image]} alt="Imagen tipo de servicio" />
      </div>
    </div>
  )
}

export default ServiceCard