import React from 'react';
import styled from 'styled-components';
import Dissertation from './Dissertation';
import LogoTitle from './LogoTitle';

const Container = styled.div`
  padding: 0 10px;
`;

const Education = (props) => {
  return (
    <Container>
      <LogoTitle
        image_src={props.data.logo}
        image_alt={props.data.logo}
        title={`${props.data.type} - ${props.data.institution}`}
      />
      <p>
        {props.data.startYear} - {props.data.endYear ? props.data.endYear : 'Current'}
      </p>
      <p>
        {props.data.country} - {props.data.city}
      </p>
      <p>{props.data.field}</p>
      <p>
        Final Mark: {props.data.finalMark} / {props.data.maximumFinalMark}{' '}
        {props.data.honors ? 'with honors' : undefined}
      </p>

      {props.data.dissertation ? (
        <Dissertation
          title={props.data.dissertation.title}
          supervisor={props.data.dissertation.supervisor}
        />
      ) : undefined}
    </Container>
  );
};

export default Education;
