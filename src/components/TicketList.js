import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TicketListContainer = styled.div`
  display: flex-align;
  justify-content: space-evenly;
  font-size: 30px;
  background: transparent;
  text-align: center;
`;



function TicketList(props) {
  return (
    <TicketListContainer>
      {props.ticketList.map(ticket => (
        <Ticket
          whenTicketClicked={props.onTicketSelection}
          // number= {ticket.number}
          name={ticket.name}
          phonenumber={ticket.phonenumber}
          flavor={ticket.flavor}
          formattedWaitTime={ticket.formattedWaitTime}
          request={ticket.request}
          id={ticket.id}
          key={ticket.id}
        />
      ))}
    </TicketListContainer>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default TicketList;
