import React from "react";

import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="login-form">
        <h2>Backend</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Email.."
              type="email"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Password.."
              type="password"
            />
          </div>
          <Link to="/admin" className="btn btn-primary btn-block">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
