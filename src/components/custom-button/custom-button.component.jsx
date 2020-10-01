import React from 'react';
import './custom-button.styles.scss';

//needs to be a functional component
const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
  <div className="group">
    <button className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
      {children}
    </button>
  </div>
)

export default CustomButton;
