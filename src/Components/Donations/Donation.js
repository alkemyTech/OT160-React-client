import React from "react";
import DonationCard from "./DonationCard";
import {CardGroup } from "react-bootstrap";

export default function Donation({ text }) {
  return (
    <div>
      <h1>{text}</h1>

      <CardGroup className="d-flex justify-content-center align-items-center flex-wrap">
        <DonationCard
          title="150$"
          donationAmount="150"
          mercadoPagoLink="https://mpago.la/2bpoEde"
        />
        <DonationCard
          title="350$"
          donationAmount="350"
          mercadoPagoLink="https://mpago.la/1HhewKF"
        />
        <DonationCard
          title="500$"
          donationAmount="500"
          mercadoPagoLink="https://mpago.la/2iAGRdd"
        />
      </CardGroup>
    </div>
  );
}
