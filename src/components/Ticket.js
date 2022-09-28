import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SnackObject = styled.div`
  margin: 2rem;
  padding: 2rem;
  width: 50;
  background-color:white;
  border-color: blue;
  border-width: 2pt;
  font-family: 'roboto';
  &:hover {
    cursor: pointer;
    opacity: 0.8;

  }
  &:active {
    cursor: pointer;
    opacity: 0.4;
  }
`;

const SnackCopy = styled.p`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const SnackWaitTime = styled.p`
  margin-top: 1rem;
  font-style: italic;
`;

function Ticket(props) {

  return (
    <SnackObject onClick={() => props.whenTicketClicked(props.id)}>
        <h1>{props.name}</h1>
        <h2>Origin</h2>
        <SnackCopy>{props.origin}</SnackCopy>
        <h2>Description</h2>
        <SnackCopy>{props.issue}</SnackCopy>
        <SnackWaitTime>
          Snack Added: {props.formattedWaitTime} ago
        </SnackWaitTime>
    </SnackObject>
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
