import React from "react";

const Dissertation = (props) => {
  return (
    <>
      <h5>Dissertation:</h5>
      <div style={{ paddingLeft: "5px" }}>
        <p>Title: {props.title}</p>
        <p>Supervisor: {props.supervisor}</p>
      </div>
    </>
  );
};

export default Dissertation;
