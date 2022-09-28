import React, {Component}  from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import styled from "styled-components";

const UpdateButton = styled.button`

  font-size: 20pt;
  color: black;
  background-color: transparent;
  border: none;
  font-family: 'impact';

  }
`;


function EditTicketForm(props) {
  const { ticket } = props;

  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket({
      name: event.target.name.value,
      origin: event.target.origin.value,
      issue: event.target.request.value,
      id: ticket.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditTicketFormSubmission} 
        buttonText= {<UpdateButton>Update Order</UpdateButton>}/>
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  onEditTicket: PropTypes.func,
  ticket: PropTypes.object
};

export default EditTicketForm;
