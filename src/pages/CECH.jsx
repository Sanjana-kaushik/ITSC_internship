import React from 'react';
import { Fragment } from 'react';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import ReactPlayer from 'react-player';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';
import student2 from '../assets/images/photo2.jpg';
import logocech from '../assets/images/logocech.jpg';

const CECH = () => {
  const { cech } = useRouteData();
  return (
  <div className="default-content">
    <div className="content">
      <div>
        <ReactPlayer
          url="https://youtu.be/p1IChPfD2-s"
        />
      </div>
      <h1>CECH Web page</h1>
    </div>
    <Fragment>
      <Row>
        <Col xl="4" lg="6">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={logocech} />
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
            <img alt="..." className="card-img-top" src={student2} />
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
      <div>
        <ReactPlayer
          url="https://youtu.be/p1IChPfD2-s"
        />
      </div>

    </div>
  );
};

export default CECH;
