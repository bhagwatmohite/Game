/* eslint-disable no-unused-vars */
// import { useState } from 'react';
// import DataTable from 'react-data-table-component';

// const User = () => {
//   // Define your data
//   const data = [
//     { name: "Tiger Nixon", position: "System Architect", office: "Edinburgh", age: 61, startDate: "2011/04/25", salary: "$320,800" },
//     { name: "Garrett Winters", position: "Accountant", office: "Tokyo", age: 63, startDate: "2011/07/25", salary: "$170,750" },
//     // Add more rows as needed
//   ];



//   // Define your columns
//   const columns = [
//     { name: 'Name', selector: row => row.name, sortable: true },
//     { name: 'Position', selector: row => row.position, sortable: true },
//     { name: 'Office', selector: row => row.office, sortable: true },
//     { name: 'Age', selector: row => row.age, sortable: true },
//     { name: 'Start Date', selector: row => row.startDate, sortable: true },
//     { name: 'Salary', selector: row => row.salary, sortable: true }
//   ];

//   // State for search input
//   const [searchTerm, setSearchTerm] = useState('');

//   // Filtered data based on search term
//   const filteredData = data.filter(item => {
//     return (
//       item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.office.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.age.toString().includes(searchTerm) ||
//       item.startDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.salary.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   });

//   return (
//     <div className="container-fluid">
//       <h1 className="h3 mb-2 text-gray-800">Tables</h1>
//       <p className="mb-4">
//         DataTables is a third-party plugin for creating tables.
//         For more information, visit the{" "}

//         <a target="_blank" rel="noopener noreferrer" href="https://datatables.net">official DataTables documentation</a>.
//       </p>

//       <div className="card shadow mb-4">
//         <div className="card-header py-3 d-flex justify-content-between align-items-center">
//           <h6 className="m-0 font-weight-bold text-primary">DataTables</h6>

//           {/* Search Input */}

//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={{ width: '40%' }}
//           />
//         </div>
//         <div className="card-body">
//           {/* DataTable Component */}
//           <DataTable
//             columns={columns}
//             data={filteredData}
//             pagination
//             highlightOnHover
//             responsive
//             defaultSortField="name"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default User;

//before adding email

// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';
// import DataTable from 'react-data-table-component';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // User component
// const User = () => {
//   const [users, setUsers] = useState([]); // State to store user data from API
//   const [searchTerm, setSearchTerm] = useState(''); // State for search term
//   const [selectedUser, setSelectedUser] = useState(null); // Store selected user for editing
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility
//   const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
//   const [errors, setErrors] = useState({}); // Validation errors

//   // Fetch users from API on component mount
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/getalluser');
//         setUsers(response.data);
//         console.log("Users fetched:", response.data);
//       } catch (error) {
//         console.error('Error fetching users data:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Handle search filter
//   const filteredData = users.filter(item => {
//     return (
//       item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.mobileNumber.includes(searchTerm) ||
//       item.password.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   });

//   // Handle Edit button click
//   const handleEdit = (user) => {
//     setSelectedUser(user); // Set the selected user for editing
//     setShowModal(true); // Show the modal
//     setErrors({}); // Clear any previous validation errors
//   };

//   // Handle Delete button click
//   const handleDelete = async (id) => {
//     const isConfirmed = window.confirm('Are you sure you want to delete this user?');
//     if (isConfirmed) {
//       try {
//         await axios.delete(`http://localhost:8080/deleteuser/${id}`);
//         setUsers(users.filter(user => user.id !== id)); // Remove the user from the state
//         toast.success('User deleted successfully!');
//       } catch (error) {
//         console.error('Error deleting user:', error);
//         toast.error('Error deleting user');
//       }
//     }
//   };

//   // Validate form data
//   const validateForm = () => {
//     const validationErrors = {};

//     // Validate first name (only alphabets)
//     if (!selectedUser.firstName) {
//       validationErrors.firstName = 'First Name is required';
//     } else if (!/^[A-Za-z]+$/.test(selectedUser.firstName)) {
//       validationErrors.firstName = 'First Name should contain only letters';
//     }

//     // Validate last name (only alphabets)
//     if (!selectedUser.lastName) {
//       validationErrors.lastName = 'Last Name is required';
//     } else if (!/^[A-Za-z]+$/.test(selectedUser.lastName)) {
//       validationErrors.lastName = 'Last Name should contain only letters';
//     }

//     // Validate mobile number (exactly 10 digits)
//     if (!selectedUser.mobileNumber) {
//       validationErrors.mobileNumber = 'Mobile Number is required';
//     } else if (!/^\d{10}$/.test(selectedUser.mobileNumber)) {
//       validationErrors.mobileNumber = 'Mobile Number must be exactly 10 digits';
//     }

