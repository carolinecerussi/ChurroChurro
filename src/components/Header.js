import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainHeader = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding: 1rem 1rem;
  border-bottom: 2px solid #eee;
`;

const BrandWordmark = styled.p`
  font-size: 1.6rem;
  font-weight: 800;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuListItem = styled.li`
  margin-right: 1rem;
`;

function Header() {
  return (
    <MainHeader>
      <React.Fragment>
        <BrandWordmark>Snack City</BrandWordmark>
        <MenuList>
          <MenuListItem>
            <Link to='/'>Home</Link>
          </MenuListItem>
          <MenuListItem>
            <Link to='/sign-in'>Account</Link>
          </MenuListItem>
        </MenuList>
      </React.Fragment>
    </MainHeader>
  );
}

export default Header;
