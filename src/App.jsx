// import { useEffect, useState } from 'react';
// import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Dash from './Components/Admin/dash';
// import Dashboard from './Components/Admin/Dashboard';

// import Images from './Components/Admin/Images/Images';
// import Login from './Components/Admin/Login';
// import PrivateRoutes from './Components/Admin/PrivateRoutes';
// import Adduser from './Components/Admin/User/Adduser';
// import User from './Components/Admin/User/User';
// import GameDashboard from './Components/GameDashboard';
// import Home from './Components/Home';
// import PrivateRoute from './Components/UI/PrivateRoute';
// import UserLogin from './Components/UI/UserLogin';
// import UserRegister from './Components/UI/UserRegister';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

//   useEffect(() => {
//     const storedLoggedIn = localStorage.getItem("isLoggedIn");
//     const logoutTime = localStorage.getItem("logoutTime");

//     const storedUserMobileNumber = localStorage.getItem("userMobileNumber");
//     const userLogoutTime = localStorage.getItem("userLogoutTime");

//     if (storedLoggedIn === "true") {
//       setIsLoggedIn(true);
//       const now = Date.now();
//       const remainingTime = logoutTime - now;

//       if (remainingTime > 0) {
//         const logoutTimer = setTimeout(() => {
//           handleLogout();
//         }, remainingTime);
//         return () => clearTimeout(logoutTimer);
//       } else {
//         handleLogout();
//       }
//     }

//     if (storedUserMobileNumber && userLogoutTime) {
//       const now = Date.now();
//       const remainingTime = userLogoutTime - now;
//       if (remainingTime > 0) {
//         setIsUserLoggedIn(true);
//         setTimeout(handleUserLogout, remainingTime);
//       } else {
//         handleUserLogout();
//       }
//     }
//   }, []);

//   const handleLogin = () => {
//     const twelveHours = 12 * 60 * 60 * 1000;
//     const logoutTime = Date.now() + twelveHours;

//     setIsLoggedIn(true);
//     localStorage.setItem("isLoggedIn", "true");
//     localStorage.setItem("logoutTime", logoutTime.toString());

//     const logoutTimer = setTimeout(() => {
//       handleLogout();
//     }, twelveHours);

//     localStorage.setItem("logoutTimer", logoutTimer);

//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.setItem("isLoggedIn", "false");
//     localStorage.removeItem("logoutTime");

//     const timer = localStorage.getItem("logoutTimer");
//     if (timer) {
//       clearTimeout(parseInt(timer, 10));
//       localStorage.removeItem("logoutTimer");
//     }
//   };

//   const handleUserLogin = () => {
//     const twelveHours = 12 * 60 * 60 * 1000;
//     const userLogoutTime = Date.now() + twelveHours;

//     setIsUserLoggedIn(true);
//     localStorage.setItem("userMobileNumber", "user123"); // Example, replace with real value
//     localStorage.setItem("userLogoutTime", userLogoutTime.toString());

//     setTimeout(handleUserLogout, twelveHours); // auto logout after 12 hours
//   };

//   const handleUserLogout = () => {
//     setIsUserLoggedIn(false);
//     localStorage.removeItem("userMobileNumber");
//     localStorage.removeItem("userLogoutTime");
//   };

//   return (
//     <Router>
//       <Routes>
//         {/* -------------------this is user interface routes------------------------- */}
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={<UserRegister />} />
//         {/* <Route path="/login" element={<UserLogin />} /> */}
//         <Route path="/login" element={isUserLoggedIn ? <Navigate to="/game" /> : <UserLogin onLogin={handleUserLogin} />} />
//         <Route path="/game" element={<PrivateRoute><GameDashboard />  </PrivateRoute>} />

//         {/* ---------------------------- for the admin routes ------------------------*/}
//         <Route
//           path="/admin/login"
//           element={isLoggedIn ? <Navigate to="/admin/dashboard" /> : <Login onLogin={handleLogin} />}
//         />
//         <Route
//           path="/admin"
//           element={
//             <PrivateRoutes isLoggedIn={isLoggedIn} onLogout={handleLogout}>
//               <Dashboard onLogout={handleLogout} />
//             </PrivateRoutes>
//           }
//         >

//           <Route path="dashboard" element={<Dash />} />
//           <Route path="user" element={<User />} />
//           <Route path="images" element={<Images />} />
//           <Route path="adduser" element={<Adduser />} />


