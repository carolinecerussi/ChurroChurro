import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
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




function ReusableForm(props) {
  

  return (
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='name' placeholder='Snack name' />
        <input type='text' name='origin' placeholder='Snack origin' />
        <textarea name='issue' placeholder='Snack description' />
        <StyledButton type='submit'>{props.buttonText}</StyledButton>
      </form>

  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
