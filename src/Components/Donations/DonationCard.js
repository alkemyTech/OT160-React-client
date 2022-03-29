import React from 'react';
import { Button, Card } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import './donation.css';
export default function DonationCard({
  title,
  donationAmount,
  mercadoPagoLink,
}) {
  return (
    <div>
      <Card
        style={{ width: "20rem" }}
        bg="primary"
        text="white"
        className="m-2"
      >
        <Card.Img variant="top" src={logo} alt="logo" className="image" />
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
