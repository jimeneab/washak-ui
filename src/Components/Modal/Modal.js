import React from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import './Modal.css'

const ModalComponent = ({
    isShowModal, 
    setIsShowModal,
    content="Content", 
    isShownFooter= true, 
    onCancel, 
    onConfirm
}) => {

    const onClose = () => {
        setIsShowModal(false);
    }

    return(
       <Modal isOpen={isShowModal} unmountOnClose={true} >
           <ModalHeader closeAriaLabel='Close'><Button onClick={onClose}>X</Button></ ModalHeader>
           <ModalBody>{content}</ModalBody>
            {isShownFooter && (<ModalFooter>
                <Button className="rounded-circle button-cancel" onClick={onCancel}>Cancelar</Button>
                <Button className="button-confirm" onClick={onConfirm}>Confirmar</Button>
            </ModalFooter>)}
       </Modal>
    )
}

export default ModalComponent