import React from 'react';
import { H3 } from './headers';

const Dissertation = (props) => {
  return (
    <>
      <H3>Dissertation:</H3>
      <div style={{ paddingLeft: '5px' }}>
        <p>Title: {props.title}</p>
        <p>Supervisor: {props.supervisor}</p>
      </div>
    </>
  );
};

export default Dissertation;
