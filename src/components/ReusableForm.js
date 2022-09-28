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
  font-family: Helvetica;
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

      <label for="location">Churro Flavor: </label>
        <input
          type='select'
          name='location'
          placeholder='Flavor ' />
          <br></br>


          <label for="issue">Special Requests: </label>
        <textarea
          name='issue'
          placeholder='No Sauce, Extra Fried, etc...' />
          <br></br>
        <StyledButton type='submit' > {props.buttonText}</StyledButton>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;