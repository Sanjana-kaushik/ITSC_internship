import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';

const VirtualService = () => {
  const { virtualservice } = useRouteData();

  return (
    <div className="default-content">
      <div className="content">
        <Link to="/VEaas/">{`<`} Back</Link>
        <br />
        <h3>{virtualservice.title}</h3>
        <p>{virtualservice.body}</p>
      </div>
    </div>
  );
};

export default VirtualService;
