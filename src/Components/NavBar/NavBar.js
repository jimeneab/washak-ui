import React from "react";
import "./NavBar.css"
import { ArrowLeft, MoreVertical } from "react-feather";

function NavBar() {
return (
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
)
}

export default NavBar