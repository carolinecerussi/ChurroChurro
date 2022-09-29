import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TicketObject = styled.div`
h1{
  margin: .5 rem;
  background-color: transparent;
  font-family: karla ;
  color: black;
  font-weight: 300;
}
  &:hover {
    cursor: pointer;
    opacity: 0.8;

  }
  &:active {
    cursor: pointer;
    opacity: 0.4;
  }
`;

const OrderCopy = styled.p`
  font-family: karla;
  color: black;
  background-color: transparent;
`;

const OrderWaitTime = styled.p`
  font-family: karla;
  font-style: italic;
  background-color: transparent;
  
`;

function Ticket(props) {

  return (
    <TicketObject onClick={() => props.whenTicketClicked(props.id)}>
        <h1> Order # {props.number} </h1>
        <p>Status: Open</p>
        <OrderWaitTime>
          {props.formattedWaitTime} ago
        </OrderWaitTime>
        <OrderCopy>{props.flavor}</OrderCopy>
        <OrderCopy>{props.request}</OrderCopy>
    </TicketObject>
  );
}

Ticket.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  phonenumber: PropTypes.string,
  request: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

export default Ticket;
