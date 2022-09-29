import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TicketObject = styled.div`
  margin: 1rem auto;
  padding: 10pt;
  max-width: 50%;
  background: yellow;

`;

const TicketNameTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 40pt;
  font-family: karla;
  font-weight: 250;
  background-color: transparent;
`;
const TicketNameDetails= styled.h2`
background-color:transparent;
font-weight:250;
margin: 10pt;
font-size: 20pt;
`;

const OrderDetailStyle = styled.h3`
  margin-bottom: 1rem;
  font-weight: 200;
  color:black;
  font-size: 25pt;
  background-color: transparent;
`;

const OrderDetailButton = styled.button`
  width: 40%;
  text-align: center;
  
`;

function TicketDetail(props) {
  const { ticket, onClickingDelete, onClickingEdit } = props;
  return (    
  <TicketObject>
      <TicketNameTitle>Order # {ticket.number} </TicketNameTitle>
      <TicketNameDetails>{ticket.formattedWaitTime}</TicketNameDetails>
      <TicketNameDetails>Flavor:</TicketNameDetails>
      <OrderDetailStyle>{ticket.flavor}</OrderDetailStyle>
      <TicketNameDetails>Special Requests:</TicketNameDetails>
      <OrderDetailStyle>{ticket.request}</OrderDetailStyle>
      <OrderDetailButton onClick={onClickingEdit}>
        Edit
      </OrderDetailButton>
      <OrderDetailButton onClick={() => onClickingDelete(ticket.id)}>
        Close 
      </OrderDetailButton>
    </TicketObject>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TicketDetail;
