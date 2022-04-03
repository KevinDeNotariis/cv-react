import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: justify;
`;

const WorkExperience = (props) => {
  return (
    <Container>
      <p>
        {props.data.startDate} -{" "}
        {props.data.endDate ? props.data.endDate : "current"}
      </p>
      <h4>
        {props.data.company} - {props.data.role} - {props.data.contractType}
      </h4>
      <h5>Description:</h5>
      <p style={{ whiteSpace: "pre-wrap" }}>{props.data.description}</p>
    </Container>
  );
};

export default WorkExperience;
