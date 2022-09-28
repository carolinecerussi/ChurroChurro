

import React, { useState } from 'react';
import { auth } from './../firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import styled from 'styled-components';
<<<<<<< HEAD
import Header from './Header.js';
=======
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3

const AccountOptionsContainer = styled.div`
  margin: 2rem auto;
  padding: 1rem;
  max-width: 600px;
  border-radius: 8px;
`;

const AccountOptionBlock = styled.form`
  margin: 1rem 1rem 2rem 1rem;
`;

<<<<<<< HEAD

const Button = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  color: Lime;
  font-family: Gemini moon;
  font-size: 30pt;
  &: hover {
    color: pink;
    cursor: pointer;
  }
=======
const AccountOptionsButton = styled.button`
  margin-left: 0;
  margin-right: 0;
`;

const SignOutButton = styled.button`
  margin-left: 2rem;
  margin-right: 0;
  background-color: rgba(186, 41, 34, 1);
  padding: .5rem 2rem;
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3
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
<<<<<<< HEAD

    <AccountOptionsContainer>
    <Header />
      <h1>up</h1>
=======
    <AccountOptionsContainer>
      <h1>Sign up</h1>
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3
      {signUpSuccess}
      <AccountOptionBlock onSubmit={doSignUp}>
        <input type='text' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
<<<<<<< HEAD
        <Button type='submit'>Sign up</Button>
      </AccountOptionBlock>
      <h1> In</h1>
=======
        <AccountOptionsButton type='submit'>Sign up</AccountOptionsButton>
      </AccountOptionBlock>
      <h1>Sign In</h1>
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3
      {signInSuccess}
      <AccountOptionBlock onSubmit={doSignIn}>
        <input type='text' name='signinEmail' placeholder='Email' />
        <input type='password' name='signinPassword' placeholder='Password' />
<<<<<<< HEAD
        <Button type='submit'>Sign in</Button>
      </AccountOptionBlock>
      <h1> Out</h1>
      {signOutSuccess}
      <br />
      <Button onClick={doSignOut}>Sign out</Button>
=======
        <AccountOptionsButton type='submit'>Sign in</AccountOptionsButton>
      </AccountOptionBlock>
      <h1>Sign Out</h1>
      {signOutSuccess}
      <br />
      <SignOutButton onClick={doSignOut}>Sign out</SignOutButton>
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3
    </AccountOptionsContainer>
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
