import React, { useState } from "react";
import axios from 'axios';
import "./MyVehicles.css";
import {Navigate} from 'react-router-dom'
import CardVehicles from "../../Components/CardVehicles/CardVehicles";
import NavBar from "../../Components/NavBar/NavBar";
import Button from "../../Components/Button/Button"

function MyVehicles() {
  
  const [carData, setCarData] = useState()
  
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('user')
  // console.log(token)
  // console.log(userId)
  
  if (!token) {
      return <Navigate to="/login" replace />;
  }

    const getVehicles = () => {
      axios.get(`http://localhost:4000/cars/cars/${userId}`)
      .then(res => {
        setCarData(res.data.allCars)
      })
      .catch(e =>{
        console.error(e)
      })
    }


  return (
    <div className='bgimg-1 px-4'>
      <NavBar />
      <section>
        <h1 className='title'>Mis Vehículos</h1>
        {carData  && carData.map((car, index) => {
          const {marca, modelo, placa, color} = car
            return(
                <CardVehicles
                key={index}
                brand={marca}
                model={modelo}
                color={color}
                licensePlate={placa} />
              )
          })}
      </section>
      <Button color="primary" width="large" onClick={() => getVehicles()}>Añadir</Button>
    </div>
  );
}

export default MyVehicles;
