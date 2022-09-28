import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TicketObject = styled.div`
  margin: 5rem auto;
  padding: 2rem;
  max-width: 600px;
  border-radius: 8px;
  background-color: rgba(75, 75, 75, 1);
`;

const TicketNameTitle = styled.h2`
  margin-bottom: 1rem;
`;

const SnackCopy = styled.p`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const SnackDetailButton = styled.button`
  margin-left: 0;
`;

const DeleteSnackButton = styled.button`
  background-color: rgba(186, 41, 34, 1);
`;

function TicketDetail(props) {
  const { ticket, onClickingDelete, onClickingEdit } = props;
  return (
    <TicketObject>
      <h1>Order</h1>
      <TicketNameTitle>{ticket.name}</TicketNameTitle>
      <h3>Origin</h3>
      <SnackCopy>{ticket.origin}</SnackCopy>
      <h3>Description</h3>
      <SnackCopy>{ticket.issue}</SnackCopy>
      <SnackDetailButton onClick={onClickingEdit}>
        Update Ticket
      </SnackDetailButton>
      <DeleteSnackButton onClick={() => onClickingDelete(ticket.id)}>
        Delete Snack
      </DeleteSnackButton>
    </TicketObject>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TicketDetail;
