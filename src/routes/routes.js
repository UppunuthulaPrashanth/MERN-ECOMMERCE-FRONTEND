import React, { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../containers/auth/Signin";
import Signup from "../containers/auth/Signup";
import Home from "../containers/dashboard/Home";
import Products from "../containers/Products/View"
import Category from "../containers/Category/View";
import PrivateRoute from "../HOC/PrivateRoutes";
import { isUserLoggedIn } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Router = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Products" element={<Products />} />
        </Route>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Fragment>
  );
};

export default Router;