//         </Route>

//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dash from './Components/Admin/dash';
import Dashboard from './Components/Admin/Dashboard';
import Images from './Components/Admin/Images/Images';
import Login from './Components/Admin/Login';
import PrivateRoutes from './Components/Admin/PrivateRoutes';
import Adduser from './Components/Admin/User/Adduser';
import User from './Components/Admin/User/User';
import WithDrawRequest from './Components/Admin/WithDrawRequest';
import ContactUs from './Components/ContactUs';
import GameDashboard from './Components/GameDashboard';
import Home from './Components/Home';
import OurPolicy from './Components/OurPolicy';
import RefundPolicy from './Components/RefundPolicy';
import ShippingPolicy from './Components/ShippingPolicy';
import Terms from './Components/Terms';
import PrivateRoute from './Components/UI/PrivateRoute';
import Profile from './Components/UI/UerProfile/Profile';
import UserLogin from './Components/UI/UserLogin';
import UserRegister from './Components/UI/UserRegister';
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Admin login state
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // User login state

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUserMobileNumber = localStorage.getItem('userMobileNumber');

    // Admin session check
    if (storedLoggedIn === 'true') {
      setIsLoggedIn(true);
      const logoutTime = localStorage.getItem('logoutTime');
      const remainingTime = parseInt(logoutTime) - Date.now();
      if (remainingTime > 0) {
        setTimeout(handleLogout, remainingTime); // Auto logout after session expires
      } else {
        handleLogout();
      }
    }

    // User session check
    if (storedUserMobileNumber) {
      setIsUserLoggedIn(true);
      const userLogoutTime = localStorage.getItem('userLogoutTime');
      const remainingTime = parseInt(userLogoutTime) - Date.now();
      if (remainingTime > 0) {
        setTimeout(handleUserLogout, remainingTime); // Auto logout after session expires
      } else {
        handleUserLogout();
      }
    }
  }, []);

  const handleLogin = () => {
    const twelveHours = 12 * 60 * 60 * 1000; // 12 hours
    const logoutTime = Date.now() + twelveHours;
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('logoutTime', logoutTime.toString());
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('logoutTime');
  };

  const handleUserLogin = () => {
    const twelveHours = 12 * 60 * 60 * 1000; // 12 hours
    const userLogoutTime = Date.now() + twelveHours;
    setIsUserLoggedIn(true);
    // localStorage.setItem('userMobileNumber', 'user123'); // Example user, replace as needed
    localStorage.setItem('isUserLoggedIn', 'true');
    localStorage.setItem('userLogoutTime', userLogoutTime.toString());
  };

  const handleUserLogout = () => {
    setIsUserLoggedIn(false);
    localStorage.removeItem('userMobileNumber');
    localStorage.setItem('isUserLoggedIn', 'false');
    localStorage.removeItem('userLogoutTime');
    localStorage.removeItem('totalBalance');
    localStorage.removeItem("gameResults");
  };

  return (
    <Router>
      <Routes>
        {/* -------------------this is user interface routes------------------------- */}
        <Route path="/" element={<Home />} />
        <Route path="/ourpolicy" element={<OurPolicy />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route path="/shippingpolicy" element={<ShippingPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<UserRegister />} />
        <Route
          path="/login"
          element={isUserLoggedIn ? <Navigate to="/game" /> : <UserLogin onLogin={handleUserLogin} />}
        />
        <Route
          path="/game"
          element={<PrivateRoute isUserLoggedIn={isUserLoggedIn} ><GameDashboard onLogout={handleUserLogout} /></PrivateRoute>}
        />
        <Route
          path="/profile"
          element={<PrivateRoute isUserLoggedIn={isUserLoggedIn} ><Profile /></PrivateRoute>}
        />

        {/* ---------------------------- for the admin routes ------------------------*/}
        <Route
          path="/admin/login"
          element={isLoggedIn ? <Navigate to="/admin/dashboard" /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/admin"
          element={
            <PrivateRoutes isLoggedIn={isLoggedIn}>
              <Dashboard onLogout={handleLogout} />
            </PrivateRoutes>
          }
        >
          <Route path="dashboard" element={<Dash />} />
          <Route path="user" element={<User />} />
          <Route path="images" element={<Images />} />
          <Route path="adduser" element={<Adduser />} />
          <Route path="withdrawrequest" element={<WithDrawRequest />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
