import React, { useState } from "react";
import axios from 'axios';
import "./CardVehicles.css";
import jeep from "../../Images/jeep-min.svg";
import { MoreVertical } from "react-feather";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

function CardVehicles({ brand, model, color, licensePlate, carId }) {
  const [dropdown, setDropdown] = useState(false);
  const token = window.localStorage.getItem('token')
  const config = {headers: {authorization:`${token}`}}

  //Dropdown
  const openDropdown = () => setDropdown(!dropdown);

  //TODO: agregar modal para confirmar eliminar

  const deleteCar = () => {
    axios.delete(`https://washak-api.washak.xyz/cars/${carId}`, config)
    .then(res => {
      window.location.reload()
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className='card-vehicle d-flex flex-column align-items-center'>
      <p className='card-info-brand mt-3'>
        {brand} • {model}
      </p>
      <div className='card-vehicle-img'>
        <img src={jeep} alt='' />
      </div>
      <div className='card-info-color mt-3 d-flex justify-content-between'>
        <p>
          {color} • {licensePlate}
        </p>
        <Dropdown isOpen={dropdown} toggle={openDropdown}>
          <DropdownToggle className='card-dropdown'>
            <MoreVertical color='#003366' />
          </DropdownToggle>
          <DropdownMenu className='card-dmenu'>
            <DropdownItem className="card-ditem">Editar</DropdownItem>
            <hr />
            <DropdownItem className="card-ditem" onClick={deleteCar}>Eliminar</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}

export default CardVehicles;
