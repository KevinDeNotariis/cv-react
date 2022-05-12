import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MarkdownParse from './MarkdownParse.js';
import LogoTitle from './LogoTitle.js';
import { H3 } from './headers';

const Container = styled.div``;

const WorkExperience = (props) => {
  const [description, setDescription] = useState('');

  const getDescription = () => {
    fetch(`markdown/${props.data.description}.md`)
      .then((res) => res.text())
      .then((obj) => setDescription(obj));
  };

  useEffect(() => {
    getDescription();
  });

  return (
    <Container>
      <LogoTitle
        image_src={props.data.logo}
        image_alt={props.data.logo}
        title={`${props.data.company} - ${props.data.role} - ${props.data.contractType}`}
      />
      <p>
        {props.data.startDate} - {props.data.endDate ? props.data.endDate : 'current'}
      </p>
      <H3>Description:</H3>
      {/* <p style={{ whiteSpace: "pre-wrap" }}> */}
      <MarkdownParse>{description}</MarkdownParse>
      {/* </p> */}
    </Container>
  );
};

export default WorkExperience;
