import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ActivitiesList = () => {
  const activitiesMock = [
    {
      id: 1,
      name: "Titulo de prueba",
      image: "Descripcion de prueba",
      createdAt: "Descripcion de prueba",
    },
    {
      id: 2,
      name: "Titulo de prueba",
      image: "Descripcion de prueba",
      createdAt: "Descripcion de prueba",
    },
    {
      id: 3,
      name: "Titulo de prueba",
      image: "Descripcion de prueba",
      createdAt: "Descripcion de prueba",
    },
  ];

  const [dataTable, setDataTable] = useState(activitiesMock);

  return (
    <div className="mt-2 container-xxl">
      <h1 className="text-center">Listado Actividades</h1>
      <div className="container-xl mt-4">
        <Button className="btn-success">Nueva Actividad</Button>
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
                  <button className="btn btn-secondary">Editar</button>
                  {"  "}
                  <button className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal>
            <ModalHeader>
                <div>
                    <h3>Editar Actividad</h3>
                </div>
            </ModalHeader>
            <ModalBody>
               <FormGroup>
                   <label>Id:</label>
                   <input className="form-control" readOnly type="text"/>
               </FormGroup>
               <FormGroup>
                   <label>Name</label>
                   <input className="form-control" readOnly type="text"/>
               </FormGroup>
               <FormGroup>
                   <label>Image</label>
                   <input className="form-control" readOnly type="text"/>
               </FormGroup>
               <FormGroup>
                   <label>CreatedAt</label>
                   <input className="form-control" readOnly type="text"/>
               </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Confirmar</Button>
                <Button color="danger">Cancelar</Button>
            </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default ActivitiesList;
