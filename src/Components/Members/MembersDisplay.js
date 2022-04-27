import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { getMembers } from '../../Services/membersService';
import './members.css';

function memberCard(memberDetails) {
  const { name, image, description, facebookUrl, linkedinUrl } = memberDetails;

  return (
    <Card style={{ width: '200px', textAlign: 'center' }}>
      <Card.Img
        variant="top"
        src={image}
        style={{
          width: '100%',
          height: '180px',
          objectFit: 'contain',
        }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
        <Card.Link href={`https://${facebookUrl}`}>Facebook</Card.Link>
        <Card.Link href={`https://${linkedinUrl}`}>Linkedin</Card.Link>
      </Card.Body>
    </Card>
  );
}

function MembersDisplay() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembersList();
  }, []);

  async function getMembersList() {
    const { data } = await getMembers();
    setMembers(data);
  }

  return (
    <div className="membersGrid p-3">
      {members.length ? (
        members.map((member) => memberCard(member))
      ) : (
        <p>Miembros no disponibles.</p>
      )}
    </div>
  );
}

export default MembersDisplay;
