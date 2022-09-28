import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TicketObject = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  max-width: 900px;
  background-color:pink;

`;

const TicketNameTitle = styled.h2`
  margin-bottom: 1rem;
`;

const SnackCopy = styled.p`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const SnackDetailButton = styled.button`
  width: 40%;
  text-align: center;

`;

function TicketDetail(props) {
  const { ticket, onClickingDelete, onClickingEdit } = props;
  return (
    <TicketObject>
  
      <TicketNameTitle>Order- {ticket.number} </TicketNameTitle>
      <h2>Flavor:</h2>
      <SnackCopy>{ticket.flavor}</SnackCopy>
      <h2>Special Requests:</h2>
      <SnackCopy>{ticket.request}</SnackCopy>
      <SnackDetailButton onClick={onClickingEdit}>
        Edit
      </SnackDetailButton>
      <SnackDetailButton onClick={() => onClickingDelete(ticket.id)}>
        Close 
      </SnackDetailButton>
    </TicketObject>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TicketDetail;
