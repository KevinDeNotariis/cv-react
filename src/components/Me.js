import React from "react";
import styled from "styled-components";
import HorizontalLine from "./HorizontalLine";
import WorkExperiences from "./WorkExperiences";
import AboutMe from "./AboutMe";
import EducationGroup from "./EducationGroup";
import PersonalInfo from "./PersonalInfo";
import {H1, H3} from "./headers"

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const ContentCV = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  max-width: 60%;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0;
    max-width: 90%;
  }
`;

const Header = styled.header`
  width: 80%;
  text-align: center;
  letter-spacing: 7px;
  padding: 10px 50px;
  text-transform: uppercase;
`;

const Me = (props) => {
  return Object.keys(props.data).length === 0 ? (
    <H1>Loading...</H1>
  ) : (
    <Root>
      <Header>
        <H1>{props.data.name}</H1>
        <H3 style={{ letterSpacing: "4px" }}>{props.data.caption}</H3>
        <HorizontalLine />
      </Header>
      <Container>
        <PersonalInfo data={props.data} />
        <ContentCV>
          <AboutMe description={props.data.description} />
          <WorkExperiences workExperience={props.data.workExperience} />
          <EducationGroup education={props.data.education} />
        </ContentCV>
      </Container>
    </Root>
  );
};

export default Me;
