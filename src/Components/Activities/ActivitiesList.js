import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {
  showActivities,
  updateActivity,
  deleteActivity,
} from '../../Services/activitiesService';
const ActivitiesList = () => {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    getDataActivities();
  }, []);

  function getDataActivities() {
    //aqui deberia llamarse al endpoind de listado de actividades
    setDataTable(showActivities());
  }

  function handleEditTable(element) {
    updateActivity(element.id, element);
  }
  function handleDeleteTable(id) {
    deleteActivity(id);
  }

  return (
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
              <th>CreateAt</th>
              <th>Accions</th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((element) => (
              <tr>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.image}</td>
                <td>{element.createdAt}</td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={handleEditTable(element)}
                  >
                    Editar
                  </button>
                  {"  "}
                  <button
                    className="btn btn-danger"
                    onClick={handleDeleteTable(element.id)}
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
  );
};

export default ActivitiesList;
