import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

const SubmitSnackButton = styled.button`
  margin-left: 0;
  margin-right: 0;
`;

function ReusableForm(props) {
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
