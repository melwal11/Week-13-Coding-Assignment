import './LoginForm.css';

import React from 'react';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 className="login-form-title">Log In</h3>
      <div className="login-form-inputs">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      </div>
    </div>
  );
};

export default LoginForm;
