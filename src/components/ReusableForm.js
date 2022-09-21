import React from "react";
import PropTypes from "prop-types";
import { sub } from "date-fns";

function ReusableForm(props) {
  
  const subButtonStyle = {
    backgroundColor: 'Transparent',
    backgroundRepeat: 'no-repeat',
    border: 'none',    
    color: 'orange',
    fontFamily: 'Dangrek',
    fontSize: '20pt',
  }

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label for="names">Name: </label>
        <input 
          type='text'
          name='names'
          placeholder='First, Last' />
           <br></br>

      <label for="location">Location: </label>
        <input
          type='text'
          name='location'
          placeholder='Seat Number' />
          <br></br>


          <label for="issue">Issue: </label>
        <textarea
          name='issue'
          placeholder='Describe.' />
          <br></br>
        <button style={subButtonStyle} type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;