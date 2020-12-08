import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';

const OCAT = () => {
  const { ocat } = useRouteData();

  return (
    <div className="default-content">
      <div className="content">
        <Link to="/OCAT/">{`<`} Back</Link>
        <br />
        <h3>{ocat.title}</h3>
        <p>{ocat.body}</p>
      </div>
    </div>
  );
};

export default OCAT;
