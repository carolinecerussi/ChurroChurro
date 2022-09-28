import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

<<<<<<< HEAD
const TicketStyle = styled.div`
  font-size: 20pt;
  padding-vertical: 6;
  background-color: orange;
  border-radius: 50%;
  text-align: center;
  margin-horizontal: 1%;
  width: 80%;
  margin-bottom: 6;
  color: black;
  align-self: flex-start;

  font-family: dangrek;
  `;



=======
const SnackObject = styled.div`
  margin: 2rem;
  padding: 2rem;
  width: 600px;
  border-radius: 8px;
  background-color: rgba(75, 75, 75, 1);
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
  text-align: right;
`;
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3

function Ticket(props) {

  return (
<<<<<<< HEAD

     <TicketStyle onClick={() => props.whenTicketClicked(props.id)}>
        <h3>
          {props.location} - {props.names}
        </h3>
        <p>
          <em>{props.issue}</em>
        </p>
        <p>
          <em>{props.formattedWaitTime}</em>
        </p>
        <hr />
    </TicketStyle>

=======
    <SnackObject>
      <div onClick={() => props.whenTicketClicked(props.id)}>
        <h1>{props.name}</h1>
        <h2>Origin</h2>
        <SnackCopy>{props.origin}</SnackCopy>
        <h2>Description</h2>
        <SnackCopy>{props.issue}</SnackCopy>
        <SnackWaitTime>
          Snack Added: {props.formattedWaitTime} ago
        </SnackWaitTime>
      </div>
    </SnackObject>
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3
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
