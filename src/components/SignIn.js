import React, { useState } from 'react';
import { auth } from './../firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import styled from 'styled-components';
import Header from './Header';

  const SignInStyle = styled.div`
    color: aliceblue;
    background-color: orange;
    font-family: helvetica;
    text-align: left;
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
   <SignInStyle>
    <Header />
<h1>SIGN</h1>
<h1>UP</h1>
<h1>IN</h1>
<h1>OUT</h1>


      {/* Signup form lives here */}
      <h3>Sign up</h3>
      {/* New code below! */}
      {signUpSuccess}
      <form onSubmit={doSignUp}>
        <input type='text' name='email' placeholder='email' />
        <input type='password' name='password' placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>
      <h3>Sign In</h3>
      {/* New sign in success message*/}
      {signInSuccess}
      <form onSubmit={doSignIn}>
        <input type='text' name='signinEmail' placeholder='email' />
        <input type='password' name='signinPassword' placeholder='Password' />
        <button type='submit'>Sign in</button>
      </form>
      {/* New sign out button*/}
      <h3>Sign Out</h3>
      {signOutSuccess}
      <br />
      <button onClick={doSignOut}>Sign out</button>
</SignInStyle>
  );
}

export default SignIn;
