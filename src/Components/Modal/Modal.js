import React from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { X, Check, Settings, HelpCircle, Facebook, Instagram, Twitter, LogOut, Clock, Map, MoreVertical } from "react-feather";
import carFront from "../../Images/car-front.svg"
import { Link } from "react-router-dom"
import './Modal.css'

function logOut () {
    localStorage.clear()
}

const ModalComponent = ({
    isShowModal, 
    setIsShowModal,
    content="Content", 
    isShownFooter= true, 
    onCancel, 
    onConfirm,
    isProfile
}) => {

    const onClose = () => {
        setIsShowModal(false);
    }
    if (isProfile) {
        return(
            <Modal className="fixed-bottom" isOpen={isShowModal} unmountOnClose={true} >
            <ModalHeader className="ps-0" closeAriaLabel='Close'>
               <Button onClick={onClose}>
                    <X className="ms-2"color="gray" size={18} />
                </Button>
                <div className="ms-4 modal-user-info d-flex align-items-center">
                    <p className="mb-0">Usuario</p>
                    {/* <div className='container-profile'>
                        <img
                            src='https://picsum.photos/seed/picsum/200/200'
                            alt='user img'
                            className='rounded-circle user-pic'
                        />
                        <MoreVertical className='more' />
                    </div> */}
                </div>
            </ ModalHeader>
            <ModalBody className="profile-body">
                <div className="profile-buttons-container d-flex justify-content-around">
                    <div className="d-flex align-items-center justify-content-center flex-column profile-button-container">
                        <Link to="/myVehicles">
                            <div className="profile-button">
                                <img className="profile-car" src={carFront} alt="" />
                            </div>
                        </Link>
                        <p className="button-info">Mis Vehículos</p>
                    </div>
                    <div className="d-flex align-items-center flex-column profile-button-container">
                        <div className="profile-button">
                            <Map color="#036" strokeWidth={1.2}size={60} />
                        </div>
                        <p className="button-info">Mis Ubicaciones</p>
                    </div>
                </div>
                <Link className="link-profile" to="/serviceHistory">
                    <div className="profile-button history button-info">
                        <Clock className="me-4" color="#036" size={30} /> Historial de Servicios
                    </div>
                </Link>
                
            </ModalBody>
            <ModalFooter className="footer-profile border-top">
                <ul className="profile-settings ms-4 mt-4 ps-0 mb-4">
                    <li>
                        <Settings color="#036" size={21}/> Configuración
                    </li>
                    <li>
                        <HelpCircle color="#036" size={21} /> Ayuda
                    </li>
                </ul>
                <div className="mx-4 profile-social d-flex pt-4">
                    <ul className="ps-0 d-flex">
                        <Facebook color="#036" className="me-1" />
                        <Instagram color="#036" className="me-2" />
                        <Twitter color="#036" />
                    </ul>
                    <a href="/login" onClick={logOut}>Cerrar sesión <LogOut color="#036" className="ms-2" /></a>
                </div>
            </ModalFooter>
       </Modal>
        )
    }
    return(
       <Modal className="fixed-bottom" isOpen={isShowModal} unmountOnClose={true} >
            <ModalHeader closeAriaLabel='Close'>
               <Button onClick={onClose}>
                    <X color="gray" size={18} />
                </Button>
            </ ModalHeader>
            <ModalBody>{content}</ModalBody>
            {isShownFooter && (<ModalFooter>
                <Button 
                    className="rounded-circle d-flex align-items-center justify-content-center button-cancel" 
                    onClick={onCancel}>
                        <X color="white" />
                </Button>
                <Button className="rounded-circle d-flex align-items-center justify-content-center button-confirm" onClick={onConfirm}>
                    <Check color="#f3f3f3" size={22} />
                </Button>
            </ModalFooter>)}
       </Modal>
    )
}

export default ModalComponent