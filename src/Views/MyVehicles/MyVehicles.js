import React from "react";
import "./MyVehicles.css";
import CardVehicles from "../../Components/CardVehicles/CardVehicles";
import NavBar from "../../Components/NavBar/NavBar";

function MyVehicles() {
  return (
    <div className='container-principal'>
      <NavBar />
      <section className='ms-3 me-3'>
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
