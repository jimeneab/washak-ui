import React from "react";
import "./MyVehicles.css";
import CardVehicles from "../../Components/CardVehicles/CardVehicles";
import NavBar from "../../Components/NavBar/NavBar";
import Button from "../../Components/Button/Button"

function MyVehicles() {
  return (
    <div className='bgimg-1 px-4'>
      <NavBar />
      <section>
        <h1 className='title'>Mis Vehículos</h1>
        <CardVehicles 
          brand='VW'
          model='2015'
          color='Negro'/>
        <CardVehicles 
          brand='VW'
          model='2015'
          color='Negro'/>
      </section>
      <Button color="primary" width="large">Añadir</Button>
    </div>
  );
}

export default MyVehicles;
