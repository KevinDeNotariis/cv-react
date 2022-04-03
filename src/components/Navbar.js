import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #0353a4;
  display: flex;
  padding: 0 10px;
  height: 40px;
  justify-content: center;
`;

const NavButtons = styled.button`
  color: white;
  font-weight: 700;
  font-size: 16px;
`;

const Navbar = () => {
  const history = useHistory();
  const [page, setPage] = useState("/" + window.location.href.split("/")[3]);

  return (
    <Nav>
      <NavButtons
        className={page === "/" ? "selected" : undefined}
        onClick={() => {
          setPage("/");
          history.push("/");
        }}
      >
        Home
      </NavButtons>
      <NavButtons
        className={page === "/projects" ? "selected" : undefined}
        onClick={() => {
          setPage("/projects");
          history.push("/projects");
        }}
      >
        Projects
      </NavButtons>
      <NavButtons
        className={page === "/contracts" ? "selected" : undefined}
        onClick={() => {
          setPage("/contracts");
          history.push("/contacts");
        }}
      >
        Contacts
      </NavButtons>
    </Nav>
  );
};

export default Navbar;
