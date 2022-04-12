import React from "react";
import { ArrowLeft, MoreVertical } from "react-feather";
import "./MyVehicles.css";
import CardVehicles from "../../Components/CardVehicles/CardVehicles";

function MyVehicles() {
  return (
    <div className='container-principal'>
      <nav>
        <ArrowLeft className="ms-3" />
        <div className='container-profile'>
          <img
            src='https://picsum.photos/seed/picsum/200/200'
            alt='user img'
            className='rounded-circle user-pic'
          />
          <MoreVertical className='more' />
        </div>
      </nav>
      <section className='ms-3 me-3'>
        <h1 className='title'>Mis Vehículos</h1>
        <CardVehicles 
          brand='VW'
          model='2015'
          color='Negro'/>
      </section>
    </div>
  );
}

export default MyVehicles;
