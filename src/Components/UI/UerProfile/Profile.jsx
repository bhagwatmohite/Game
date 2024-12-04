// /* eslint-disable no-unused-vars */
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import ProfileImage from '../../../assets/ProfileImage.jpg';
// import './Profile.css';

// const Profile = () => {
//   const [totalBalance, setTotalBalance] = useState(0);
//   const [rechargeAmount, setRechargeAmount] = useState(0);
//   const [withdrawAmount, setWithdrawAmount] = useState(0);
//   const [limit, setLimit] = useState(500);
//   const [activeItem, setActiveItem] = useState(0);
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);
//   const [selectedPaymentOption, setSelectedPaymentOption] = useState('Razorpay');
//   const [loading, setLoading] = useState(false); // For spinner
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const userId = localStorage.getItem('userId');
//       if (!userId) {
//         setError('User not found.');
//         return;
//       }

//       try {
//         // Fetch user details
//         const userResponse = await axios.get(`http://localhost:8080/userid/${userId}`);
//         setUser(userResponse.data);

//         // Fetch total balance
//         const balanceResponse = await axios.get(`http://localhost:8080/user/totalamount/${userId}`);
//         setTotalBalance(parseFloat(balanceResponse.data));
//       } catch (err) {
//         console.error('Error fetching user data:', err);
//         setError('Failed to fetch user or balance details.');
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleWithdraw = () => {
//     if (withdrawAmount <= 0 || withdrawAmount > totalBalance) {
//       toast.error('Invalid withdrawal amount. Ensure it is greater than 0 and less than or equal to your balance.');
//       return;
//     }

//     if (withdrawAmount > limit) {
//       toast.error(`You can only withdraw up to ₹ ${limit}.`);
//       return;
//     }

//     setTotalBalance(prevBalance => prevBalance - withdrawAmount);
//     // Simulate API update for balance and save locally for demo purposes
//     localStorage.setItem('totalBalance', totalBalance - withdrawAmount);
//     setWithdrawAmount(0);
//     toast.success('Withdrawal successful!');
//   };

//   const handleItemClick = (index) => {
//     setActiveItem(index);
//   };

//   const initiateRazorpayPayment = async () => {
//     const amountToPay = rechargeAmount;
//     const userId = localStorage.getItem('userId');

//     if (!userId) {
//       toast.error('User not found.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/api/payment/createOrder', null, {
//         params: { amount: parseFloat(amountToPay), userId },
//       });

//       const { id: orderId } = response.data;

//       const options = {
//         key: 'rzp_test_Lg6ChT90hmqx3e',
//         amount: amountToPay * 100,
//         currency: 'INR',
//         name: 'GAMES',
//         description: 'Recharge',
//         image: 'https://example.com/your_logo',
//         order_id: orderId,
//         handler: async function (response) {
//           try {
//             const paymentData = {
//               order_id: orderId,
//               payment_id: response.razorpay_payment_id,
//               status: 'success',
//               userId: userId,
//             };

//             await axios.post('http://localhost:8080/api/payment/updateOrder', paymentData);
//             toast.success('Payment Successful!');

//             // Update balance after successful payment
//             setTotalBalance(prevBalance => prevBalance + amountToPay);
//           } catch (error) {
//             console.error('Error handling payment:', error);
//             toast.error('Payment update failed. Please contact support.');
//           }
//         },
//         theme: {
//           color: '#3399cc',
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();

//       rzp.on('payment.failed', function (response) {
//         toast.error(`Payment Failed: ${response.error.description}`);
//         console.error('Payment Failed:', response);
//       });
//     } catch (error) {
//       console.error('Error initiating Razorpay payment:', error);
//       toast.error('Failed to initiate payment. Please try again.');
//     }
//   };

//   const handlePayment = () => {
//     if (rechargeAmount < 200) {
//       toast.error('Recharge amount must be ₹200 or more.');
//       return;
//     }

//     if (selectedPaymentOption === 'Razorpay') {
//       setLoading(true); // Start the spinner
//       initiateRazorpayPayment().finally(() => {
//         setLoading(false); // Stop the spinner once the payment process is finished
//       });
//     } else {
//       toast.error('Please select a valid payment option.');
//     }
//   };

//   const renderComponent = () => {
//     switch (activeItem) {
//       case 0:
//         return (
//           <div className="profile-balance-info-section">
//             <h1 className="profile-balance-text" style={{ color: 'white', textAlign: 'center' }}>
//               Your Current Balance: ₹ {totalBalance.toFixed(2)}{' '}
//             </h1>
//           </div>
//         );
//       case 1:
//         return (
//           <div className="profile-recharge-section">
//             <h3 className="profile-recharge-title" style={{ color: 'white' }}>Recharge</h3>
//             <input
//               type="number"
//               className="profile-recharge-input"
//               value={rechargeAmount}
//               onChange={(e) => setRechargeAmount(Number(e.target.value))}
//               placeholder="Enter amount to recharge"
//             />
//             <button className="profile-recharge-button" onClick={handlePayment} disabled={loading}>
//               {loading ? <div className="spinner"></div> : 'Recharge'}
//             </button>
//           </div>
//         );
//       case 2:
//         return (
//           <div className="profile-withdraw-section">
//             <h3 className="profile-withdraw-title" style={{ color: 'white' }}>Withdraw</h3>
//             <div className="profile-limit-info-section">
//               <p className="profile-limit-text" style={{ color: 'white' }}>
//                 * Withdraw Request Below: ₹ 500
//               </p>
//             </div>
//             <input
//               type="number"
//               className="profile-withdraw-input"
//               value={withdrawAmount}
//               onChange={(e) => setWithdrawAmount(Number(e.target.value))}
//               placeholder="Enter amount to withdraw"
//             />
//             <button className="profile-withdraw-button" onClick={handleWithdraw}>Withdraw</button>
//           </div>
//         );
//       case 3:
//         navigate('/game');
//         return null;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="profile-page-container">
//       <ToastContainer />
//       <div className="profile-layout-row">
//         <div className="profile-sidebar">
//           <div className="profile-header-section">
//             <img src={ProfileImage} alt="User Avatar" className="profile-avatar-img" />
//             <h5 className="profile-username-text" style={{ color: 'white' }}>
//               {user ? `${user.firstName} ${user.lastName}` : ''}
//             </h5>
//             <p className="profile-user-level-text">{user ? user.mobileNumber : ''}</p>
//             <p className="profile-user-level-text">{user ? user.email : ''}</p>
//           </div>

//           <ul className="profile-sidebar-nav">
//             <li
//               className={`profile-sidebar-nav-item ${activeItem === 0 ? 'active' : ''}`}
//               onClick={() => handleItemClick(0)}
//             >
//               Your Balance/Wallet
//             </li>
//             <li
//               className={`profile-sidebar-nav-item ${activeItem === 1 ? 'active' : ''}`}
//               onClick={() => handleItemClick(1)}
//             >
//               Recharge
//             </li>
//             <li
//               className={`profile-sidebar-nav-item ${activeItem === 2 ? 'active' : ''}`}
//               onClick={() => handleItemClick(2)}
//             >
//               Withdraw
//             </li>
//             <li
//               className={`profile-sidebar-nav-item ${activeItem === 3 ? 'active' : ''}`}
//               onClick={() => handleItemClick(3)}
//             >
//               Play Game
//             </li>
//           </ul>
//         </div>

//         <div className="profile-main-content">
//           <div className="profile-card">
//             <div className="profile-card-body">{renderComponent()}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

//29.11.2024

/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import ProfileImage from '../../../assets/ProfileImage.jpg';
import './Profile.css';

const Profile = () => {
  const [totalBalance, setTotalBalance] = useState(0);
  const [rechargeAmount, setRechargeAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [limit, setLimit] = useState(500); // Withdrawal limit
  const [activeItem, setActiveItem] = useState(0);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('Razorpay');
  const [loading, setLoading] = useState(false); // For spinner
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setError('User not found.');
        return;
      }

      try {
        // Fetch user details
        const userResponse = await axios.get(`http://localhost:8080/userid/${userId}`);
        setUser(userResponse.data);

        // Fetch total balance
        const balanceResponse = await axios.get(`http://localhost:8080/user/totalamount/${userId}`);
        setTotalBalance(parseFloat(balanceResponse.data));
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to fetch user or balance details.');
      }
    };

    fetchUserData();
  }, []);

  const handleWithdraw = async () => {
    const userId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage

    if (!userId) {
      toast.error('User not found.');
      return;
    }

    // Condition 1: Check if withdrawal amount is less than ₹500
    if (withdrawAmount > limit) {
      toast.error('Your withdrawal amount must be less than ₹500');
      return;
    }

    // Condition 2: Check if withdrawal amount is less than or equal to total balance
    if (withdrawAmount <= 0 || withdrawAmount > totalBalance) {
      toast.error('Your withdrawal amount must be less than or equal to your total balance');
      return;
    }

    setLoading(true); // Start the loading spinner

    try {
      // Prepare the data to match the backend entity
      const withdrawalData = {
        user_Id: Number(userId),
        withdrawammount: withdrawAmount,
        status: 'PENDING',
      };

      // Make the API call to save the withdrawal request
      const response = await axios.post('http://localhost:8080/addwithdrawammount', withdrawalData);

      // Update the UI upon successful response
      setTotalBalance((prevBalance) => prevBalance - withdrawAmount);
      setWithdrawAmount(0);

      toast.success('Withdrawal request submitted successfully!');
    } catch (error) {
      console.error('Error during withdrawal:', error);
      toast.error('Failed to process withdrawal. Please try again.');
    } finally {
      setLoading(false); // Stop the loading spinner
    }
  };

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const initiateRazorpayPayment = async () => {
    const amountToPay = rechargeAmount;
    const userId = localStorage.getItem('userId');

    if (!userId) {
      toast.error('User not found.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/payment/createOrder', null, {
        params: { amount: parseFloat(amountToPay), userId },
      });

      const { id: orderId } = response.data;

      const options = {
        key: 'rzp_test_Lg6ChT90hmqx3e',
        amount: amountToPay * 100,
        currency: 'INR',
        name: 'GAMES',
        description: 'Recharge',
        image: 'https://example.com/your_logo',
        order_id: orderId,
        handler: async function (response) {
          try {
            const paymentData = {
              order_id: orderId,
              payment_id: response.razorpay_payment_id,
              status: 'success',
              userId: userId,
            };

            await axios.post('http://localhost:8080/api/payment/updateOrder', paymentData);
            toast.success('Payment Successful!');

            // Update balance after successful payment
            setTotalBalance(prevBalance => prevBalance + amountToPay);
          } catch (error) {
            console.error('Error handling payment:', error);
            toast.error('Payment update failed. Please contact support.');
          }
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on('payment.failed', function (response) {
        toast.error(`Payment Failed: ${response.error.description}`);
        console.error('Payment Failed:', response);
      });
    } catch (error) {
      console.error('Error initiating Razorpay payment:', error);
      toast.error('Failed to initiate payment. Please try again.');
    }
  };

  const handlePayment = () => {
    if (rechargeAmount < 200) {
      toast.error('Recharge amount must be ₹200 or more.');
      return;
    }

    if (selectedPaymentOption === 'Razorpay') {
      setLoading(true); // Start the spinner
      initiateRazorpayPayment().finally(() => {
        setLoading(false); // Stop the spinner once the payment process is finished
      });
    } else {
      toast.error('Please select a valid payment option.');
    }

  };

  const renderComponent = () => {
    switch (activeItem) {
      case 0:
        return (
          <div className="profile-balance-info-section">
            <h1 className="profile-balance-text" style={{ color: 'white', textAlign: 'center' }}>
              Your Current Balance: ₹ {totalBalance.toFixed(2)}{' '}
            </h1>
          </div>
        );
      case 1:
        return (
          <div className="profile-recharge-section">
            <h3 className="profile-recharge-title" style={{ color: 'white' }}>Recharge</h3>
            <input
              type="number"
              className="profile-recharge-input"
              value={rechargeAmount}
              onChange={(e) => setRechargeAmount(Number(e.target.value))}
              placeholder="Enter amount to recharge"
            />
            <button className="profile-recharge-button" onClick={handlePayment} disabled={loading}>
              {loading ? <div className="spinner" style={{ width: '2%', height: '2%' }}></div> : 'Recharge'}
            </button>
          </div>
        );
      case 2:
        return (
          <div className="profile-withdraw-section">
            <h3 className="profile-withdraw-title" style={{ color: 'white' }}>Withdraw</h3>
            <div className="profile-limit-info-section">
              <p className="profile-limit-text" style={{ color: 'white' }}>
                * Withdrawal Request Below: ₹500
              </p>
            </div>
            <input
              type="number"
              className="profile-withdraw-input"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(Number(e.target.value))}
              placeholder="Enter amount to withdraw"
            />

            <button className="profile-withdraw-button" onClick={handleWithdraw} disabled={loading}>
              {loading ? <div className="spinner" style={{ width: '2%', height: '2%' }}></div> : 'Withdraw'}
            </button>
          </div>
        );
      case 3:
        navigate('/game');
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="profile-page-container">
      <ToastContainer />
      <div className="profile-layout-row">
        <div className="profile-sidebar">
          <div className="profile-header-section">
            <img src={ProfileImage} alt="User Avatar" className="profile-avatar-img" />
            <h5 className="profile-username-text" style={{ color: 'white' }}>
              {user ? `${user.firstName} ${user.lastName}` : ''}
            </h5>
            <p className="profile-user-level-text">{user ? user.mobileNumber : ''}</p>
            <p className="profile-user-level-text">{user ? user.email : ''}</p>
          </div>

          <ul className="profile-sidebar-nav">
            <li
              className={`profile-sidebar-nav-item ${activeItem === 0 ? 'active' : ''}`}
              onClick={() => handleItemClick(0)}
            >
              Your Balance/Wallet
            </li>
            <li
              className={`profile-sidebar-nav-item ${activeItem === 1 ? 'active' : ''}`}
              onClick={() => handleItemClick(1)}
            >
              Recharge
            </li>
            <li
              className={`profile-sidebar-nav-item ${activeItem === 2 ? 'active' : ''}`}
              onClick={() => handleItemClick(2)}
            >
              Withdraw
            </li>
            <li
              className={`profile-sidebar-nav-item ${activeItem === 3 ? 'active' : ''}`}
              onClick={() => handleItemClick(3)}
            >
              Play Game
            </li>
          </ul>
        </div>

        <div className="profile-main-content">
          <div className="profile-card">
            <div className="profile-card-body">{renderComponent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
