import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import {Navigate} from 'react-router-dom'
import "./Historial.css"
import CardHistory from "../../Components/CardHistory/CardHistory"

function Historial() {



  let token = localStorage.getItem('token');
  
      if (!token) {
          return <Navigate to="/login" replace />;
      }

  return(
    <div className="bgimg-1">
      <NavBar />
      <section className='mx-4'>
        <h1 className="title">Historial de servicios</h1>
        <CardHistory
          service="Premium"
          brand="VW" 
          model="2015"
          location="San Gabriel, 248"
          date="12/04/2022"
          time="14:23" />
      </section>
    </div>
    )
}

export default Historial