import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';

//needs to be a functional component
const SignInAndSignUp = () => (
  <div className='sign-in-and-sign-up'>
    <div className='sign-in'>
      <SignIn />
    </div>
    <div className='sign-up'>
      Sign up
    </div>
  </div>

);

export default SignInAndSignUp;
