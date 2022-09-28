import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainHeader = styled.header`
  display: flex;
  font-family: 'roboto';
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding: 1rem 1rem;
  width: 100%;
  border-bottom: 3px solid yellow;
`;

const BrandWordmark = styled.p`
  font-size: 4rem;
  font-weight: 800;
  font-family: 'gemini moon', sans-serif;
  text-transform: uppercase;
`;

const MenuList = styled.ul`
color: red;
  list-style: none;

`;

const MenuListItem = styled.li`
  margin-right: 1rem;

`;

function Header() {
  return (
    <MainHeader>
      <React.Fragment>
        <BrandWordmark>Churro Churro</BrandWordmark>
        <MenuList>
          <MenuListItem>
            <Link to='/'>Home</Link>
          </MenuListItem>
          <MenuListItem>
            <Link to='/sign-in'>Sign In</Link>
          </MenuListItem>
        </MenuList>
      </React.Fragment>
    </MainHeader>
  );
}

export default Header;
