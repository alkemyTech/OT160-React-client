import React from 'react';
import {Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css" ;
import '../CardListStyles.css';

const ActivitiesList = () => {
    const activitiesMock = [
        {id: 2, name: 'Titulo de prueba', description: 'Descripcion de prueba'},
        {id: 1, name: 'Titulo de prueba', description: 'Descripcion de prueba'},
        {id: 3, name: 'Titulo de prueba', description: 'Descripcion de prueba'}
    ];

    return (
        <div>
            <h1>Listado Actividades</h1>
            <ul className="list-container">
                {activitiesMock.length > 0 ?
                    activitiesMock.map((activity) => {
                        return(
                            <li className="card-info" key={activity.id}>
                                <h3>{activity.name}</h3>
                                <p>{activity.description}</p>
                            </li>
                        )
                    })
                :
                    <p>No hay actividades</p>
                }
            </ul>
            <div className='container-xl mt-4'>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>CreateAt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button>Editar</button></td>
                    <td><button>Eliminar</button></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
</Table>
            </div>
        </div>
    );
}
 
export default ActivitiesList;