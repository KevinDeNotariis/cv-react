import React from 'react';
import WorkExperience from './WorkExperience';
import HorizontalLine from './HorizontalLine';
import SectionName from './SectionName';

const WorkExperiences = (props) => {
  return (
    <>
      <SectionName>Work Experience</SectionName>
      {props.workExperience.map((elem, key) => (
        <div key={key}>
          <WorkExperience data={elem} />
          {key === props.workExperience.length - 1 ? undefined : <HorizontalLine />}
        </div>
      ))}
    </>
  );
};

export default WorkExperiences;
