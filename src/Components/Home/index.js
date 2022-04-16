import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import Slides from '../Slides/SlidesForm'
import NewsList from "../News/NewsList";

function Home() {
  return (
    <div className="mt-3 container-xxl">
      <Col>
        <Row>
          <div className="w-100">
            <h1 className="fs-1 text-center">Bienvenido a Somos Mas</h1>
          </div>
        </Row>
        <Row>
          <div className='text-center mt-3 mb-3 container-xl'>
            <p className="fs-3">Ultimas Novedades</p>
            <div className="row justify-content-center">
              <NewsList />
            </div>
          </div>
        </Row>
        <Row>
          <div className="text-center mt-3 mb-3 container-xl">
            <p className="fs-3">Slides form</p>
            <div className="row justify-content-center">
                <Slides/>
            </div>
          </div>
        </Row>
      </Col>
    </div>
  );
}

export default Home;
