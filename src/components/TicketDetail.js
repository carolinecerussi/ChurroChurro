<<<<<<< HEAD
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
=======
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SnackObject = styled.div`
  margin: 5rem auto;
  padding: 2rem;
  max-width: 600px;
  border-radius: 8px;
  background-color: rgba(75, 75, 75, 1);
`;
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3

const SnackNameTitle = styled.h2`
  margin-bottom: 1rem;
`;

<<<<<<< HEAD


=======
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
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3
  return (
    <SnackObject>
      <h1>Ticket Detail</h1>
<<<<<<< HEAD
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <DetailButtonStyle onClick={onClickingEdit}>Update Order</DetailButtonStyle>
      <br>
      </br>
      <DetailButtonStyle onClick={()=> onClickingDelete(ticket.id)}>Close Ticket</DetailButtonStyle>
    </React.Fragment>
=======
      <SnackNameTitle>{ticket.name}</SnackNameTitle>
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
    </SnackObject>
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TicketDetail;
