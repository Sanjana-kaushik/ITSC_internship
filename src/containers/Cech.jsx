import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';

const CECH = () => {
  const { cech } = useRouteData();

  return (
    <div className="default-content">
      <div className="content">
        <Link to="/CECH/">{`<`} Back</Link>
        <br />
        <h3>{cech.title}</h3>
        <p>{cech.body}</p>
      </div>
    </div>
  );
};

export default CECH;
