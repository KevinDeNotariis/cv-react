import React from "react";
import HTMLReactParser from "html-react-parser";
import SectionName from "./SectionName";

const AboutMe = (props) => {
  return (
    <>
      <SectionName>About Me</SectionName>
      <div style={{ whiteSpace: "pre-wrap", textAlign: "justify" }}>
        {HTMLReactParser(props.description)}
      </div>
    </>
  );
};

export default AboutMe;
