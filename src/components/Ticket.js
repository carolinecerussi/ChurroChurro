import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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




function Ticket(props) {

  return (

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
