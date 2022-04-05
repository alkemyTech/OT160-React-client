import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function index() {
  return (
    <div className="my-3 container-fluid">
      <Col>
        <Row>
          <div className="w-100 text-center">
            <h1 className="fs-1 text-center">Bienvenido a Somos Mas</h1>
          </div>
        </Row>
        <Row>
          <div className='text-center placeholder-glow"'>
            <p className="fs-3">Ultimas Novedades</p>
            <div className="card">
            <p class="placeholder-wave">
                <span class="placeholder col-12">esto es un placeholder</span>
            </p>
            </div>
          </div>
        </Row>
        <Row></Row>
      </Col>
    </div>
  );
}

export default index;
