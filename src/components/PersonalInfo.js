import React from 'react';
import styled from 'styled-components';
import Nationality from './Nationality';
import HorizontalLine from './HorizontalLine';
import UsefulLinks from './UsefulLinks';
import Skills from './Skills';
import { H4 } from './headers';
import MyPhoto from './MyPhoto';

const UsefulLinksGroup = styled.div`
  margin: 10px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20%;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0;
    max-width: 90%;
  }
`;

const AsideHeaders = styled.h4`
  margin-bottom: 0px;
`;

const PersonalInfo = (props) => {
  return (
    <Container>
      <MyPhoto />
      <Nationality nationality={props.data.nationality} />
      <HorizontalLine />
      <AsideHeaders>Birth Date: </AsideHeaders>
      <p>{props.data.birthDate}</p>
      <HorizontalLine />
      <AsideHeaders>Email(s):</AsideHeaders>
      {props.data.email.map((elem, key) => (
        <p key={key}>{elem}</p>
      ))}
      <HorizontalLine />
      <AsideHeaders>Useful Links:</AsideHeaders>
      <UsefulLinksGroup>
        <UsefulLinks usefulLinks={props.data.usefulLinks} />
      </UsefulLinksGroup>
      <HorizontalLine />

      <H4>Skills:</H4>
      <Skills skills={props.data.skills} />
    </Container>
  );
};

export default PersonalInfo;
