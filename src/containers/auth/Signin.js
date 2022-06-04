import React, { useState } from "react";
import "./Signin.css";
import Input from "../../components/UI/Input";
import { login } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };

  if (auth.authenticate) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="wrapper bg-white">
      <div className="h2 text-center"> Admin Login </div>
      <div className="h4 text-muted text-center pt-2">
        Enter your login details
      </div>
      <form className="pt-3" onSubmit={userLogin}>
        <div className="form-group py-2">
          <div className="input-field">
            <span className="far fa-user p-2"> </span>
            <Input
              label="Email or Username"
              placholder="Enter Email or Username"
              type="email"
              value={email}
              className="inputfield"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group py-1 pb-2">
          <div className="input-field">
            <span className="fas fa-lock p-2"> </span>
            <Input
              label="password"
              placholder="Enter Email or Username"
              type="password"
              value={password}
              className="inputfield"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="d-flex align-items-start">
          <div className="ml-auto"> Forgot Password ? </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-block text-center my-3">
            Log in
          </button>
        </div>
        <div className="exisiting text-left">
          <span>Are you a new user...!</span> &nbsp;&nbsp;&nbsp;
          <Link to="/Signup"><button type="button" className="btn btn-primary text-center my-3">
            Register
          </button></Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
  