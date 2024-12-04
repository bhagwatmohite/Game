/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { Outlet } from 'react-router-dom';
import './Dashboard.css';
import Footer from './Footer';
import NavBar from "./NavBar";
import SideBar from "./SideBar";

// eslint-disable-next-line react/no-unknown-property
const Dashboard = ({ onLogout }) => {

  return (
    <>
      <div>
        <div id="page-top">

          {/*  <!-- Page Wrapper --> */}
          <div id="wrapper">

            {/*  <!-- Sidebar --> */}
            <SideBar onLogout={onLogout}></SideBar>
            {/*  <!-- End of Sidebar --> */}

            {/*  <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">

              {/*  <!-- Main Content --> */}
              <div id="content">

                {/*  <!-- Topbar --> */}
                <NavBar></NavBar>
                {/*  <!-- End of Topbar --> */}

                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">

                  <Outlet></Outlet>
                </div>
                {/*   <!-- /.container-fluid --> */}

              </div>
              {/*   <!-- End of Main Content -->
                <!-- Footer --> */}
              <Footer></Footer>
              {/* <!-- End of Footer --> */}
            </div>
            {/*  <!-- End of Content Wrapper --> */}
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard