// /* eslint-disable react/no-unescaped-entities */
// /* eslint-disable react/prop-types */

// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const UserLogin = ({ onLogin }) => {
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleMobileNumberChange = (e) => {
//     setMobileNumber(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   // Validate mobile number (10 digits) and password (not empty)
//   const validateMobileNumber = (mobileNumber) => /^\d{10}$/.test(mobileNumber); // Only 10 digits
//   const validatePassword = (password) => password.length >= 6; // Password must be at least 6 characters long

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError('');

//     // Validate inputs
//     if (!validateMobileNumber(mobileNumber)) {
//       setError('Mobile Number should be exactly 10 digits.');
//       return;
//     }

//     if (!validatePassword(password)) {
//       setError('Password should be at least 6 characters long.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://api.12home.vip/user/login', null, {
//         params: {
//           mobileNumber: mobileNumber,
//           password: password,
//         },
//       });

//       if (response.status === 200) {
//         // Successfully logged in, set session and redirect to game route
//         onLogin();
//         localStorage.setItem('userMobileNumber', mobileNumber);
//         localStorage.setItem('userLogoutTime', Date.now() + 12 * 60 * 60 * 1000); // Set logout time
//         localStorage.setItem("isUserLoggedIn", true);
//         sessionStorage.setItem('userMobileNumber', mobileNumber);


//         navigate('/game');
//         toast.success('Logged in successfully!');
//       }
//     } catch (err) {
//       if (err.response && err.response.status === 400) {
//         toast.error('Invalid credentials. Please try again.');
//       } else {
//         toast.error('An error occurred. Please try again later.');
//       }
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div style={{ backgroundColor: '#4e73df', minHeight: '100vh' }}>
//       <div className="container" style={{ paddingTop: '7%' }}>
//         <div className="row justify-content-center">
//           <div className="col-xl-10 col-lg-12 col-md-9">
//             <div className="card o-hidden border-0 shadow-lg my-5">
//               <div className="card-body p-0">
//                 <div className="row">
//                   <div className="col-lg-6 d-none d-lg-block bg-login-image">
//                     <a href="/" className="site-logo">
//                       <img src="/logo12.png" alt="Logo" style={{ paddingTop: '10%' }} />
//                     </a>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="p-5">
//                       <div className="text-center">
//                         <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
//                       </div>
//                       {error && <div className="alert alert-danger">{error}</div>}
//                       <form className="user" onSubmit={handleSubmit}>
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             className="form-control form-control-user"
//                             id="mobileNumber"
//                             placeholder="Enter Mobile Number"
//                             value={mobileNumber}
//                             onChange={handleMobileNumberChange}
//                             required
//                           />
//                         </div>
//                         <div className="form-group position-relative">
//                           <input
//                             type={showPassword ? 'text' : 'password'}
//                             className="form-control form-control-user"
//                             id="password"
//                             placeholder="Enter Password"
//                             value={password}
//                             onChange={handlePasswordChange}
//                             required
//                           />
//                           <i
//                             className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'} position-absolute`}
//                             style={{
//                               top: '50%',
//                               right: '10px',
//                               transform: 'translateY(-50%)',
//                               cursor: 'pointer',
//                               fontSize: '18px',
//                             }}
//                             onClick={togglePasswordVisibility}
//                           ></i>
//                         </div>
//                         <button type="submit" className="btn btn-primary btn-user btn-block">
//                           Login
//                         </button>
//                       </form>
//                       <div className="text-center mt-3">
//                         <p>
//                           Don't have an account? <a href="/register">Register here</a>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default UserLogin;


//after applying the spinner

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import axios from 'axios';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap'; // Import Spinner from react-bootstrap
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserLogin = ({ onLogin }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Validate mobile number (10 digits) and password (not empty)
  const validateMobileNumber = (mobileNumber) => /^\d{10}$/.test(mobileNumber); // Only 10 digits
  const validatePassword = (password) => password.length >= 6; // Password must be at least 6 characters long

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setIsLoading(true); // Set loading state to true before sending the request

    // Validate inputs
    if (!validateMobileNumber(mobileNumber)) {
      setError('Mobile Number should be exactly 10 digits.');
      setIsLoading(false); // Stop loading when validation fails
      return;
    }

    if (!validatePassword(password)) {
      setError('Password should be at least 6 characters long.');
      setIsLoading(false); // Stop loading when validation fails
      return;
    }

    try {
      // Step 1: Try to log in the user
      const response = await axios.post('http://api.12home.vip/user/login', null, {
        params: {
          mobileNumber: mobileNumber,
          password: password,
        },
      });

      if (response.status === 200) {
        // Successfully logged in, fetch user data
        // Step 2: Fetch all users to find the user ID
        const usersResponse = await axios.get('http://api.12home.vip/getalluser');
        const user = usersResponse.data.find((u) => u.mobileNumber === mobileNumber);

        if (user) {
          // Step 3: Store user ID and other info in localStorage
          localStorage.setItem('userMobileNumber', mobileNumber);
          localStorage.setItem('userId', user.id); // Store user ID
          localStorage.setItem('userLogoutTime', Date.now() + 12 * 60 * 60 * 1000); // Set logout time
          localStorage.setItem("isUserLoggedIn", true);
          sessionStorage.setItem('userMobileNumber', mobileNumber);

          // Step 4: Redirect to the game route
          onLogin();
          navigate('/game');
          toast.success('Logged in successfully!');
        } else {
          // If user is not found
          toast.error('User not found. Please try again.');
        }
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        toast.error('Invalid credentials. Please try again.');
      } else {
        toast.error('An error occurred. Please try again later.');
      }
    } finally {
      setIsLoading(false); // Stop loading when the request finishes
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ backgroundColor: '#4e73df', minHeight: '100vh' }}>
      <div className="container" style={{ paddingTop: '7%' }}>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image">
                    <a href="/" className="site-logo">
                      <img src="/logo12.png" alt="Logo" style={{ paddingTop: '10%' }} />
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      {error && <div className="alert alert-danger">{error}</div>}
                      <form className="user" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="mobileNumber"
                            placeholder="Enter Mobile Number"
                            value={mobileNumber}
                            onChange={handleMobileNumberChange}
                            required
                          />
                        </div>
                        <div className="form-group position-relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            className="form-control form-control-user"
                            id="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                          />
                          <i
                            className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'} position-absolute`}
                            style={{
                              top: '50%',
                              right: '10px',
                              transform: 'translateY(-50%)',
                              cursor: 'pointer',
                              fontSize: '18px',
                            }}
                            onClick={togglePasswordVisibility}
                          ></i>
                        </div>
                        <button type="submit" className="btn btn-primary btn-user btn-block" disabled={isLoading}>
                          {isLoading ? (
                            <Spinner animation="border" size="sm" /> // Show loader when submitting
                          ) : (
                            'Login'
                          )}
                        </button>
                      </form>
                      <div className="text-center mt-3">
                        <p>
                          Don't have an account? <a href="/register">Register here</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserLogin;
