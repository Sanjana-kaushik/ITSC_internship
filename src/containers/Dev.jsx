import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';

const Devops = () => {
  const { dev } = useRouteData();

  return (
    <div className="default-content">
      <div className="content">
        <Link to="/DevOps/">{`<`} Back</Link>
        <br />
        <h3>{dev.title}</h3>
        <p>{dev.body}</p>
      </div>
    </div>
  );
};

export default Devops;
