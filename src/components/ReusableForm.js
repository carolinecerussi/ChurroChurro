import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const StyledButton = styled.button`
background-color: transparent;
background-repeat: no-repeat;
border: none;
color: red;
font-size: 30pt;
&: hover {
  color: blue;
  cursor: pointer;
}
`;
const StyledInputLabel = styled.form `
  background-color: white;
  color: white;
  text-size: 20pt;
  `;


function ReusableForm(props) {
  

  return (
    <StyledInputLabel onSubmit={props.formSubmissionHandler}>
        <h1>Order:</h1>
        <h2>Customer Name:</h2>
        <input type='text' name='name' placeholder='First, Last' />
        <h2>Phone Number:</h2>
        <input type='text' name='phonenumber' placeholder="Phone Number" />
        <h2>Churro Flavor:</h2>
        <select name='flavor' id='dropdown' value='Flavor'>
          <option value='original'>Original (w/o cream) </option>
          <option value='vanilla' > Vanilla Cream </option>
          <option value='chocolate'>Chocolate Cream</option>
          <option value='caramel'>Caramel Cream</option>
          <option value='nutella'>Nutella Cream</option>
          </select>
        <h2>Special Requests:</h2>
        <textarea name='request' placeholder='ie allergies, silverware ...' />
        <StyledButton type='submit'>{props.buttonText}</StyledButton>
      </StyledInputLabel>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
