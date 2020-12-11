import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';
import { Table } from 'reactstrap';
import logo from '../assets/images/ITExpo.jpg';

const IndexPage = () =>
  <Fragment>
    <div className="default-content">
      <div className="content">

        <div style={{ textAlign: `center` }}>
          <img src={logo} alt='IT Expo' />
          <h2>UC School of Information Technology</h2>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-9">
              <h1>Schedule </h1>

            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="table-responsive-md">
      <Table hover bordered striped className="mb-5">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Time</th>
            <th scope="col">Name</th>
            <th scope="col">Designation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>9:05 AM - 10:00 AM</td>
            <td>Kristi Nelson</td>
            <td>Vice President and Provost - University of Cincinnati</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>10:05 AM - 11:00 AM</td>
            <td>David Adams</td>
            <td>CIO - University of Cincinnati</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>11:05 AM - 12:00 PM</td>
            <td>Hazem Said</td>
            <td>Director and Professor - School of IT</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>12:05 pM - 1:00 PM</td>
            <td>Lawrence Johnson</td>
            <td>Dean and Professor - CECH</td>
          </tr>
        </tbody>
      </Table>
      <div>
        <ReactPlayer
          url="https://youtu.be/ofDJLWwmr_A"
        />
      </div>
    </div>

  </Fragment>;
export default IndexPage;
