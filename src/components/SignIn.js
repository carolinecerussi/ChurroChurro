import React, { useState } from 'react';
import { auth } from './../firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import styled from 'styled-components';

const AccountOptionsContainer = styled.div`
  margin: 2rem auto;
  padding: 1rem;
  max-width: 600px;
  border-radius: 8px;
`;

const AccountOptionBlock = styled.form`
  margin: 1rem 1rem 2rem 1rem;
`;

const AccountOptionsButton = styled.button`
  margin-left: 0;
  margin-right: 0;
`;

const SignOutButton = styled.button`
  margin-left: 2rem;
  margin-right: 0;
  background-color: rgba(186, 41, 34, 1);
  padding: .5rem 2rem;
`;

function SignIn() {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setSignUpSuccess(
          `You've successfully signed up, ${userCredential.user.email}!`
        );
      })
      .catch(error => {
        setSignUpSuccess(`There was an error signing up: ${error.message}!`);
      });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setSignInSuccess(
          `You've successfully signed in as ${userCredential.user.email}!`
        );
      })
      .catch(error => {
        setSignInSuccess(`There was an error signing in: ${error.message}!`);
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(function () {
        setSignOutSuccess('You have successfully signed out!');
      })
      .catch(function (error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }

  return (
    <AccountOptionsContainer>
      <h1>Sign up</h1>
      {signUpSuccess}
      <AccountOptionBlock onSubmit={doSignUp}>
        <input type='text' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <AccountOptionsButton type='submit'>Sign up</AccountOptionsButton>
      </AccountOptionBlock>
      <h1>Sign In</h1>
      {signInSuccess}
      <AccountOptionBlock onSubmit={doSignIn}>
        <input type='text' name='signinEmail' placeholder='Email' />
        <input type='password' name='signinPassword' placeholder='Password' />
        <AccountOptionsButton type='submit'>Sign in</AccountOptionsButton>
      </AccountOptionBlock>
      <h1>Sign Out</h1>
      {signOutSuccess}
      <br />
      <SignOutButton onClick={doSignOut}>Sign out</SignOutButton>
    </AccountOptionsContainer>
  );
}

export default SignIn;
