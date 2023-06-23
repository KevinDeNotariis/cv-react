import React from 'react';
import { H2 } from './headers';
import styled from 'styled-components';
import * as Logos from './logos';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SubContainer = styled.div``;

const LogoTitle = (props) => {
  return (
    <Container>
      <SubContainer>
        <img
          src={
            props.image_src === 'BolognaLogo'
              ? Logos.BolognaLogo
              : props.image_src === 'majorana'
              ? 'logos/majorana.png'
              : props.image_src === 'alten'
              ? 'logos/alten.png'
              : props.image_src === 'ynap'
              ? 'logos/ynap.png'
              : props.image_src === 'sentia'
              ? 'logos/sentia.png'
              : props.image_src === 'accenture'
              ? 'logos/accenture.png'
              : null
          }
          style={{ width: 100, height: 100 }}
          alt={props.image_alt}
        />
      </SubContainer>
      <SubContainer>
        <H2>{props.title}</H2>
      </SubContainer>
    </Container>
  );
};

export default LogoTitle;
