import React from "react";
import "./MyVehicles.css";
import CardVehicles from "../../Components/CardVehicles/CardVehicles";
import NavBar from "../../Components/NavBar/NavBar";

function MyVehicles() {
  return (
    <div className='bgimg-1'>
      <NavBar />
      <section className='mx-4'>
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
    </div>
  );
}

export default MyVehicles;
