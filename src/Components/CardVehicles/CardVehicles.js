import React, { useState } from "react";
import "./CardVehicles.css";
import jeep from "../../Images/jeep-min.svg";
import { MoreVertical } from "react-feather";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

function CardVehicles({ brand, model, color, licensePlate }) {
  const [dropdown, setDropdown] = useState(false);

  const openDropdown = () => {
    setDropdown(!dropdown);
  };

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
            <MoreVertical color='black' />
          </DropdownToggle>
          <DropdownMenu className='card-dmenu'>
            <DropdownItem>Editar</DropdownItem>
            <hr />
            <DropdownItem>Eliminar</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}

export default CardVehicles;
