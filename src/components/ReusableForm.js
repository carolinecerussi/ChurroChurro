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
    <FormContainer>
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='name' placeholder='Snack name' />
        <input type='text' name='origin' placeholder='Snack origin' />
        <textarea name='issue' placeholder='Snack description' />
        <SubmitSnackButton type='submit'>{props.buttonText}</SubmitSnackButton>
      </form>
    </FormContainer>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
