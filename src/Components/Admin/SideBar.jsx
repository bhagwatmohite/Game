/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles



const SideBar = ({ onLogout }) => {

  const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

  const changeStyle = () => {
    if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
    }
    else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
    }
  };

  const handleLogout = () => {
    onLogout();
    toast.success('Logout successful!'); // Show success toast

  };

  return (
    <>
      {/*  <!-- Sidebar --> */}
      <ul className={style} id="accordionSidebar">

        {/*  <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
          {/* <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div> */}
          {/* <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div> */}
          <a href="home.html" className="site-logo">
            <img src="/logo12.png" alt="" style={{ width: '175px', height: '70px' }} />
          </a>
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
          </div>
        </a>

        {/*   <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/*  <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to="dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></Link>
        </li>

        {/*  <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/*   <!-- Heading --> */}
        <div className="sidebar-heading">
          Interface
        </div>

        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="user" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>Users</span>
          </Link>

        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item">
          <Link className="nav-link collapsed" to="images" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-folder"></i>
            <span>Images</span>
          </Link>

        </li>
        <hr className="sidebar-divider" />

        <li className="nav-item">
          <Link className="nav-link collapsed" to="withdrawrequest" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-folder"></i>
            <span>WithDraw Request</span>
          </Link>

        </li>
        <hr className="sidebar-divider" />
        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
            aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
          </a>
          <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">

          </div>
        </li>

        {/*  <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
          Addons
        </div>

        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <a className="collapse-item" href="login.html">Login</a>
              <a className="collapse-item" href="register.html">Register</a>
              <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <a className="collapse-item" href="404.html">404 Page</a>
              <a className="collapse-item" href="blank.html">Blank Page</a>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></a>
        </li>

        {/*  <!-- Nav Item - Tables --> */}
        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></a>
        </li>


        <li className="nav-item" onClick={handleLogout}>
          <Link className="nav-link" to="/admin/login">
            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            <span>Logout</span></Link>
        </li>
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      <ToastContainer />
    </>
  )
}

export default SideBar