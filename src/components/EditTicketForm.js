import React, { Component } from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "./Header";

const UpdateButton = styled.button`
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding: 1rem 1rem;
  font-family: tahoma;
  font-size: 20pt;
  color: black;
  background-color: transparent;
  border: none;
  hover {
    color: pink;
  }
  }

`;


function EditTicketForm (props) {
  const { ticket } = props;

  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: ticket.id
    });
  }

  return (
    <React.Fragment>
      <Header />
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
