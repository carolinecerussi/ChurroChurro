import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainHeader = styled.header`
  display: flex;
  font-family: karla;
  justify-content: space-between;
  font-size: 20pt;
  border-bottom: 3px solid blue;
`;

const BrandWordmark = styled.h1`
font-size: 100pt;
  font-weight: 200;
  font-family: 'gemini moon';
  text-transform: uppercase;
  text-align: center;
`;

const MenuList = styled.ul`
  list-style: none;

`;

const MenuListItem = styled.li`
  text-align : right;

`;

function Header() {
  return (
    <MainHeader>
        <BrandWordmark>Churro Churro</BrandWordmark>
        <MenuList>
          <MenuListItem>
            <Link to='/'>Home</Link>
            </MenuListItem>            <br></br>
            <Link to='/sign-in'>Account</Link>
        </MenuList>
    </MainHeader>
  );
}

export default Header;
