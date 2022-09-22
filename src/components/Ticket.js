import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SnackObject = styled.div`
  margin: 2rem auto;
  padding: 1rem;
  max-width: 600px;
  border: 1.2px solid rgba(59, 108, 59, 1);
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;

const SnackCopy = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const SnackWaitTime = styled.p`
  margin-top: 1rem;
  font-style: italic;
  text-align: right;
`;

function Ticket(props) {
  return (
    <SnackObject>
      <div onClick={() => props.whenTicketClicked(props.id)}>
        <h1>{props.names}</h1>
        <h2>Origin</h2>
        <SnackCopy>{props.location}</SnackCopy>
        <h2>Description</h2>
        <SnackCopy>{props.issue}</SnackCopy>
        <SnackWaitTime>Snack Added: {props.formattedWaitTime}</SnackWaitTime>
      </div>
    </SnackObject>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

export default Ticket;
