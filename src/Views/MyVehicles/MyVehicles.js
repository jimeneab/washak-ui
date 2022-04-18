import React, { useState } from "react";
import axios from 'axios';
import "./MyVehicles.css";
import {Navigate} from 'react-router-dom'
import CardVehicles from "../../Components/CardVehicles/CardVehicles";
import NavBar from "../../Components/NavBar/NavBar";
import Button from "../../Components/Button/Button"

function MyVehicles(props) {
  
  
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('user')
  console.log(token)
  console.log(userId)
  
  if (!token) {
      return <Navigate to="/login" replace />;
  }

    const getVehicles = () => {
      axios.get(`http://localhost:4000/cars/cars/${userId}`)
      .then(res => {
        console.log(res)
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
        {/* <CardVehicles
          brand={brand}
          model={model}
          color={color} />

        {myVehicles.map((vehicle, index) => {
          return <CardVehicles
            key={index}
            model={vehicle.model}
            brand={vehicle.brand}
            color={vehicle.color}
          />
        })} */}
      </section>
      <Button color="primary" width="large" onClick={() => getVehicles()}>Añadir</Button>
    </div>
  );
}

export default MyVehicles;
