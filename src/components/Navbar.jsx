import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 23%;
  height: auto;
  padding: 0 20px;
  background-color: #2e4869;

  @media (max-width: 768px) {
    background-color: white;
  }
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <Burger />
      </Nav>
    </>
  );
};

export default Navbar;
