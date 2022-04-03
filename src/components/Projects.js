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
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              {Object.keys(project.links).length === 0 ? undefined : (
                <h5>Link(s):</h5>
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
              <h5>Technologies:</h5>
              <Skills skills={project.technologies} />
            </div>
          );
        })}
      </Container>
    </ContainerContainer>
  );
};

export default Projects;
