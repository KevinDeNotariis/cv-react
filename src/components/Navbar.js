import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

const NAV_BUTTON_WIDTH = 120;
const NAV_BUTTON_HEIGHT = 60;
const NUMBER_OF_BUTTONS = 5;

const Nav = styled.nav`
  background-color: #0353a4;
  display: flex;
  height: ${NAV_BUTTON_HEIGHT}px;
  justify-content: center;

  @media only screen and (max-width: ${NAV_BUTTON_WIDTH * NUMBER_OF_BUTTONS}px) {
    flex-direction: column;
    height: 100%;
    align-items: center;
  }
`;

const NavButton = styled.button`
  color: white;
  font-weight: 700;
  font-size: 16px;
  width: ${NAV_BUTTON_WIDTH}px;

  :hover {
    background-color: #808080;
    color: white;
    transition: 0.3s;
    cursor: pointer;
  }

  @media only screen and (max-width: ${NAV_BUTTON_WIDTH * NUMBER_OF_BUTTONS}px) {
    height: ${NAV_BUTTON_HEIGHT}px;
    width: 100%;
  }
`;

const selectedStyle = {
  backgroundColor: '#333',
  color: 'white',
};

const Navbar = () => {
  const history = useHistory();
  const [page, setPage] = useState('/' + window.location.href.split('/')[3]);

  return (
    <Nav>
      <NavButton
        style={page === '/' ? selectedStyle : undefined}
        onClick={() => {
          setPage('/');
          history.push('/');
        }}
      >
        Home
      </NavButton>
      <NavButton
        style={page === '/projects' ? selectedStyle : undefined}
        onClick={() => {
          setPage('/projects');
          history.push('/projects');
        }}
      >
        Projects
      </NavButton>
      <NavButton
        style={page === '/certifications' ? selectedStyle : undefined}
        onClick={() => {
          setPage('/certifications');
          history.push('/certifications');
        }}
      >
        Certifications
      </NavButton>
      <NavButton
        style={page === '/talks' ? selectedStyle : undefined}
        onClick={() => {
          setPage('/talks');
          history.push('/talks');
        }}
      >
        Talks
      </NavButton>
      <NavButton
        style={page === '/contracts' ? selectedStyle : undefined}
        onClick={() => {
          setPage('/contracts');
          history.push('/contacts');
        }}
      >
        Contacts
      </NavButton>
    </Nav>
  );
};

export default Navbar;
