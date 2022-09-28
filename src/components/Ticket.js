import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TicketObject = styled.div`
  margin: 1rem;
  padding: 1rem;
  width: 90%;
  background-color:transparent;
  font-family: karla ;
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
  font-size: karla;
  color: white;
`;

const OrderWaitTime = styled.p`
  font-family: karla;
  font-style: italic;
`;

function Ticket(props) {

  return (
    <TicketObject onClick={() => props.whenTicketClicked(props.id)}>
        <h1> Order {"number"} </h1>
        <h2>{props.name}</h2>
        <OrderCopy>{props.origin}</OrderCopy>
        Status: Open
        <OrderCopy>{props.issue}</OrderCopy>
        <OrderWaitTime>
           Ordered: {props.formattedWaitTime} ago
        </OrderWaitTime>
    </TicketObject>
  );
}

Ticket.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

export default Ticket;
