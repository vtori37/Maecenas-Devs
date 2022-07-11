// Jake code

import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
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
        <div className="auth-wrapper">
        <div className="auth-inner">
          <h3>Sign In</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  defaultValue={formState.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    defaultValue={formState.password}
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
                  Submit
                </button>
              </div>
          </form>

          {error && <div>Login failed</div>}
        </div>
        </div>
      );
};

export default Login;
