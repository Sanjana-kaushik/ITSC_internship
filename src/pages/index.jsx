import React from 'react';
import ReactPlayer from 'react-player';
import FancyDiv from '../components/FancyDiv';
import Schedule from '../assets/images/Schedule.jpg';

const IndexPage = () =>
  <div className="default-content">
    <div className="content">
      <div>
        <ReactPlayer
          url="https://youtu.be/JhHycQeCMTk"
        />
      </div>
      <FancyDiv>
        <div style={{ textAlign: `center` }}>
          <h1>
            Welcome to React-Static <br />
          </h1>
          <p>
            Start Here
          </p>
        </div>
      </FancyDiv>
      <div class="container">
            </div>
    </div>
  </div>;

export default IndexPage;
