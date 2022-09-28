<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";
import { serverTimestamp } from "firebase/firestore";

function NewTicketForm(props){
=======
import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { serverTimestamp } from 'firebase/firestore';
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3

function NewTicketForm(props) {
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
<<<<<<< HEAD
      names: event.target.names.value,
      location: event.target.location.value,
=======
      name: event.target.name.value,
      origin: event.target.origin.value,
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3
      issue: event.target.issue.value,
      timeOpen: serverTimestamp()
    });
  }

  return (
    <React.Fragment>
<<<<<<< HEAD
      <ReusableForm 
        formSubmissionHandler={handleNewTicketFormSubmission} buttonText='Place Order' />
            </React.Fragment>
=======
      <ReusableForm
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText='Add New Snack'
      />
    </React.Fragment>
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
