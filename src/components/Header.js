import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainHeader = styled.header`
  display: flex;
  font-family: karla;
  align-items: baseline;
  justify-content: space-between;
  font-size: 20pt;
  border-bottom: 3px solid yellow;
`;

const BrandWordmark = styled.p`
  font-size:90pt;
  font-family: 'gemini moon';
  text-transform: uppercase;
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
            <Link to='/sign-in'>Sign In</Link>
        </MenuList>
    </MainHeader>
  );
}

export default Header;
