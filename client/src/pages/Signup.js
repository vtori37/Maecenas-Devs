import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import '../index.css'

import Auth from '../utils/auth';

const Signup = () => {

  return (
    <div className="auth-wrapper login-section">
    <div className="auth-inner containr-login">
      <div className="login-box "></div>
      <form className="login-form">
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
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