import React, { useState, useEffect } from 'react';
import SectionName from './SectionName';
import MarkdownParse from './MarkdownParse.js';

const AboutMe = (props) => {
  const [description, setDescription] = useState('');

  const getDescription = () => {
    fetch(`markdown/${props.description}.md`)
      .then((res) => res.text())
      .then((obj) => setDescription(obj));
  };

  useEffect(() => {
    getDescription();
  });

  return (
    <>
      <SectionName>About Me</SectionName>
      <div>
        <MarkdownParse>{description}</MarkdownParse>
      </div>
    </>
  );
};

export default AboutMe;
