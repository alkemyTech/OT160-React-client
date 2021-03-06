import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Stack, Button } from "react-bootstrap/";

const usersMock = [
  {
    name: "username1",
    email: "username1@username.com",
  },
  {
    name: "username2",
    email: "username2@username.com",
  },
  {
    name: "username3",
    email: "username3@username.com",
  },
  {
    name: "username4",
    email: "username4@username.com",
  },
];

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersList();
  }, []);

  async function getUsersList() {
    try {
      const users = usersMock; // @todo: implement service to request the users list
      setUsers(users || []);
    } catch (e) {
      console.log(e); // @todo: error handling implementation
    }
  }

  function tableRowForUser(userDetails) {
    const { name, email } = userDetails;

    return (
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <Button size="sm" onClick={() => deleteUser(userDetails)}>
            BORRAR
          </Button>
        </td>
        <td>
          <Button size="sm" onClick={() => editUser(userDetails)}>
            EDITAR
          </Button>
        </td>
      </tr>
    );
  }

  function displayRowsForAllUsers(users) {
    return users?.map((user) => {
      return tableRowForUser(user);
    });
  }

  function deleteUser(user) {
    // @todo: implement function
  }

  function editUser(user) {
    // @todo: implement function
  }

  return (
    <Stack gap={3} className="align-items-center mt-5">
      <Link to="/backoffice/users/create">Nuevo usuario</Link>
      <Table striped bordered hover size="md" responsive>
        <tbody>{displayRowsForAllUsers(users)}</tbody>
      </Table>
    </Stack>
  );
}

export default UsersList;
