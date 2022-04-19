import React from "react";
import styled from "styled-components";
import Link from "./Link";
import Skills from "./Skills";

const ContainerContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  text-align: justify;
`;

const Projects = (props) => {
  return (
    <ContainerContainer>
      <Container>
        {props.data.map((project, key) => {
          return (
            <div key={key}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              {Object.keys(project.links).length === 0 ? undefined : (
                <h3>Link(s):</h3>
              )}
              {Object.keys(project.links).map((link, key) => {
                return (
                  <Link
                    key={key}
                    style={{ fontSize: "18px" }}
                    target="_blank"
                    rel="noreferrer"
                    href={project.links[link]}
                  >
                    {link}
                  </Link>
                );
              })}
              <h3>Technologies:</h3>
              <Skills skills={project.technologies} />
            </div>
          );
        })}
      </Container>
    </ContainerContainer>
  );
};

export default Projects;
