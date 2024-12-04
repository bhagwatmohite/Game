// //before eamil adding

// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
// import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

// const UserRegister = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isMobileUnique, setIsMobileUnique] = useState(true); // To track mobile uniqueness
//   const [showPassword, setShowPassword] = useState(false); // To track password visibility
//   const navigate = useNavigate();

//   // Handle input changes
//   const handleFirstNameChange = (e) => setFirstName(e.target.value);
//   const handleLastNameChange = (e) => setLastName(e.target.value);
//   const handleMobileNumberChange = (e) => setMobileNumber(e.target.value);
//   const handlePasswordChange = (e) => setPassword(e.target.value);

//   // Validation Functions
//   const validateName = (name) => /^[A-Za-z]+$/.test(name); // Only letters
//   const validateMobileNumber = (mobile) => /^\d{10}$/.test(mobile); // Only 10 digits
//   const validatePassword = (password) => password.length >= 6; // Minimum 6 characters

//   // Check mobile number uniqueness
//   const checkMobileNumberUnique = async (mobileNumber) => {
//     try {
//       const response = await axios.get('http://localhost:8080/getalluser');
//       const existingUsers = response.data;
//       const isMobileExist = existingUsers.some(user => user.mobileNumber === mobileNumber);
//       setIsMobileUnique(!isMobileExist); // Set mobile uniqueness status
//       return !isMobileExist; // Return true if unique
//     } catch (error) {
//       console.error('Error fetching users for mobile number check:', error);
//       toast.error('An error occurred while checking mobile number uniqueness.');
//       return false;
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Clear previous errors
//     setError('');

//     // Validate fields
//     if (!firstName || !validateName(firstName)) {
//       setError('First Name should contain only letters.');
//       return;
//     }
//     if (!lastName || !validateName(lastName)) {
//       setError('Last Name should contain only letters.');
//       return;
//     }
//     if (!mobileNumber || !validateMobileNumber(mobileNumber)) {
//       setError('Mobile Number should be exactly 10 digits.');
//       return;
//     }

//     // Check if mobile number is unique
//     const isUnique = await checkMobileNumberUnique(mobileNumber);
//     if (!isUnique) {
//       toast.error('This mobile number is already registered.');
//       return;
//     }

//     if (!password || !validatePassword(password)) {
//       setError('Password should be at least 6 characters long.');
//       return;
//     }

//     // Prepare user data for registration
//     const userData = {
//       firstName,
//       lastName,
//       mobileNumber,
//       password
//     };

//     try {
//       // Send POST request to the server for registration
//       const response = await axios.post('http://localhost:8080/use/register', userData);

//       if (response.status === 200) {
//         // Successfully registered, redirect to login or dashboard
//         navigate('/login'); // Redirect to login page after registration
//         toast.success('User registered successfully!');
//       }
//     } catch (err) {
//       console.error('Error registering user:', err);
//       toast.error('An error occurred during registration. Please try again.');
//     }
//   };

//   // Toggle password visibility
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
//                       <img src="/logo12.png" alt="Logo" />
//                     </a>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="p-5">
//                       <div className="text-center">
//                         <h1 className="h4 text-gray-900 mb-4">Welcome to our Gaming World!</h1>
//                       </div>
//                       {error && <div className="alert alert-danger">{error}</div>}
//                       <form className="user" onSubmit={handleSubmit}>
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             className="form-control form-control-user"
//                             id="firstName"
//                             placeholder="Enter First Name"
//                             value={firstName}
//                             onChange={handleFirstNameChange}
//                             required
//                           />
//                         </div>
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             className="form-control form-control-user"
//                             id="lastName"
//                             placeholder="Enter Last Name"
//                             value={lastName}
//                             onChange={handleLastNameChange}
//                             required
//                           />
//                         </div>
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
//                           {!isMobileUnique && (
//                             <small className="text-danger">This mobile number is already registered.</small>
//                           )}
//                         </div>
//                         <div className="form-group position-relative">
//                           <input
//                             type={showPassword ? 'text' : 'password'}
//                             className="form-control form-control-user"
//                             id="password"
//                             placeholder="Password"
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
//                               fontSize: '18px'
//                             }}
//                             onClick={togglePasswordVisibility}
//                           ></i>
//                         </div>
//                         <button type="submit" className="btn btn-primary btn-user btn-block">
//                           Register
//                         </button>
//                       </form>
//                       <div className="text-center mt-3">
//                         <p>
//                           Already have an account? <a href="/login">Login here</a>
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

