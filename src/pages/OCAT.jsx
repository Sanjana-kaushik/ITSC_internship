import React from 'react';
import { Fragment } from 'react';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import ReactPlayer from 'react-player';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';
import student3 from '../assets/images/photo3.jpg';
import logophoto from '../assets/images/logoocat.jpg';

const OCAT = () => {
  const { ocat } = useRouteData();
  return (
  <div className="default-content">
    <div className="content">
      <div>
        <ReactPlayer
          url="https://youtu.be/XXGG39bHQi4"
        />
      </div>
      <h1>OCAT project</h1>
    </div>
    <Fragment>
      <Row>
        <Col xl="4" lg="6">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={logophoto} />
            <CardBody>
              <h5 className="card-title font-weight-bold font-size-lg">
                Project Display
              </h5>
              <p className="card-text">
                Description of the project
              </p>
                {ocat.map(ocat =>
                  <li key={ocat.id}>
                    <Link to={`/OCAT/ocat/${ocat.id}/`}>{ocat.title}</Link>
                  </li>)}
            </CardBody>
          </Card>
        </Col>
        <Col xl="4" lg="6">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={student3} />
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
          url="https://youtu.be/XXGG39bHQi4"
        />
      </div>

    </div>
  );
};

export default OCAT;
