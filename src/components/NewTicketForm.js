import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { serverTimestamp } from 'firebase/firestore';

function NewTicketForm(props) {

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      // number: event.target.number.value,
      name: event.target.name.value,
      phonenumber:event.target.phonenumber.value,
      flavor: event.target.flavor.value,
      request: event.target.request.value,
      timeOpen: serverTimestamp()
    })}
  return (
    <React.Fragment>
      <ReusableForm
        onNewTicketCreation={handleNewTicketFormSubmission}
        buttonText='Order'
      />
    </React.Fragment>
  );
};

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func,
  buttonText: PropTypes.string
};


export default NewTicketForm;
