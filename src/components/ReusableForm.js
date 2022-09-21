import React from "react";
import PropTypes from "prop-types";
import { sub } from "date-fns";
import styled from "styled-components";

function ReusableForm(props) {
  
  const StyledButton = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  color: turquoise;
  font-family: Dangrek;
  font-size: 30pt;
  &: hover {
    color: black;
    cursor: pointer;
  }
`;

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
        <button  type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;