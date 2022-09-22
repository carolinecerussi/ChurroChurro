import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SnackObject = styled.div`
  margin: 2rem auto;
  padding: 1rem;
  max-width: 600px;
  border: 1.2px solid rgba(59, 108, 59, 1);
  border-radius: 8px;
`;

const SnackNameTitle = styled.h2`
  margin-bottom: 1rem;
`;

const SnackCopy = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const SnackDetailButton = styled.button`
  margin-left: 0;
`;

function TicketDetail(props) {
  const { ticket, onClickingDelete, onClickingEdit } = props;
  return (
    <SnackObject>
      <h1>Ticket Detail</h1>
      <SnackNameTitle>{ticket.names}</SnackNameTitle>
      <h3>Origin</h3>
      <SnackCopy>{ticket.location}</SnackCopy>
      <h3>Description</h3>
      <SnackCopy>{ticket.issue}</SnackCopy>
      <SnackDetailButton onClick={onClickingEdit}>
        Update Ticket
      </SnackDetailButton>
      <SnackDetailButton onClick={() => onClickingDelete(ticket.id)}>
        Close Ticket
      </SnackDetailButton>
    </SnackObject>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TicketDetail;
