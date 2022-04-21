import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./MyVehicles.css";
import {useNavigate, Link} from 'react-router-dom'
import CardVehicles from "../../Components/CardVehicles/CardVehicles";
import NavBar from "../../Components/NavBar/NavBar";
import Button from "../../Components/Button/Button"

function MyVehicles() {
  
  const [carData, setCarData] = useState()
  
  const navigate = useNavigate()
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('user')
    axios.get(`http://localhost:4000/cars/cars/${userId}`)
      .then(res => {
        setCarData(res.data.allCars)
      })
      .catch(e =>{
        console.error(e)
      })

    const redirectFunction = () => navigate('/login')

    if (!token) {
        redirectFunction()
    }
}, [navigate])


  return (
    <div className='bgimg-1 px-4'>
      <NavBar />
      <section>
        <h1 className='title'>Mis Vehículos</h1>
        {carData  && carData.map((car, index) => {
          console.log(car)
          const {marca, modelo, placa, color} = car
            return(
                <CardVehicles
                carId={car._id}
                key={index}
                brand={marca}
                model={modelo}
                color={color}
                licensePlate={placa} />
              )
          })}
      </section>
      <Link to="/registerCar"><Button color="primary" width="large" >Añadir</Button></Link>
    </div>
  );
}

export default MyVehicles;