//     // Validate password (required and minimum length)
//     if (!selectedUser.password) {
//       validationErrors.password = 'Password is required';
//     } else if (selectedUser.password.length < 6) {
//       validationErrors.password = 'Password must be at least 6 characters';
//     }

//     setErrors(validationErrors);
//     return Object.keys(validationErrors).length === 0; // Return true if no errors
//   };

//   // Handle saving the updated user data
//   const handleSave = async () => {
//     if (!validateForm()) {
//       return;
//     }

//     try {
//       const response = await axios.put(`http://localhost:8080/updateuser/${selectedUser.id}`, selectedUser);
//       setUsers(users.map(user => user.id === selectedUser.id ? response.data : user)); // Update the user list
//       setShowModal(false); // Close the modal
//       toast.success('User updated successfully!');
//     } catch (error) {
//       console.error('Error updating user:', error);
//       toast.error('Error updating user');
//     }
//   };

//   // Handle input change inside the modal
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSelectedUser(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   // Toggle password visibility
//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   // Define columns for DataTable
//   const columns = [
//     { name: 'First Name', selector: row => row.firstName, sortable: true },
//     { name: 'Last Name', selector: row => row.lastName, sortable: true },
//     { name: 'Mobile Number', selector: row => row.mobileNumber, sortable: true },
//     { name: 'Password', selector: row => row.password, sortable: true },
//     {
//       name: 'Action',
//       cell: (row) => (
//         // <div>
//         //   <button
//         //     onClick={() => handleEdit(row)}
//         //     className="btn btn-primary btn-sm mx-1"
//         //   >
//         //     Edit
//         //   </button>
//         //   <button
//         //     onClick={() => handleDelete(row.id)}
//         //     className="btn btn-danger btn-sm mx-1"
//         //   >
//         //     Delete
//         //   </button>
//         // </div>

//         <div>
//           {/* Edit Icon */}
//           <button
//             className="btn btn-warning btn-sm me-2"
//             onClick={() => handleEdit(row)}
//             aria-label="Edit User"
//             style={{ marginRight: '3px' }} >
//             <FaEdit />
//           </button>

//           {/* Delete Icon */}
//           <button
//             className="btn btn-danger btn-sm"
//             onClick={() => handleDelete(row.id)}
//             aria-label="Delete User">
//             <FaTrash />
//           </button>
//         </div>
//       ),
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true
//     }
//   ];

//   return (
//     <div className="container-fluid">
//       <h1 className="h3 mb-2 text-gray-800">User Table</h1>
//       <p className="mb-4">Manage user data</p>

//       <div className="card shadow mb-4">
//         <div className="card-header py-3 d-flex justify-content-between align-items-center">
//           <h6 className="m-0 font-weight-bold text-primary">User Data</h6>

//           {/* Search Input */}
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={{ width: '40%' }}
//           />
//         </div>
//         <div className="card-body">
//           {/* DataTable Component */}
//           <DataTable
//             columns={columns}
//             data={filteredData}
//             pagination
//             highlightOnHover
//             responsive
//             defaultSortField="firstName"
//           />
//         </div>
//       </div>

//       {/* Modal for Edit */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit User</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedUser && (
//             <div>
//               <div className="mb-3">
//                 <label>First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   className="form-control"
//                   value={selectedUser.firstName}
//                   onChange={handleChange}
//                 />
//                 {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
//               </div>
//               <div className="mb-3">
//                 <label>Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   className="form-control"
//                   value={selectedUser.lastName}
//                   onChange={handleChange}
//                 />
//                 {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
//               </div>
//               <div className="mb-3">
//                 <label>Mobile Number</label>
//                 <input
//                   type="text"
//                   name="mobileNumber"
//                   className="form-control"
//                   value={selectedUser.mobileNumber}
//                   onChange={handleChange}
//                 />
//                 {errors.mobileNumber && <small className="text-danger">{errors.mobileNumber}</small>}
//               </div>
//               <div className="mb-3">
//                 <label>Password</label>
//                 <div className="input-group">
//                   <input
//                     type={showPassword ? 'text' : 'password'}
//                     name="password"
//                     className="form-control"
//                     value={selectedUser.password}
//                     onChange={handleChange}
//                   />
//                   <button
//                     className="btn btn-outline-secondary"
//                     type="button"
//                     onClick={togglePassword}
//                   >
//                     {showPassword ? 'Hide' : 'Show'}
//                   </button>
//                 </div>
//                 {errors.password && <small className="text-danger">{errors.password}</small>}
//               </div>
//             </div>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
//           <Button variant="primary" onClick={handleSave}>Save Changes</Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Toast container */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default User;

//after email added
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// User component
const User = () => {
  const [users, setUsers] = useState([]); // State to store user data from API
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [selectedUser, setSelectedUser] = useState(null); // Store selected user for editing
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [errors, setErrors] = useState({}); // Validation errors

  // Fetch users from API on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getalluser');
        setUsers(response.data);
        console.log("Users fetched:", response.data);
      } catch (error) {
        console.error('Error fetching users data:', error);
      }
    };

    fetchUsers();
  }, []);

  // Handle search filter
  const filteredData = users.filter(item => {
    return (
      item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.mobileNumber.includes(searchTerm) ||
      item.password.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) // Added email filter
    );
  });

  // Handle Edit button click
  const handleEdit = (user) => {
    setSelectedUser(user); // Set the selected user for editing
    setShowModal(true); // Show the modal
    setErrors({}); // Clear any previous validation errors
  };

  // Handle Delete button click
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this user?');
    if (isConfirmed) {
      try {
        await axios.delete(`http://localhost:8080/deleteuser/${id}`);
        setUsers(users.filter(user => user.id !== id)); // Remove the user from the state
        toast.success('User deleted successfully!');
      } catch (error) {
        console.error('Error deleting user:', error);
        toast.error('Error deleting user');
      }
    }
  };

  // Validate form data
  const validateForm = () => {
    const validationErrors = {};

    // Validate first name (only alphabets)
    if (!selectedUser.firstName) {
      validationErrors.firstName = 'First Name is required';
    } else if (!/^[A-Za-z]+$/.test(selectedUser.firstName)) {
      validationErrors.firstName = 'First Name should contain only letters';
    }

    // Validate last name (only alphabets)
    if (!selectedUser.lastName) {
      validationErrors.lastName = 'Last Name is required';
    } else if (!/^[A-Za-z]+$/.test(selectedUser.lastName)) {
      validationErrors.lastName = 'Last Name should contain only letters';
    }

    // Validate mobile number (exactly 10 digits)
    if (!selectedUser.mobileNumber) {
      validationErrors.mobileNumber = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(selectedUser.mobileNumber)) {
      validationErrors.mobileNumber = 'Mobile Number must be exactly 10 digits';
    }

    // Validate password (required and minimum length)
    if (!selectedUser.password) {
      validationErrors.password = 'Password is required';
    } else if (selectedUser.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    // Validate email
    if (!selectedUser.email) {
      validationErrors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(selectedUser.email)) {
      validationErrors.email = 'Email is not valid';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0; // Return true if no errors
  };

  // Handle saving the updated user data
  const handleSave = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.put(`http://localhost:8080/updateuser/${selectedUser.id}`, selectedUser);
      setUsers(users.map(user => user.id === selectedUser.id ? response.data : user)); // Update the user list
      setShowModal(false); // Close the modal
      toast.success('User updated successfully!');
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Error updating user');
    }
  };

  // Handle input change inside the modal
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Define columns for DataTable
  const columns = [
    { name: 'First Name', selector: row => row.firstName, sortable: true },
    { name: 'Last Name', selector: row => row.lastName, sortable: true },
    { name: 'Mobile Number', selector: row => row.mobileNumber, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true }, // Added email column
    { name: 'Password', selector: row => row.password, sortable: true },
    {
      name: 'Action',
      cell: (row) => (
        <div>
          {/* Edit Icon */}
          <button
            className="btn btn-warning btn-sm me-2"
            onClick={() => handleEdit(row)}
            aria-label="Edit User"
            style={{ marginRight: '3px' }} >
            <FaEdit />
          </button>

          {/* Delete Icon */}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(row.id)}
            aria-label="Delete User">
            <FaTrash />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
    }
  ];

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">User Table</h1>
      <p className="mb-4">Manage user data</p>

      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between align-items-center">
          <h6 className="m-0 font-weight-bold text-primary">User Data</h6>

          {/* Search Input */}
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '40%' }}
          />
        </div>
        <div className="card-body">
          {/* DataTable Component */}
          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            highlightOnHover
            responsive
            defaultSortField="firstName"
          />
        </div>
      </div>

      {/* Modal for Edit */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <div>
              <div className="mb-3">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  value={selectedUser.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
              </div>
              <div className="mb-3">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  value={selectedUser.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
              </div>
              <div className="mb-3">
                <label>Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  className="form-control"
                  value={selectedUser.mobileNumber}
                  onChange={handleChange}
                />
                {errors.mobileNumber && <small className="text-danger">{errors.mobileNumber}</small>}
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={selectedUser.email}
                  onChange={handleChange}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
              <div className="mb-3">
                <label>Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className="form-control"
                    value={selectedUser.password}
                    onChange={handleChange}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={togglePassword}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleSave}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default User;
