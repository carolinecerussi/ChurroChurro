import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HelpQueueHeader = styled.h1`
  font-size: 2rem;
`;

const MainHeader = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1.6px solid #eee;
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
        <HelpQueueHeader>Help Queue</HelpQueueHeader>
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
