import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';

export default function AlertDismissibleExample({ message }) {

    const [show, setShow] = useState(true);

    return (

        <>
            { show && (
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>

                    <Alert.Heading> { message } </Alert.Heading>
                    
                </Alert>)
            }
        </>
    );
}


