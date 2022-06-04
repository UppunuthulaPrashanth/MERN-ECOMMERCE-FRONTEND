import React, { useState } from "react";
import "./Signup.css";
import Input from "../../components/UI/Input";
import { signup } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";

const Signin = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone]=useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const user=useSelector((state)=> state.user);
  const dispatch = useDispatch();

  const userSingUp = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
      phone
    };
    dispatch(signup(user));
  };

  if (auth.authenticate) {
    return <Navigate to={"/"} />;
  }

  if(user.loading){
    return <p>Loading......!</p>
  }

  return (
    <div className="wrapper bg-white">
      <div className="h2 text-center"> Admin Registration </div>
      <div className="h4 text-muted text-center pt-2">
        Enter your Registration details
      </div>
      <form className="pt-3" onSubmit={userSingUp}>
        <div className="row">
          <div className="form-group py-2 col-md-6">
            <div className="input-field">
              <span className="far fa-user p-2"> </span>
              <Input
                label="firstName"
                placholder="First Name"
                type="text"
                value={firstName}
                className="inputfield"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group py-2 col-md-6">
            <div className="input-field">
              <span className="far fa-user p-2"> </span>
              <Input
                label="lastName"
                placholder="Last Name"
                type="text"
                value={lastName}
                className="inputfield"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="form-group py-1 pb-2">
          <div className="input-field">
            <span className="fa fa-envelope p-2"> </span>
            <Input
              label="email"
              placholder="Enter Email address"
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
            <span className="fa fa-phone p-2"> </span>
            <Input
              label="phone"
              placholder="Enter phone number"
              type="number"
              value={phone}
              className="inputfield"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="form-group py-1 pb-2">
          <div className="input-field">
            <span className="fas fa-lock p-2"> </span>
            <Input
              label="password"
              placholder="Enter Password"
              type="password"
              value={password}
              className="inputfield"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-block text-center my-3">
            Register
          </button>
        </div>
        <div className="exisiting text-left">
          <span>Already Exisiting account...!</span> &nbsp;&nbsp;&nbsp;
          <Link to="/Signin">
            <button type="button" className="btn btn-primary text-center my-3">
              Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
