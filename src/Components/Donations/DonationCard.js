import React from 'react';
import { Button, Card } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import './donations.scss';

export default function DonationCard({
  title,
  donationAmount,
  mercadoPagoLink,
}) {
  return (
    <div>
      <Card
        bg="primary"
        text="white"
        className="m-2 card"
      >
        <Card.Img variant="top" src={logo} alt="logo" className="logo" />
        <Card.Body bg="primary">
          <Card.Title>{title}</Card.Title>
          <Card.Text>Toca el boton para hacer la donacion :).</Card.Text>
        </Card.Body>
        <Button
          variant="success"
          size="lg"
          className="m-3"
          href={mercadoPagoLink}
          target="_blank"
        >
          {donationAmount}$
        </Button>
      </Card>
    </div>
  );
}
