import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Pdfcontainer from './Pdfcontainer';
import "./modal.scss"

export function Terms({ showErrorTermins }) {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const handleAceptTerims = () => {
        setShowModal(false);
       showErrorTermins(false);
    }

    const handleCancelTermins = ()=>{
        setShowModal(false);
        showErrorTermins(true);
    }
   
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Terminos y condiciones
            </Button>
            <Modal size="lg" show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Términos y condiciones</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <Pdfcontainer/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancelTermins}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleAceptTerims}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
