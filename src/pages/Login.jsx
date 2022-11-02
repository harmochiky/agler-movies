import React from "react";

export default function Login() {
  return (
    <div className="container login-page py-5">
      <div className="text-center mb-4">
        <h1 className="t-primary">Login</h1>
        <p className="text-secondary">
          Provide your username or email and password to login and access
          features
        </p>
      </div>
      <div className="w-50 m-auto">
        <form action="/">
          <div className="mb-2 t-primary bold">Email or username</div>
          <input
            placeholder="Your username or email"
            className="form-control mb-4"
          />
          <div className="mb-2 t-primary bold">Password</div>
          <input placeholder="Your password" className="form-control mb-3" />
          <button className="btn btn-green">Login</button>
        </form>
      </div>
    </div>
  );
}
