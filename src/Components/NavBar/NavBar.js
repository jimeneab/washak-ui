import React from "react";
import "./NavBar.css"
import { ArrowLeft, MoreVertical } from "react-feather";
import reducedLogo from "../../Images/logo-small.svg"

function NavBar({ isHome }) {
return (
<nav>
  {isHome ? 
    <img
      src={reducedLogo}
      alt='reduced washak logo'
      className='ms-3 logo-small'
    /> :
    <ArrowLeft className="ms-3" size={30} color="#003366"/>  
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