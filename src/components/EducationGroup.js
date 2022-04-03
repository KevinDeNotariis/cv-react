import React from "react";
import HorizontalLine from "./HorizontalLine";
import Education from "./Education";
import SectionName from "./SectionName";

const EducationGroup = (props) => {
  return (
    <>
      <SectionName>Education</SectionName>
      {props.education.map((elem, key) => (
        <div key={key}>
          <Education data={elem} />
          {key === props.education.length - 1 ? undefined : <HorizontalLine />}
        </div>
      ))}
    </>
  );
};

export default EducationGroup;
