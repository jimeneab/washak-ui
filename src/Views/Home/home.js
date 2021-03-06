import { React, useState, useRef, useEffect } from "react";
import axios from 'axios';
import NavBar from "../../Components/NavBar/NavBar";
import { useNavigate, Link } from 'react-router-dom'
import SmallCard from "../../Components/SmallCard/SmallCard";
import { motion } from "framer-motion"
import "./home.css"
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import Button from "../../Components/Button/Button"

const Home = () => {
  const [myCars,setMyCars] = useState([])
  const [userId,setUserId] = useState(null)
  const [token, setToken] = useState(null)
  const [current, setCurrent] = useState(null)
  const [selectedCar, setSelectedCar] = useState(null)
  const [currentService, setCurrentService] = useState(null)
  const config = {headers: {authorization:`${token}`}}
  const navigate = useNavigate();
  
  //vehicles cards 
  const [widthVehicles, setWidthVehicles] = useState(0)
  const sliderVehicles = useRef()
  
  
  //services cards 
  const [widthServices, setWidthServices] = useState(0)
  const sliderServices = useRef()
  
  
  
  useEffect(() => {
    const userId = localStorage.getItem('user')
    setUserId(userId)
    const token = localStorage.getItem('token')
    setToken(token)
    const redirectFunction = () => navigate('/login')
    
    const getMyCars = () => {
      axios.get(` https://washak-api.washak.xyz/cars/cars/${userId}`)
      .then(res => {
        if(!res.data.allCars.length){
          console.log(res.data.allCars.length, 'asklnd')
          navigate('/perfil')
        }
        setMyCars(res.data.allCars)
      })
      .catch(e =>{
        console.error(e)
      })
    }


    getMyCars()
    setWidthVehicles(sliderVehicles.current.scrollWidth - sliderVehicles.current.offsetWidth)
    setWidthServices(sliderServices.current.scrollWidth - sliderVehicles.current.offsetWidth)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (!token) {
        redirectFunction()
    }
  }, [navigate])

  const handlerCarCard = (e) => {
    const value = e.target.value
    setCurrent(value)
    axios.get(`https://washak-api.washak.xyz/cars/${value}`)
    .then(res => {
      setSelectedCar(res.data?.cars)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleServiceCard = (e) => {
    const value = e.target.value
    console.log(value)
    setCurrentService(value)
  }

  const saveData = () => {
    axios.post(`https://washak-api.washak.xyz/services/save/${userId}`, {
      vehiculo: selectedCar.vehiculo, 
      marcar: selectedCar.marca,
      modelo: selectedCar.modelo,
      color: selectedCar.color,
      placa: selectedCar.placa,
      packageWash: currentService
    }, config)
    .then(res => {
      console.log(res)
      navigate(`/fecha?serviceId=${res.data.cars._id}`)
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  return(
    <div className="bgimg-1 home">
      <NavBar type="home"/>        
      <section className="user-vehicles">
        <div className="user-vehicles-header">
          <h2 className="subtitle ms-4">Elige uno de tus veh??culos</h2>
        </div>
        <form className="home-vehicles">
          <motion.div ref={sliderVehicles} className="slider-container ps-4">
            <motion.div className="slider-vehicles d-flex" drag="x" dragConstraints={{right: 0, left: -(widthVehicles)}}>
              {myCars.map((car, index) => {
                const {marca, modelo, vehiculo, _id} = car
                return (
                  <motion.div key={index}>
                    <input className={'car-input'} type='radio' value={_id} name='carCard' id={_id} onChange={handlerCarCard} />
                    <label htmlFor={_id}>
                      <SmallCard
                        bgColor={current === _id ? "#036": "#f3f3f3"} 
                        selectedColor = {current === _id ? "#f3f3f3": "#036"} 
                        type={vehiculo}
                        brand={marca}
                        model={modelo}/>
                    </label>
                  </motion.div>
                )
              }
              )}
            </motion.div>
          </motion.div>
          <div className="d-flex justify-content-start ms-4 mb-4">  
            <Link className="link-mvehicles" to='/myVehicles'>Ir a mis veh??culos</Link>
          </div>
        </form>
        <h2 className="subtitle ms-4">Elige el tipo de servicio</h2>
      </section>
      <section className="services">
        <motion.div ref={sliderServices} className="slider-container ps-4">
          <motion.div className="slider-vehicles d-flex" drag="x" dragConstraints={{right: 0, left: -(widthServices + 22)}}>
            <input type='radio' value={"EXPRESS"} name='serviceType' id={"EXPRESS"} onChange={handleServiceCard} />
            <label htmlFor="EXPRESS">
              <ServiceCard image={currentService === 'EXPRESS' ? "expressLight" : "express"} type="EXPRESS" price="$90.00" className={currentService === 'EXPRESS' ? 'selected' : null}/>
            </label>
            <input type='radio' value={"COMPLETE"} name='serviceType' id={"COMPLETE"} onChange={handleServiceCard} />
            <label htmlFor="COMPLETE">
              <ServiceCard image={currentService === 'COMPLETE' ? "interiorLight" : "interior"} type="COMPLETE" price="$150.00" className={currentService === 'COMPLETE' ? 'selected' : null}/>
            </label>
            <input type='radio' value={"PREMIUM"} name='serviceType' id={"PREMIUM"} onChange={handleServiceCard} />
            <label htmlFor="PREMIUM">
              <ServiceCard isPremium="premium" image={currentService === 'PREMIUM' ? "premiumLight" : "premium"} type="PREMIUM" price="$220.00" className={currentService === 'PREMIUM' ? 'selected' : null}/>
            </label>
          </motion.div>
        </motion.div>
      </section>
      <div className="button-container m-4 pb-4">
       <Button color="primary" width="large" onClick={() => saveData()}>Siguiente</Button>
      </div>
    </div>
  )
}

export default Home