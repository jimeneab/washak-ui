import { React, useState, useRef, useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import {Navigate} from 'react-router-dom'
import SmallCard from "../../Components/SmallCard/SmallCard";
import { motion } from "framer-motion"
import "./home.css"
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import Button from "../../Components/Button/Button"

const Home = () => {

  //vehicles cards 
  const smallCards = Array(4).fill(1)
  const [widthVehicles, setWidthVehicles] = useState(0)
  const sliderVehicles = useRef()


  //services cards 
  const [widthServices, setWidthServices] = useState(0)
  const sliderServices = useRef()
  
  
  useEffect(() => {
    setWidthVehicles(sliderVehicles.current.scrollWidth - sliderVehicles.current.offsetWidth)
    setWidthServices(sliderServices.current.scrollWidth - sliderVehicles.current.offsetWidth)
    let token = localStorage.getItem('token');
        console.log(token)
    
        if (!token) {
            return <Navigate to="/login" replace />;
        }
  }, [])
  

  return(
    <div className="bgimg-1">
      <NavBar isHome="true"/>        
      <section className="user-vehicles">
        <h2 className="subtitle ms-4">Elige uno de tus vehículos</h2>
        <motion.div ref={sliderVehicles} className="slider-container ps-4">
          <motion.div className="slider-vehicles d-flex" drag="x" dragConstraints={{right: 0, left: -(widthVehicles + 20)}}>
            {smallCards.map((_, index) => 
              <SmallCard key={index} />
            )}
          </motion.div>
        </motion.div>
        <h2 className="subtitle ms-4">Elige el tipo de servicio</h2>
      </section>
      <section className="services">
        <motion.div ref={sliderServices} className="slider-container ps-4">
          <motion.div className="slider-vehicles d-flex" drag="x" dragConstraints={{right: 0, left: -(widthServices + 18)}}>
            <ServiceCard image="express" type="EXPRESS" price="$90.00" />
            <ServiceCard image="interior" type="COMPLETE" price="$150.00" />
            <ServiceCard image="premium" type="PREMIUM" price="$220.00"/>
          </motion.div>
        </motion.div>
      </section>
      <div className="button-container px-4">
        <Button color="primary" width="large">Siguiente</Button>
      </div>
    </div>
  )
}

export default Home