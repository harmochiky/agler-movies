import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthData } from "../store";

export default function Login() {
  const dispatch = useDispatch();
  const authenticated = useSelector(
    (state) => state.aglet.authData.authenticated,
  );
  const navigate = useNavigate();
  const [userDets, setUserDets] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setUserDets({
      ...userDets,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    axios
      .post("http://localhost:5000/api/user/login", {
        ...userDets,
      })
      .then((data) => {
        console.log({ data });
        setLoading(false);
        dispatch(setAuthData(data.data.token));
        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data.error);
        setLoading(false);
      });
  };
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
        {error ? (
          <div className="alert py-1 mb-4 alert-danger">{error}</div>
        ) : null}
        <form onSubmit={handleFormSubmit} action="/">
          <div className="mb-2 t-primary bold">Email or username</div>
          <input
            onChange={onChange}
            name="email"
            placeholder="Your username or email"
            className="form-control mb-4"
            required
            type="email"
          />
          <div className="mb-2 t-primary bold">Password</div>
          <input
            onChange={onChange}
            name="password"
            placeholder="Your password"
            className="form-control mb-3"
            type="password"
            required
          />
          <button disabled={loading} type="submit" className="btn btn-green">
            {loading ? "Loading" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
