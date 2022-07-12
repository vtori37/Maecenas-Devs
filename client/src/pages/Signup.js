import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER)

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleFormSubmit}>
          <h3>Sign Up</h3>

          <div className="mb-3">
            <label>Username</label>
            <input
              className="form-control"
              placeholder="Enter Username"
              name="username"
              type="username"
              id="username"
              value={formState.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              className="form-control"
              placeholder="Enter email"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              className="form-control"
              placeholder="Enter password"
              name="password"
              type="password"
              id="password"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
          </form>
        </div>
      </div>
    );
};

export default Signup;