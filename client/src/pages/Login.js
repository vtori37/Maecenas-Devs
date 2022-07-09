// Jake code

import React, { Component } from "react";
export default class Login extends Component {
    render() {
        return (
          <div className="auth-wrapper">
          <div className="auth-inner">
            <form>
            <h3>Sign In</h3>
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
          </div>
          </div>
        );
    }
}














// Tori Code

// import React from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import "../index.css";



// function Login () {
//   return (
  
//     <Form>
//     <Form.Group className="mb-3" controlId="formBasicEmail">
//       <Form.Label>Email address:</Form.Label>
//       <Form.Control type="email" placeholder="Enter email" />
//       <Form.Text className="text-muted">
//         We'll never share your email with anyone else.
//       </Form.Text>
//     </Form.Group>

//     <Form.Group className="mb-3" controlId="formBasicPassword">
//       <Form.Label>Password:</Form.Label>
//       <Form.Control type="password" placeholder="Password" />
//     </Form.Group>
//     <Form.Group className="mb-3" controlId="formBasicCheckbox">
//       <Form.Check type="checkbox" label="Check me out" />
//     </Form.Group>
//     <Button variant="primary" type="submit">
//       Submit
//     </Button>
//   </Form>

// ) 
// };

// export default Login;