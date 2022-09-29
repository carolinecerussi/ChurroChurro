import React, {Component}  from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import styled from "styled-components";




function EditTicketForm(props) {
  const { ticket } = props;

  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket({
      name: event.target.name.value,
      flavor: event.target.name.value,
      phonenumber: event.target.name.value,
      request: event.target.request.value,
      id: ticket.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditTicketFormSubmission} 
        buttonText= {'Order'}/>
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  onEditTicket: PropTypes.func,
  ticket: PropTypes.object
};

export default EditTicketForm;
