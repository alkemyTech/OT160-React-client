import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import GetOrganization from '../../Services/getOrganization';


const Organization =()=>{
    const [organization, setOrganization] = useState({});
    

    useEffect(()=>{
        async function  Data (){
            let value = await GetOrganization();
            setOrganization(value.data.data);
        }
        Data();
    },[])
    
    
    
    return(
        <Container fluid>
            <h2 style={styles.title}>{organization.name}</h2> 
            <Card style={styles.containerCard}>
                <Card.Img variant="top" style={styles.img} src={organization.logo} />
                <Card.Body>
                <Card.Text style={{textAlign: 'center'}}>
                    <p dangerouslySetInnerHTML={{__html: organization.short_description}} />
                </Card.Text>
                </Card.Body>
                <NavLink to='/backoffice/organizationEdit'>Editar Organizacion</NavLink>
            </Card>  
        </Container>

    )
}

const styles = {
    img:{
        width: 200, 
        margin: '5px auto'
    },
    containerCard:{
        backgroundColor: '#FAFA88',
        border: '3px solid black'
    },
    title:{
        backgroundColor: '#FAFA88',
        textAlign: 'center',
        paddingBottom: '5px',
        borderBottom: '3px solid black',
    }

}

export default Organization;