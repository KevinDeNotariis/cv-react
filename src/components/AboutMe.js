import React from "react";
import SectionName from "./SectionName";
import MarkdownParse from "./MarkdownParse.js";

const AboutMe = (props) => {
  return (
    <>
      <SectionName>About Me</SectionName>
      <div style={{ textAlign: "justify" }}>
        <MarkdownParse>
          {props.description}
        </MarkdownParse>
      </div>
    </>
  );
};

export default AboutMe;
