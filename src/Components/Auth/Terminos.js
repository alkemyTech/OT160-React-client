import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Pdfcontainer from './Pdfcontainer';
import "./modal.scss"


export function Terminos({ showErrorTermins }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAceptTerims = () => {
       setShow(false);
       showErrorTermins(false);
    }

    const handleCancelTermins = ()=>{
        setShow(false);
        showErrorTermins(true);
    }
   
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Terminos y condiciones
            </Button>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
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
