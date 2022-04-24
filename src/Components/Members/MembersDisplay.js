import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './members.css';

const membersMock = [
  {
    name: 'member 1',
    image:
      'https://img.europapress.es/fotoweb/fotonoticia_20100107193345_420.jpg',
    description:
      'member 1 description member 1 description member 1 description member 1 description',
    facebookUrl: 'member 1 fbURL',
    linkedinUrl: 'member 1 linkedinURl',
  },
  {
    name: 'member 2',
    image:
      'https://img.europapress.es/fotoweb/fotonoticia_20100107193345_420.jpg',
    description:
      'member 2 description member 2 description member 2 description member 2 description',
    facebookUrl: 'member 2 fbURL',
    linkedinUrl: 'member 2 linkedinURl',
  },
  {
    name: 'member 3',
    image:
      'https://img.europapress.es/fotoweb/fotonoticia_20100107193345_420.jpg',
    description:
      'member 3 description member 3 description member 3 description member 3 description',
    facebookUrl: 'member 3 fbURL',
    linkedinUrl: 'member 3 linkedinURl',
  },
  {
    name: 'member 4',
    image:
      'https://img.europapress.es/fotoweb/fotonoticia_20100107193345_420.jpg',
    description:
      'member 4 description member 4 description member 4 description member 4 description',
    facebookUrl: 'member 4 fbURL',
    linkedinUrl: 'member 4 linkedinURl',
  },
  {
    name: 'member 5',
    image:
      'https://img.europapress.es/fotoweb/fotonoticia_20100107193345_420.jpg',
    description:
      'member 5 description member 5 description member 5 description member 5 description',
    facebookUrl: 'member 5 fbURL',
    linkedinUrl: 'member 5 linkedinURl',
  },
];

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
    const members = membersMock; // @todo: getMembers service
    setMembers(members);
  }, []);

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
