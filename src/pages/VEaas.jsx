import React from 'react';
import { Fragment } from 'react';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import sk from '../assets/images/Sk.jpg';
import dream from '../assets/images/dream.jpg';

const VE = () =>
  <div className="default-content">
    <div className="content">
      <h1>Virtual Event as a Service</h1>
    </div>
    <Fragment>
      <Row>
        <Col xl="4" lg="6">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={dream} />
            <CardBody>
              <h5 className="card-title font-weight-bold font-size-lg">
                Project Display
              </h5>
              <p className="card-text">
                Description of the project
              </p>
              <Button
                tag="a"
                color="primary"
                href="#/"
                onClick={e => e.preventDefault()}>
                Click to learn more
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xl="4" lg="6">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={sk} />
            <CardBody>
              <h5 className="card-title font-weight-bold font-size-lg">
                Project creator
              </h5>
              <p className="card-text">
                Bio of the project creator
              </p>
              <Button
                tag="a"
                color="primary"
                href="#/"
                onClick={e => e.preventDefault()}>
                Go somewhere
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xl="4" className="d-none d-xl-block" />
      </Row>
    </Fragment>
  </div>;

export default VE;
