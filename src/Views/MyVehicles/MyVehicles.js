import React, { useState } from "react";
import "./MyVehicles.css";
import {Navigate} from 'react-router-dom'
import CardVehicles from "../../Components/CardVehicles/CardVehicles";
import NavBar from "../../Components/NavBar/NavBar";
import Button from "../../Components/Button/Button"

function MyVehicles(props) {

  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
    console.log(token)
    console.log(user)

    // if (!token) {
    //     return <Navigate to="/login" replace />;
    // }

    // const getVehicles = () => {
    //   axios.get(`localhost:4000/cars/${}`, {
    //     params: {
    //       marca,
    //       modelo,
    //       color,
    //       placa
    //     }
    //   })
    // }


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
      <Button color="primary" width="large">Añadir</Button>
    </div>
  );
}

export default MyVehicles;
