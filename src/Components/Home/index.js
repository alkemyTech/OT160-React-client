import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import NewsList from '../News/NewsList';
import Testimonials from '../Testimonials/TestimonialsDisplay';
import PublicHeader from "../Header/PublicHeader";
import './index.css';

function Home() {
  return (
    <div>
    <PublicHeader />
    <div className="mt-3 container-xxl">
      <Col>
        <Row>
          <div className="w-100">
            <h1 className="main-title text-center">Bienvenido a Somos Mas</h1>
          </div>
        </Row>
        <Row>
          <div className="text-center mt-3 mb-3 container-xl">
            <p className="section-title">Ultimas Novedades</p>
            <div className="row justify-content-center">
              <NewsList />
            </div>
          </div>
        </Row>
        <Row>
          <div className="text-center mt-3 mb-3 container-xl">
            <p className="section-title">Testimonios</p>
            <div className="row justify-content-center">
              <Testimonials />
            </div>
          </div>
        </Row>
      </Col>
    </div>
    </div>
  );
}

export default Home;
