import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { Container} from "react-bootstrap";
import { userlogout } from "../redux/actions/actions"; 
import './Layout.css'

const Layout = (props) => {
  const [isActive, setActive] = useState(false);

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout=()=>{
    dispatch(userlogout()); 
  }

  return (
    <div>
      {auth.token!==null && 
      <>
      <div className={isActive ? "sidebar open" : "sidebar"}>
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus icon"></i>
          <div className="logo_name">Ecom-Prash</div>
          <i
            className="bx bx-menu"
            id="btn"
            onClick={() => setActive(!isActive)}
          ></i>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </Link>
            <span className="tooltip">Dashboard</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-user"></i>
              <span className="links_name">User</span>
            </a>
            <span className="tooltip">User</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-chat"></i>
              <span className="links_name">Messages</span>
            </a>
            <span className="tooltip">Messages</span>
          </li>
          <li>
            <Link to="/Category">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Category</span>
            </Link>
            <span className="tooltip">Category</span>
          </li>
          <li>
            <Link to="/Products">
              <i className="bx bx-folder"></i>
              <span className="links_name">Products</span>
            </Link>
            <span className="tooltip">Products</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cart-alt"></i>
              <span className="links_name">Order</span>
            </a>
            <span className="tooltip">Order</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-heart"></i>
              <span className="links_name">Saved</span>
            </a>
            <span className="tooltip">Saved</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cog"></i>
              <span className="links_name">Setting</span>
            </a>
            <span className="tooltip">Setting</span>
          </li>
          <li className="profile">
            <div className="profile-details">
              <div className="name_job">
                <div className="name">Prashanth</div>
                <div className="job">Full Stack Developer</div>
              </div>
            </div>
            
            <i className="bx bx-log-out" onClick={logout} id="log_out"></i>
            
          </li>
        </ul>
      </div>
      <section className="home-section">
        <Container> {props.children} </Container>
      </section>
      </>
      }
      {auth.token==null &&
        <Container> {props.children} </Container>
      }
    </div>
  
  );
};

export default Layout;
