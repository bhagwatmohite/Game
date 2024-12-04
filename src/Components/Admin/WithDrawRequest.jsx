// import axios from "axios";
// import { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";
// import { toast, ToastContainer } from "react-toastify";

// const WithDrawRequest = () => {
//   const [withdrawRequests, setWithdrawRequests] = useState([]); // State to store withdraw data from API
//   const [userDetails, setUserDetails] = useState({}); // State to store user details by userId
//   const [searchTerm, setSearchTerm] = useState(''); // State for search term

//   // Fetch withdrawal requests from API on component mount
//   useEffect(() => {

//     const fetchWithdrawRequests = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/getallwithdrawamount');
//         const requests = response.data;
//         setWithdrawRequests(requests);

//         // Fetch user details for each withdrawal request
//         const userRequests = requests.map(async (request) => {
//           const userResponse = await axios.get(`http://localhost:8080/userid/${request.user_Id}`);
//           setUserDetails(prevState => ({
//             ...prevState,
//             [request.user_Id]: userResponse.data,
//           }));
//         });

//         // Wait for all user details to be fetched
//         await Promise.all(userRequests);
//         console.log("Withdraw Requests fetched:", requests);
//       } catch (error) {
//         console.error('Error fetching withdraw requests:', error);
//         toast.error('Error fetching withdraw requests');
//       }
//     };

//     fetchWithdrawRequests();
//   }, []);

//   // Handle search filter
//   const filteredData = withdrawRequests.filter(item => {
//     return (
//       item.id.toString().includes(searchTerm) ||
//       item.user_Id.toString().includes(searchTerm) ||
//       item.withdrawammount.toString().includes(searchTerm) ||
//       item.status.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   });

//   // Define columns for DataTable
//   const columns = [
//     { name: 'ID', selector: row => row.id, sortable: true },
//     { name: 'User ID', selector: row => row.user_Id, sortable: true },
//     { name: 'Amount', selector: row => row.withdrawammount, sortable: true },
//     { name: 'First Name', selector: row => userDetails[row.user_Id]?.firstName || 'N/A', sortable: true },
//     { name: 'Last Name', selector: row => userDetails[row.user_Id]?.lastName || 'N/A', sortable: true },
//     { name: 'Email', selector: row => userDetails[row.user_Id]?.email || 'N/A', sortable: true },
//     { name: 'Mobile Number', selector: row => userDetails[row.user_Id]?.mobileNumber || 'N/A', sortable: true },
//     {
//       name: 'Status',
//       selector: row => row.status,
//       cell: (row) => (
//         <div>
//           {row.status === "PENDING" ? (
//             <a href="#" className="btn btn-warning btn-icon-split btn-sm">
//               <span className="icon text-white-50">
//                 <i className="fas fa-exclamation-triangle"></i>
//               </span>
//               <span className="text">Pending</span>
//             </a>
//           ) : row.status === "APPROVED" ? (
//             <a href="#" className="btn btn-success btn-icon-split btn-sm">
//               <span className="icon text-white-50">
//                 <i className="fas fa-check"></i>
//               </span>
//               <span className="text">Approved</span>
//             </a>
//           ) : (
//             <span>{row.status}</span>
//           )}
//         </div>
//       ),
//       sortable: true,
//     },
//   ];

//   return (
//     <div className="container-fluid">
//       <h1 className="h3 mb-2 text-gray-800">Withdraw Requests</h1>
//       <p className="mb-4">Manage and review withdrawal requests.</p>

//       <div className="card shadow mb-4">
//         <div className="card-header py-3 d-flex justify-content-between align-items-center">
//           <h6 className="m-0 font-weight-bold text-primary">Withdraw Data</h6>

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
//             defaultSortField="id"
//           />
//         </div>
//       </div>

//       {/* Toast container */}
//       <ToastContainer />
//     </div>
//   );
// }

// export default WithDrawRequest;


import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { toast, ToastContainer } from "react-toastify";

const WithDrawRequest = () => {
  const [withdrawRequests, setWithdrawRequests] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  // Function to fetch withdrawal requests and associated user details
  const fetchWithdrawRequests = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getallwithdrawamount');
      const requests = response.data;
      setWithdrawRequests(requests);

      // Fetch user details for each withdrawal request
      const userRequests = requests.map(async (request) => {
        const userResponse = await axios.get(`http://localhost:8080/userid/${request.user_Id}`);
        setUserDetails(prevState => ({
          ...prevState,
          [request.user_Id]: userResponse.data,
        }));
      });

      // Wait for all user details to be fetched
      await Promise.all(userRequests);
    } catch (error) {
      console.error('Error fetching withdraw requests:', error);
      toast.error('Error fetching withdraw requests');
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchWithdrawRequests();
  }, []);

  // Handle approval of a withdrawal request
  const handleApprove = async (withdrawId) => {
    if (window.confirm("Are you sure you want to approve this withdrawal?")) {
      try {
        await axios.put(`http://localhost:8080/approvewithdraw/${withdrawId}`);
        toast.success('Withdrawal approved..!');
        // Re-fetch the withdraw requests after approval
        fetchWithdrawRequests();
      } catch (error) {
        toast.error('Error approving withdrawal..!');
        console.error(error);
      }
    }
  };

  // Filter withdraw requests based on search term
  const filteredData = withdrawRequests.filter(item => {
    return (
      item.id.toString().includes(searchTerm) ||
      item.user_Id.toString().includes(searchTerm) ||
      item.withdrawammount.toString().includes(searchTerm) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Define columns for DataTable
  const columns = [
    { name: 'ID', selector: row => row.id, sortable: true },
    { name: 'User ID', selector: row => row.user_Id, sortable: true },
    { name: 'Amount', selector: row => row.withdrawammount, sortable: true },
    { name: 'First Name', selector: row => userDetails[row.user_Id]?.firstName || 'N/A', sortable: true },
    { name: 'Last Name', selector: row => userDetails[row.user_Id]?.lastName || 'N/A', sortable: true },
    { name: 'Email', selector: row => userDetails[row.user_Id]?.email || 'N/A', sortable: true },
    { name: 'Mobile Number', selector: row => userDetails[row.user_Id]?.mobileNumber || 'N/A', sortable: true },
    {
      name: 'Status',
      selector: row => row.status,
      cell: (row) => (
        <div>
          {row.status === "PENDING" ? (
            // <button onClick={() => handleApprove(row.id)} className="btn btn-warning btn-sm">
            //   Pending
            // </button>
            <a onClick={() => handleApprove(row.id)} className="btn btn-warning btn-icon-split btn-sm">
              <span className="icon text-white-50">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
              <span className="text" style={{ color: 'white' }}>Pending</span>
            </a>
          ) : row.status === "APPROVED" ? (
            // <span className="btn btn-success btn-sm">Approved</span>
            <a className="btn btn-success btn-icon-split btn-sm">
              <span className="icon text-white-50">
                <i className="fas fa-check"></i>
              </span>
              <span className="text" style={{ color: 'white' }}>Approved</span>
            </a>
          ) : (
            <span>{row.status}</span>
          )}
        </div>
      ),
      sortable: true,
    },
  ];

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Withdraw Requests</h1>
      <p className="mb-4">Manage and review withdrawal requests.</p>

      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between align-items-center">
          <h6 className="m-0 font-weight-bold text-primary">Withdraw Data</h6>
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
          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            highlightOnHover
            responsive
            defaultSortField="id"
          />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default WithDrawRequest;
