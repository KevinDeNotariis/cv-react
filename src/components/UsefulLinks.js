import React from "react";
import Link from "./Link";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
`;

const UsefulLinks = (props) => {
  return (
    <Container>
      {Object.keys(props.usefulLinks).map((elem, key) => (
        <Link
          key={key}
          target="_blank"
          rel="noreferrer"
          href={props.usefulLinks[elem]}
        >
          {elem}
        </Link>
      ))}
    </Container>
  );
};

export default UsefulLinks;
