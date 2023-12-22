import React from 'react';
import styled from 'styled-components';
import SignOutBtn from './btn/signOutBtn';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 100vh;
  

  li {
    padding: 18px 10px;
    color: #fff;
    text-align: center;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #2e4869;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 23%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
        color: #fff;
        text-align: center;
    }
  }
`;

const LeftNav = ({ open }) => {
  return (
    <>
    <Ul open={open}>
      <li onClick={() => {
        window.location.pathname = "/";
      }}>Home</li>
      <li onClick={() => {
    window.location.pathname = "/atmgmt";
      }}>At管理</li>
      <li onClick={() => {
        window.location.pathname = "/user";
      }}>ユーザー情報</li>
      <SignOutBtn />  
    </Ul>
    </>
    
  )
}

export default LeftNav