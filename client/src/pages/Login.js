// Jake code

import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import '../index.css';
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch(e) {
      console.error(e);
    }
      
    setFormState({
      email: '',
      password: '',
    });
  };
    
  return (
    <div className="auth-wrapper login-section">
    <div className="auth-inner containr-login">
      <div className="login-box "></div>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <h3>Login</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            id="password"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </div>
      </form>

      {error && <div>Login failed</div>}
    </div>
    </div>
  );
};

export default Login;