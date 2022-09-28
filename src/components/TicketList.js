import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import Header from './Header';


function TicketList(props) {
  return (

    <React.Fragment>
    <Header />
      <hr />
=======
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
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3
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
