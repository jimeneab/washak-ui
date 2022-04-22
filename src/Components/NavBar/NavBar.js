import React, { useState } from "react";
import "./NavBar.css"
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MoreVertical, X } from "react-feather";
import reducedLogo from "../../Images/logo-small.svg"
import ModalComponent from "../Modal/Modal";
import avatar from "../../Images/user-avatar.svg"

function NavBar({ type }) {
  const [isShowModal, setIsShowModal] = useState(false)
  const toggleModal = () => setIsShowModal(!isShowModal)
  const navigate = useNavigate();

return (
<nav>
  {type === "home" ?
    <img
      src={reducedLogo}
      alt='reduced washak logo'
      className='ms-3 logo-small'
    /> : type === "progress" ?
          <X className="ms-4"color="#036" size={30} onClick={() => navigate("/home")} /> :
          <ArrowLeft className="ms-3" size={30} color="#003366" onClick={() => navigate(-1)}/>  
    }
  <ModalComponent isProfile={true} isShowModal={isShowModal} setIsShowModal={setIsShowModal}/> 
    <div className='container-profile' onClick={toggleModal}>
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