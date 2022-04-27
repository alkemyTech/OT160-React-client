import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { getActivities } from '../../Services/activitiesService';
import BackofficeHeader from '../Header/BackofficeHeader';

const ActivitiesList = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getDataActivities();
  }, []);

  async function getDataActivities() {
    const { data } = await getActivities();
    setActivities(data);
  }

  function handleEditTable() {
    //colocar aqui la posterior implementacion del boton editar
  }
  function handleDeteleTable() {
    //colocar aqui la posterior implementacion del boton eliminar
  }

  return (
    <div>
      <BackofficeHeader />
    <div className="mt-2 container-xxl">
      <h1 className="text-center">Listado Actividades</h1>
      <div className="container-xl mt-4">
        <Link to="/backoffice/activities/create">
          <Button className="btn-success mb-1">Nueva Actividad</Button>
        </Link>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>CreatedAt</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities?.map((element) => (
              <tr>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.image}</td>
                <td>{element.created_at.split('T')[0]}</td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={handleEditTable}
                  >
                    Editar
                  </button>
                  {'  '}
                  <button
                    className="btn btn-danger"
                    onClick={handleDeteleTable}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
    </div>
  );
};

export default ActivitiesList;
