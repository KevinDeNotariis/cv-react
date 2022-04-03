import React from "react";
import styled from "styled-components";

const AsideHeaders = styled.h4`
  margin-bottom: 0px;
`;

const FlagContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const FlagGreen = styled.div`
  background-color: rgba(51, 204, 51, 0.3);
`;

const FlagWhite = styled.div`
  background-color: white;
`;

const FlagRed = styled.div`
  background-color: rgba(255, 0, 0, 0.3);
`;

const Nationality = (props) => {
  return (
    <div style={{ height: "100px", position: "relative" }}>
      <div style={{ position: "absolute", paddingLeft: "10px" }}>
        <AsideHeaders>Nationality: </AsideHeaders>
        <p>{props.nationality}</p>
      </div>
      <FlagContainer>
        <FlagGreen />
        <FlagWhite />
        <FlagRed />
      </FlagContainer>
    </div>
  );
};

export default Nationality;
