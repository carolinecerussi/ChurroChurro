import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const MainFooter = styled.footer`
  display: flex;
  font-family: 'roboto';
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding: 1rem 1rem;
  width: 100%;
  border-top: 2px solid red;
	background-color: white;
	font-size: 20pt;

`;



const MenuList = styled.ul`
  list-style: none;

`;

const MenuListItem = styled.li`
  margin-right: 1rem;

`;

function Footer() {
  return (
		<MainFooter> 
      <React.Fragment>
        <MenuList>
          <MenuListItem>
            <Link to='/about'>About</Link>
          </MenuListItem>
          <MenuListItem>
            <Link to='/account'>Account</Link>
          </MenuListItem>
        </MenuList>
      </React.Fragment>
			</MainFooter>
  );
}

export default Footer;