import React, { useState } from "react";
import { auth } from "./../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import styled from "styled-components";

const AccountOptionBlock = styled.input`
color:red;
margin: 10pt;
font-size: 18pt;

`;

const AccountFormStyle = styled.form`
  margin: 2rem 2rem 2rem 2rem;
`;

const ClickStyleButton = styled.button`
  background-color: transparent;
  border: none;
  color: red;
  font-family: Gemini moon;
  font-size: 50pt;
  &: hover {
    color: blue;
    cursor: pointer;
  }
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
      .then((userCredential) => {
        setSignUpSuccess(
          `You've successfully signed up, ${userCredential.user.email}!`
        );
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}!`);
      });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(
          `You've successfully signed in as ${userCredential.user.email}!`
        );
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}!`);
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(function () {
        setSignOutSuccess("You have successfully signed out!");
      })
      .catch(function (error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }

  return (
    <React.Fragment>
      {signInSuccess}
      <h1>Welcome Back.</h1>
      <AccountFormStyle onSubmit={doSignIn}>
        <AccountOptionBlock type="text" name="signinEmail" placeholder="Email" />
        <AccountOptionBlock type="password" name="signinPassword" placeholder="Password" />
        <ClickStyleButton type="submit">IN</ClickStyleButton>
        </AccountFormStyle>
      <h1>New Member?</h1>
      {signUpSuccess}
      <AccountFormStyle onSubmit={doSignUp}>
        <AccountOptionBlock type="text" name="email" placeholder="Email" />
        <AccountOptionBlock type="password" name="password" placeholder="Password" />
        <ClickStyleButton type="submit">UP</ClickStyleButton>
        </AccountFormStyle>
      <h1>See Ya!</h1>
      {signOutSuccess}
      <ClickStyleButton onClick={doSignOut}>Out</ClickStyleButton>
    </React.Fragment>
  );
}

export default SignIn;

// import React, { useState } from 'react';
// import { auth } from './../firebase.js';
// import {
//   signInWithEmailAndPassword,
// } from 'firebase/auth';
// import styled from 'styled-components';
// import Header from './Header';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//   const SignInStyle = styled.div`
//     color: aliceblue;
//     background-color: orange;
//     font-family: gemini moon;
//     text-align: left;
//     `;

//   function SignIn(event) {
//     event.preventDefault();
//     const email = event.target.signinEmail.value;
//     const password = event.target.signinPassword.value;
//     const [signInSuccess, setSignInSuccess] = useState(null);
//     signInWithEmailAndPassword(auth, email, password)
//       .then(userCredential => {
//         setSignInSuccess(
//           `Welcome back, ${userCredential.user.name}!`
//         );
//       })
//       .catch(error => {
//         setSignInSuccess(`There was an error signing in: ${error.message}!`);
//       });

//   return (

//    <SignInStyle>
//    <Router>
//     <Routes>
//    <Route path="/sign-in" element={<SignIn />} />
//         <Route path="/" element={<Header />} />
//       </Routes>

// <h1>SIGN</h1>
// <h1>IN</h1>

//       {/* New sign in success message*/}
//       {signInSuccess}
//       <form onSubmit={SignIn}>
//         <input type='text' name='signinEmail' placeholder='email' />
//         <input type='password' name='signinPassword' placeholder='Password' />
//         <button type='submit'>IN</button>
//       </form>

//       </Router>
// </SignInStyle>

//   )}

// export default SignIn;
