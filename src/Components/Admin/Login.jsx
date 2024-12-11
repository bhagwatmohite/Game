/* eslint-disable react/prop-types */
// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Clear previous errors
//     setError('');

//     // Validate email format
//     if (!validateEmail(email)) {
//       setError('Please enter a valid email address.');
//       return;
//     }

//     try {
//       // Send email and password as URLSearchParams for form-encoded data
//       const params = new URLSearchParams();
//       params.append('email', email);
//       params.append('password', password);

//       const response = await axios.post('http://api.12home.vip/admin/login', params);

//       if (response.status === 200) {
//         // Redirect to the dashboard if login is successful
//         navigate('/admin');
//       }
//     } catch (err) {
//       // Handle error (e.g., invalid credentials)
//       if (err.response && err.response.status === 401) {
//         setError('Invalid credentials. Please try again.');
//       } else {
//         setError('An error occurred. Please try again later.');
//       }
//     }
//   };

//   return (
//     <>
//       <div className="bg-gradient-primary">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-xl-10 col-lg-12 col-md-9">
//               <div className="card o-hidden border-0 shadow-lg my-5">
//                 <div className="card-body p-0">
//                   <div className="row">
//                     <div className="col-lg-6 d-none d-lg-block bg-login-image">
//                       <a href="home.html" className="site-logo">
//                         <img src="/logo12.png" alt="" />
//                       </a>
//                     </div>
//                     <div className="col-lg-6">
//                       <div className="p-5">
//                         <div className="text-center">
//                           <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
//                         </div>
//                         {error && <div className="alert alert-danger">{error}</div>}
//                         <form className="user" onSubmit={handleSubmit}>
//                           <div className="form-group">
//                             <input
//                               type="email"
//                               className="form-control form-control-user"
//                               id="exampleInputEmail"
//                               aria-describedby="emailHelp"
//                               placeholder="Enter Email Address..."
//                               value={email}
//                               onChange={handleEmailChange}
//                               required
//                             />
//                           </div>
//                           <div className="form-group">
//                             <input
//                               type="password"
//                               className="form-control form-control-user"
//                               id="exampleInputPassword"
//                               placeholder="Password"
//                               value={password}
//                               onChange={handlePasswordChange}
//                               required
//                             />
//                           </div>
//                           <div className="form-group">
//                             <div className="custom-control custom-checkbox small">
//                               <input
//                                 type="checkbox"
//                                 className="custom-control-input"
//                                 id="customCheck"
//                               />
//                               <label className="custom-control-label" htmlFor="customCheck">
//                                 Remember Me
//                               </label>
//                             </div>
//                           </div>
//                           <button type="submit" className="btn btn-primary btn-user btn-block">
//                             Login
//                           </button>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setError('');

    // Validate email format
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      // Send email and password as URLSearchParams for form-encoded data
      const params = new URLSearchParams();
      params.append('email', email);
      params.append('password', password);

      const response = await axios.post('http://api.12home.vip/admin/login', params);

      if (response.status === 200) {
        // Store email in localStorage
        onLogin();
        localStorage.setItem("isLoggedIn", true);
        sessionStorage.setItem('email', email);
        localStorage.setItem('email', email);
        // Redirect to the dashboard if login is successful
        navigate('/admin/dashboard');
        toast.success('Logged in successfully!');
      }
    } catch (err) {
      // Handle error (e.g., invalid credentials)
      if (err.response && err.response.status === 401) {

        toast.error('Invalid credentials. Please try again.');
      } else {

        toast.error('An error occurred. Please try again later.');
      }
    }
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
                    <a href="home.html" className="site-logo">
                      <img src="/logo12.png" alt="" />
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
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            value={email}
                            onChange={handleEmailChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                          />
                        </div>
                        {/* <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label className="custom-control-label" htmlFor="customCheck">
                              Remember Me
                            </label>
                          </div>
                        </div> */}
                        <button type="submit" className="btn btn-primary btn-user btn-block">
                          Login
                        </button>
                      </form>
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

export default Login;
