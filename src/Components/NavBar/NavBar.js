import React from "react";
import "./NavBar.css"
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MoreVertical } from "react-feather";
import reducedLogo from "../../Images/logo-small.svg"

function NavBar({ isHome }) {
const navigate = useNavigate();

return (
<nav>
  {isHome ? 
    <img
      src={reducedLogo}
      alt='reduced washak logo'
      className='ms-3 logo-small'
    /> :
    <ArrowLeft className="ms-3" size={30} color="#003366" onClick={() => navigate(-1)}/>  
    }
  <div className='container-profile'>
    <img
      src='https://picsum.photos/seed/picsum/200/200'
      alt='user img'
      className='rounded-circle user-pic'
    />
    <MoreVertical className='more' />
  </div>
</nav>
)
}

export default NavBar