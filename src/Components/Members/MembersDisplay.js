import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { getMembers } from '../../Services/membersService';
import './members.css';

function memberCard(memberDetails) {
  const { name, image, description, facebookUrl, linkedinUrl } = memberDetails;

  return (
    <Card style={{ width: '13.5rem', textAlign: 'center' }}>
      <Card.Img
        variant="top"
        src={image}
        style={{ width: '100%', height: 'auto' }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Link href={facebookUrl}>Facebook</Card.Link>
        <Card.Link href={linkedinUrl}>Linkedin</Card.Link>
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
    const members = await getMembers();
    setMembers(members);
  }

  return (
    <div className="membersGrid">
      {members.length ? (
        members.map((member) => memberCard(member))
      ) : (
        <p>Miembros no disponibles.</p>
      )}
    </div>
  );
}

export default MembersDisplay;