// export default UserRegister;


//after eamil adding

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const UserRegister = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState(''); // Added email state
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Added confirmPassword state
  const [error, setError] = useState('');
  const [isMobileUnique, setIsMobileUnique] = useState(true); // To track mobile uniqueness
  const [showPassword, setShowPassword] = useState(false); // To track password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // To track confirm password visibility
  const navigate = useNavigate();

  // Handle input changes
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleMobileNumberChange = (e) => setMobileNumber(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value); // Handle email input change
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value); // Handle confirm password input change

  // Validation Functions
  const validateName = (name) => /^[A-Za-z]+$/.test(name); // Only letters
  const validateMobileNumber = (mobile) => /^\d{10}$/.test(mobile); // Only 10 digits
  const validatePassword = (password) => password.length >= 6; // Minimum 6 characters
  const validateEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email); // Email format

  // Check mobile number uniqueness
  const checkMobileNumberUnique = async (mobileNumber) => {
    try {
      const response = await axios.get('http://localhost:8080/getalluser');
      const existingUsers = response.data;
      const isMobileExist = existingUsers.some(user => user.mobileNumber === mobileNumber);
      setIsMobileUnique(!isMobileExist); // Set mobile uniqueness status
      return !isMobileExist; // Return true if unique
    } catch (error) {
      console.error('Error fetching users for mobile number check:', error);
      toast.error('An error occurred while checking mobile number uniqueness.');
      return false;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setError('');

    // Validate fields
    if (!firstName || !validateName(firstName)) {
      setError('First Name should contain only letters.');
      return;
    }
    if (!lastName || !validateName(lastName)) {
      setError('Last Name should contain only letters.');
      return;
    }
    if (!mobileNumber || !validateMobileNumber(mobileNumber)) {
      setError('Mobile Number should be exactly 10 digits.');
      return;
    }

    // Check if mobile number is unique
    const isUnique = await checkMobileNumberUnique(mobileNumber);
    if (!isUnique) {
      toast.error('This mobile number is already registered.');
      return;
    }

    if (!email || !validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password || !validatePassword(password)) {
      setError('Password should be at least 6 characters long.');
      return;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Prepare user data for registration
    const userData = {
      firstName,
      lastName,
      mobileNumber,
      email, // Include email in user data
      password // Only send password, not confirm password
    };

    try {
      // Send POST request to the server for registration
      const response = await axios.post('http://localhost:8080/user/register', userData);

      if (response.status === 200) {
        // Successfully registered, redirect to login or dashboard
        navigate('/login'); // Redirect to login page after registration
        toast.success('User registered successfully!');
      }
    } catch (err) {
      console.error('Error registering user:', err);
      toast.error('An error occurred during registration. Please try again.');
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div style={{ backgroundColor: '#4e73df', minHeight: '100vh' }}>
      <div className="container" style={{ paddingTop: '1%' }}>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image">
                    <a href="/" className="site-logo">
                      <img src="/logo12.png" alt="Logo" style={{ paddingTop: '30%' }} />
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome to our Gaming World!</h1>
                      </div>
                      {error && <div className="alert alert-danger">{error}</div>}
                      <form className="user" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="firstName"
                            placeholder="Enter First Name"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="lastName"
                            placeholder="Enter Last Name"
                            value={lastName}
                            onChange={handleLastNameChange}
                            required
                          />
                        </div>
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
                          {!isMobileUnique && (
                            <small className="text-danger">This mobile number is already registered.</small>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={handleEmailChange} // Handle email input change
                            required
                          />
                        </div>
                        <div className="form-group position-relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            className="form-control form-control-user"
                            id="password"
                            placeholder="Password"
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
                              fontSize: '18px'
                            }}
                            onClick={togglePasswordVisibility}
                          ></i>
                        </div>
                        <div className="form-group position-relative">
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            className="form-control form-control-user"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required
                          />
                          <i
                            className={`fa ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} position-absolute`}
                            style={{
                              top: '50%',
                              right: '10px',
                              transform: 'translateY(-50%)',
                              cursor: 'pointer',
                              fontSize: '18px'
                            }}
                            onClick={toggleConfirmPasswordVisibility}
                          ></i>
                        </div>
                        <button type="submit" className="btn btn-primary btn-user btn-block">
                          Register
                        </button>
                      </form>
                      <div className="text-center mt-3">
                        <p>
                          Already have an account? <a href="/login">Login here</a>
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

export default UserRegister;
