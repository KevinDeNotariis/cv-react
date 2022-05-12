import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(3, 1fr);
`;

const Skill = styled.div`
  padding: 2px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #0353a4;
  border-radius: 20px;
  font-weight: 600;
  background-color: #b9d6f2;
  font-size: 13px;
  text-align: center;
`;

const Skills = (props) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Container>
          {props.skills.map((elem, key) => (
            <Skill key={key}>{elem}</Skill>
          ))}
        </Container>
      </div>
    </>
  );
};

export default Skills;
