import React from 'react';
import styled from 'styled-components';
import { FaLessThan } from 'react-icons/fa';

const NavBar = () => (
  <Container>
    <NavIcon>
      <FaLessThan />
    </NavIcon>
  </Container>
);

export default NavBar;

const Container = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
`;

const NavIcon = styled.div`
  width: 40px;
  height: 100%;
  padding-left: 15px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
