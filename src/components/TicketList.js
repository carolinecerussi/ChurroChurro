import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SnackListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
`;

function TicketList(props) {
  return (
    <SnackListContainer>
      {props.ticketList.map(ticket => (
        <Ticket
          whenTicketClicked={props.onTicketSelection}
          name={ticket.name}
          origin={ticket.origin}
          formattedWaitTime={ticket.formattedWaitTime}
          issue={ticket.issue}
          id={ticket.id}
          key={ticket.id}
        />
      ))}
    </SnackListContainer>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default TicketList;
