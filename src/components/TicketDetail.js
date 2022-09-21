import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const DetailButtonStyle = styled.button`
  background-color: transparent;
  border-color: rgba(78, 116, 289, 1);
  color: rgba(78, 116, 289, 1);
  border-width: .5;
  border-radius: 10;
  raised;
  `

function TicketDetail(props){
  const {ticket, onClickingDelete, onClickingEdit } = props; 



  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <DetailButtonStyle onClick={onClickingEdit}>Update Order</DetailButtonStyle>
      <br>
      </br>
      <DetailButtonStyle onClick={()=> onClickingDelete(ticket.id)}>Close Ticket</DetailButtonStyle>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default TicketDetail;