
import React, { useState } from 'react';
import styled from 'styled-components';
import LeftNav from './LeftNav';


const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#333' : '#ccc'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(0)' : 'rotate(45deg)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
      opacity: ${({ open }) => open ? 1 : 0};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(0)' : 'rotate(-45deg)'};
    }
  @media (max-width: 768px) {
    width: 1.5rem;
    height: 0.2rem;
    border-radius: 7px;
  }
}
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <LeftNav open={open}/>
    </>
  )
}

export default Burger