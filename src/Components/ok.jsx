
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './GameDashboard1.css';

// const GameDashboard1 = ({ onLogout }) => {

//   const animalData = [
//     { id: 1, image: '/ele.jpg', value: 200 },
//     { id: 2, image: '/cat.jpeg', value: 170 },
//     { id: 3, image: '/loin.jpeg', value: 60 },
//     { id: 4, image: '/ele.jpg', value: 160 },
//     { id: 5, image: '/ele.jpg', value: 50 },
//     { id: 6, image: '/ele.jpg', value: 120 },
//     { id: 7, image: '/ele.jpg', value: 90 },
//     { id: 8, image: '/ele.jpg', value: 250 },
//     { id: 9, image: '/ele.jpg', value: 90 },
//     { id: 10, image: '/ele.jpg', value: 100 },
//     { id: 11, image: '/ele.jpg', value: 180 },
//     { id: 12, image: '/ele.jpg', value: 250 }
//   ];


//   const handleLogout = () => {
//     onLogout();
//     toast.success('Logout successful!'); // Show success toast

//   };

//   return (
//     <>
//       <div className='body1'>
//         <ToastContainer></ToastContainer>
//         <div className="container-fluid game-ui">
//           <header className="header d-flex align-items-center justify-content-between">
//             <img src="/logo12.png" alt="Big Diamond Logo" className="logo" />

//             {/* Fixed position for the Total Balance and Winning Points */}
//             <div className="d-flex balance-and-numbers-wrapper">
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Total Balance</p>
//                 <h2 className="balance-value">10560</h2>
//               </div>

//               {/* The numbers will be centered between the two balance sections */}
//               <div className="numbers-wrapper">
//                 {['11', '2', '5', '8', '5', '10', '10', '2', '8', '5', '10', '10', '2'].map((num, index) => (
//                   <span key={index} className="number-item">{num}</span>
//                 ))}
//               </div>

//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Winning Points</p>
//                 <h2 className="balance-value">0</h2>
//               </div>
//             </div>
//           </header>


//           <div className="row animal-chips">
//             <div className="col-2 col-md-1 left-chips">
//               {[10, 30, 40, 50].map((bet, index) => (
//                 <div
//                   key={index}
//                   className={`chip chip-color-${index + 1}`} // Dynamically assign class
//                 >
//                   {bet}
//                 </div>
//               ))}
//             </div>

//             {/* <div className="col-8 col-md-10 animal-cards">
//           <div className="row">
//             {animalData.map((animal, index) => (
//               <div key={animal.id} className="col-6 col-md-2 p-2">
//                 <div className="animal-card">
//                   <div className="card-number">{index + 1}</div>
//                   <img src={animal.image} alt={`Animal ${animal.id}`} className="animal-img" />
//                   <div className="card-value">{animal.value}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div> */}
//             <div className="col-8 col-md-10 animal-cards">
//               <div className="row">
//                 {animalData.map((animal, index) => {
//                   // Define an array of different background gradients for the cards
//                   const colors = [
//                     'linear-gradient(to bottom, #fc0b03, #32a89b)',
//                     'linear-gradient(to bottom, #037bfc, #22b045)',
//                     'linear-gradient(to bottom, #03fc3d, #a96d58)',
//                     'linear-gradient(to bottom, #f542da, #03fc3d)',
//                     'linear-gradient(to bottom, #03fc3d, #03f4fc)',
//                     'linear-gradient(to bottom, #03f4fc, #9cbf38)',
//                     'linear-gradient(to bottom, #fc03eb, #d64128)',
//                     'linear-gradient(to bottom, #fc03eb, #2e2d28)',
//                     'linear-gradient(to bottom, #fca503, #56723b)',
//                     'linear-gradient(to bottom, #fca503, #2dfc03)',
//                     'linear-gradient(to bottom, #f0b1ef, #fceb03)',
//                     'linear-gradient(to bottom, #9dba88, #03a9fc)'
//                   ];

//                   // Function to get a card color based on an index, looping through the colors array
//                   const cardColor = (index) => colors[index % colors.length];

//                   return (
//                     <div key={animal.id} className="col-6 col-md-2 p-2">
//                       <div
//                         className="animal-card"
//                         style={{ background: cardColor(index) }}
//                       >
//                         <div className="card-number">{index + 1}</div>
//                         <img src={animal.image} alt={`Animal ${animal.id}`} className="animal-img" style={{ width: '150px', height: '100px' }} />
//                         <div className="card-value">{animal.value}</div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>



//             <div className="col-2 col-md-1 right-chips">
//               {[100, 500, 1000, 5000].map((bet, index) => (
//                 <div key={index} className={`chip chip-colorr-${index + 1}`}>{bet}</div>
//               ))}
//             </div>
//           </div>

//           <div className="bottom-section row">
//             <div className="col-4 col-md-2 points-section">

//               <p style={{ color: 'white' }}>Played Points</p>
//               <h2 className="balance-value" >1720</h2>
//             </div>

//             <div className="col-8 col-md-7 control-buttons-wrapper text-center">
//               <div className="control-buttons">
//                 <button className="btn">Cancel All Bet</button>
//                 <button className="btn">Cancel Previous Bet</button>
//                 <button className="btn">Upper Line</button>
//                 <button className="btn">Lower Line</button>
//                 <button className="btn">Odd Number</button>
//                 <button className="btn">Even Number</button>

//                 <button className="btn clear-btn" style={{ backgroundColor: '#33FF57' }}>Clear</button>
//                 <i onClick={handleLogout} className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
//               </div>
//             </div>

//             <div className="col-12 col-md-2 timer-section text-center">
//               <h1 className="timer">01:25</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default GameDashboard1

// used dyanmic data in front end


// import { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './GameDashboard1.css';

// const GameDashboard1 = ({ onLogout }) => {
//   // Local state for animal data and clicked numbers
//   const [animalData, setAnimalData] = useState([]);
//   const [clickedNumbers, setClickedNumbers] = useState([]);

//   useEffect(() => {
//     // Fetch animal data from API when the component mounts
//     fetch('http://localhost:8080/getallimages')
//       .then(response => response.json())
//       .then(data => {
//         // Map the API response to the required format with default values (e.g., value = 0)
//         const formattedData = data.map(item => ({
//           number: item.number, // Use the "number" from the API as the identifier
//           image: item.imagePath,
//           value: 0, // Initial value set to 0
//         }));
//         setAnimalData(formattedData);
//       })
//       .catch(error => {
//         console.error('Error fetching animal data:', error);
//         toast.error('Failed to load animal data!');
//       });
//   }, []);

//   // Handle value increment
//   const handleIncrement = (number) => {
//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number === number ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );

//     // Add the clicked number to the clickedNumbers array, ensuring only the last 10 numbers are stored
//     setClickedNumbers(prevNumbers => {
//       const updatedNumbers = [...prevNumbers, number];
//       return updatedNumbers.slice(-10); // Keep only the last 10 numbers
//     });
//   };

//   // Handle value decrement
//   const handleDecrement = (number) => {
//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number === number ? { ...animal, value: Math.max(0, animal.value - 10) } : animal
//       )
//     );
//   };

//   const handleLogout = () => {
//     onLogout();
//     toast.success('Logout successful!');
//   };

//   return (
//     <>
//       <div className='body1'>
//         <ToastContainer />
//         <div className="container-fluid game-ui">
//           <header className="header d-flex align-items-center justify-content-between">
//             <img src="/logo12.png" alt="Big Diamond Logo" className="logo" />
//             <div className="d-flex balance-and-numbers-wrapper">
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Total Balance</p>
//                 <h2 className="balance-value">10560</h2>
//               </div>
//               <div className="numbers-wrapper">
//                 {clickedNumbers.map((num, index) => (
//                   <span key={index} className="number-item">{num}</span>
//                 ))}
//               </div>
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Winning Points</p>
//                 <h2 className="balance-value">0</h2>
//               </div>
//             </div>
//           </header>

//           <div className="row animal-chips">
//             <div className="col-2 col-md-1 left-chips">
//               {[10, 30, 40, 50].map((bet, index) => (
//                 <div key={index} className={`chip chip-color-${index + 1}`}>{bet}</div>
//               ))}
//             </div>

//             <div className="col-8 col-md-10 animal-cards">
//               <div className="row">
//                 {animalData.map((animal, index) => {
//                   const colors = [
//                     'linear-gradient(to bottom, #fc0b03, #32a89b)',
//                     'linear-gradient(to bottom, #037bfc, #22b045)',
//                     'linear-gradient(to bottom, #03fc3d, #a96d58)',
//                     'linear-gradient(to bottom, #f542da, #03fc3d)',
//                     'linear-gradient(to bottom, #03fc3d, #03f4fc)',
//                     'linear-gradient(to bottom, #03f4fc, #9cbf38)',
//                     'linear-gradient(to bottom, #fc03eb, #d64128)',
//                     'linear-gradient(to bottom, #fc03eb, #2e2d28)',
//                     'linear-gradient(to bottom, #fca503, #56723b)',
//                     'linear-gradient(to bottom, #fca503, #2dfc03)',
//                     'linear-gradient(to bottom, #f0b1ef, #fceb03)',
//                     'linear-gradient(to bottom, #9dba88, #03a9fc)'
//                   ];

//                   const cardColor = (index) => colors[index % colors.length];

//                   return (
//                     <div key={animal.number} className="col-6 col-md-2 p-2">
//                       <div className="animal-card" style={{ background: cardColor(index) }}>
//                         <div className="card-number">{animal.number}</div>
//                         <img
//                           src={animal.image}
//                           alt={`Animal ${animal.number}`}
//                           className="animal-img"
//                           style={{ width: '150px', height: '100px' }}
//                         />
//                         <div className="card-value">
//                           <button onClick={() => handleDecrement(animal.number)} className="btn btn-decrement">-</button>
//                           {animal.value}
//                           <button onClick={() => handleIncrement(animal.number)} className="btn btn-increment">+</button>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="col-2 col-md-1 right-chips">
//               {[100, 500, 1000, 5000].map((bet, index) => (
//                 <div key={index} className={`chip chip-colorr-${index + 1}`}>{bet}</div>
//               ))}
//             </div>
//           </div>

//           <div className="bottom-section row">
//             <div className="col-4 col-md-2 points-section">
//               <p style={{ color: 'white' }}>Played Points</p>
//               <h2 className="balance-value">1720</h2>
//             </div>

//             <div className="col-8 col-md-7 control-buttons-wrapper text-center">
//               <div className="control-buttons">
//                 <button className="btn">Cancel All Bet</button>
//                 <button className="btn">Cancel Previous Bet</button>
//                 <button className="btn">Upper Line</button>
//                 <button className="btn">Lower Line</button>
//                 <button className="btn">Odd Number</button>
//                 <button className="btn">Even Number</button>
//                 <button className="btn clear-btn" style={{ backgroundColor: '#33FF57' }}>Clear</button>
//                 <i onClick={handleLogout} className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
//               </div>
//             </div>

//             <div className="col-12 col-md-2 timer-section text-center">
//               <h1 className="timer">01:25</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default GameDashboard1;

// after adding all cancel button filter

// -----------------do on e-----------

// import { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './GameDashboard1.css';

// const GameDashboard1 = ({ onLogout }) => {
//   // Local state for animal data and clicked numbers
//   const [animalData, setAnimalData] = useState([]);
//   const [clickedNumbers, setClickedNumbers] = useState([]);

//   useEffect(() => {
//     // Fetch animal data from API when the component mounts
//     fetch('http://localhost:8080/getallimages')
//       .then(response => response.json())
//       .then(data => {
//         // Map the API response to the required format with default values (e.g., value = 0)
//         const formattedData = data.map(item => ({
//           number: item.number, // Use the "number" from the API as the identifier
//           image: item.imagePath,
//           value: 0, // Initial value set to 0
//         }));
//         setAnimalData(formattedData);
//       })
//       .catch(error => {
//         console.error('Error fetching animal data:', error);
//         toast.error('Failed to load animal data!');
//       });
//   }, []);

//   // Handle value increment
//   const handleIncrement = (number) => {
//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number === number ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );

//     // Add the clicked number to the clickedNumbers array, ensuring only the last 10 numbers are stored
//     setClickedNumbers(prevNumbers => {
//       const updatedNumbers = [...prevNumbers, number];
//       return updatedNumbers.slice(-10); // Keep only the last 10 numbers
//     });
//   };

//   // Handle value decrement
//   const handleDecrement = (number) => {
//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number === number ? { ...animal, value: Math.max(0, animal.value - 10) } : animal
//       )
//     );
//   };

//   // Cancel All Bet
//   const handleCancelAllBet = () => {
//     setAnimalData(prevData =>
//       prevData.map(animal => ({ ...animal, value: 0 })) // Reset all animal values to 0
//     );
//     setClickedNumbers([]); // Clear the clicked numbers
//     toast.info('All bets have been canceled!');
//   };

//   // Cancel Previous Bet
//   const handleCancelPreviousBet = () => {
//     const lastClickedNumber = clickedNumbers[clickedNumbers.length - 1];
//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number === lastClickedNumber ? { ...animal, value: 0 } : animal
//       )
//     );
//     setClickedNumbers(prevNumbers => prevNumbers.slice(0, -1)); // Remove the last clicked number
//     toast.info('Previous bet has been canceled!');
//   };

//   // Upper Line (First 6 animals)
//   const handleUpperLine = () => {
//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index < 6 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     toast.info('Upper line increased by 10 points!');
//   };

//   // Lower Line (Last 6 animals)
//   const handleLowerLine = () => {
//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index >= prevData.length - 6 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     toast.info('Lower line increased by 10 points!');
//   };

//   // Odd Number
//   const handleOddNumber = () => {
//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 !== 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     toast.info('Odd numbers increased by 10 points!');
//   };

//   // Even Number
//   const handleEvenNumber = () => {
//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 === 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     toast.info('Even numbers increased by 10 points!');
//   };

//   const handleLogout = () => {
//     onLogout();
//     toast.success('Logout successful!');
//   };

//   return (
//     <>
//       <div className='body1'>
//         <ToastContainer />
//         <div className="container-fluid game-ui">
//           <header className="header d-flex align-items-center justify-content-between">
//             <img src="/logo12.png" alt="Big Diamond Logo" className="logo" />
//             <div className="d-flex balance-and-numbers-wrapper">
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Total Balance</p>
//                 <h2 className="balance-value">10560</h2>
//               </div>
//               <div className="numbers-wrapper">
//                 {clickedNumbers.map((num, index) => (
//                   <span key={index} className="number-item">{num}</span>
//                 ))}
//               </div>
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Winning Points</p>
//                 <h2 className="balance-value">0</h2>
//               </div>
//             </div>
//           </header>

//           <div className="row animal-chips">
//             <div className="col-2 col-md-1 left-chips">
//               {[10, 30, 40, 50].map((bet, index) => (
//                 <div key={index} className={`chip chip-color-${index + 1}`}>{bet}</div>
//               ))}
//             </div>

//             <div className="col-8 col-md-10 animal-cards">
//               <div className="row">
//                 {animalData.map((animal, index) => {
//                   const colors = [
//                     'linear-gradient(to bottom, #fc0b03, #32a89b)',
//                     'linear-gradient(to bottom, #037bfc, #22b045)',
//                     'linear-gradient(to bottom, #03fc3d, #a96d58)',
//                     'linear-gradient(to bottom, #f542da, #03fc3d)',
//                     'linear-gradient(to bottom, #03fc3d, #03f4fc)',
//                     'linear-gradient(to bottom, #03f4fc, #9cbf38)',
//                     'linear-gradient(to bottom, #fc03eb, #d64128)',
//                     'linear-gradient(to bottom, #fc03eb, #2e2d28)',
//                     'linear-gradient(to bottom, #fca503, #56723b)',
//                     'linear-gradient(to bottom, #fca503, #2dfc03)',
//                     'linear-gradient(to bottom, #f0b1ef, #fceb03)',
//                     'linear-gradient(to bottom, #9dba88, #03a9fc)'
//                   ];

//                   const cardColor = (index) => colors[index % colors.length];

//                   return (
//                     <div key={animal.number} className="col-6 col-md-2 p-2">
//                       <div className="animal-card" style={{ background: cardColor(index) }}>
//                         <div className="card-number">{animal.number}</div>
//                         <img
//                           src={animal.image}
//                           alt={`Animal ${animal.number}`}
//                           className="animal-img"
//                           style={{ width: '150px', height: '100px' }}
//                         />
//                         <div className="card-value">
//                           <button onClick={() => handleDecrement(animal.number)} className="btn btn-decrement">-</button>
//                           {animal.value}
//                           <button onClick={() => handleIncrement(animal.number)} className="btn btn-increment">+</button>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="col-2 col-md-1 right-chips">
//               {[100, 500, 1000, 5000].map((bet, index) => (
//                 <div key={index} className={`chip chip-colorr-${index + 1}`}>{bet}</div>
//               ))}
//             </div>
//           </div>

//           <div className="bottom-section row">
//             <div className="col-4 col-md-2 points-section">
//               <p style={{ color: 'white' }}>Played Points</p>
//               <h2 className="balance-value">1720</h2>
//             </div>

//             <div className="col-8 col-md-7 control-buttons-wrapper text-center">
//               <div className="control-buttons">
//                 <button onClick={handleCancelAllBet} className="btn">Cancel All Bet</button>
//                 <button onClick={handleCancelPreviousBet} className="btn">Cancel Previous Bet</button>
//                 <button onClick={handleUpperLine} className="btn">Upper Line</button>
//                 <button onClick={handleLowerLine} className="btn">Lower Line</button>
//                 <button onClick={handleOddNumber} className="btn">Odd Number</button>
//                 <button onClick={handleEvenNumber} className="btn">Even Number</button>
//                 <button className="btn clear-btn" style={{ backgroundColor: '#33FF57' }}>Clear</button>
//                 <i onClick={handleLogout} className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
//               </div>
//             </div>

//             <div className="col-12 col-md-2 timer-section text-center">
//               <h1 className="timer">01:25</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default GameDashboard1;


// import { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './GameDashboard1.css';

// const GameDashboard1 = ({ onLogout }) => {
//   // Local state for animal data, clicked numbers, played points, and timer state
//   const [animalData, setAnimalData] = useState([]);
//   const [clickedNumbers, setClickedNumbers] = useState([]);
//   const [playedPoints, setPlayedPoints] = useState(200); // Default played points
//   const [timer, setTimer] = useState(120); // Timer starts from 120 seconds (2 minutes)
//   const [isBettingAllowed, setIsBettingAllowed] = useState(true); // To control if betting is allowed

//   useEffect(() => {
//     // Fetch animal data from API when the component mounts
//     fetch('http://localhost:8080/getallimages')
//       .then(response => response.json())
//       .then(data => {
//         const formattedData = data.map(item => ({
//           number: item.number,
//           image: item.imagePath,
//           value: 0,
//         }));
//         setAnimalData(formattedData);
//       })
//       .catch(error => {
//         console.error('Error fetching animal data:', error);
//         toast.error('Failed to load animal data!');
//       });

//     // Start the timer
//     const timerInterval = setInterval(() => {
//       setTimer(prevTime => {
//         if (prevTime === 1) {
//           clearInterval(timerInterval); // Stop the timer when it reaches 0
//           endGame();
//           setIsBettingAllowed(false); // Disable betting
//         }
//         return prevTime - 1;
//       });
//     }, 1000); // Decrease the timer by 1 second every second

//     return () => clearInterval(timerInterval); // Cleanup on component unmount
//   }, []);

//   const endGame = () => {
//     // Calculate the winning points after the timer reaches 0
//     const totalWinningPoints = clickedNumbers.reduce((total, num) => {
//       const animal = animalData.find(animal => animal.number === num);
//       return total + (animal?.value || 0);
//     }, 0);

//     // Display winning points in toast message
//     toast.info(`Game Over! Total Winning Points: ${totalWinningPoints}`);
//   };

//   // Handle value increment and update played points
//   const handleIncrement = (number) => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number === number ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );

//     setPlayedPoints(prevPoints => prevPoints - 10); // Decrease played points when a bet is placed

//     // Add the clicked number to the clickedNumbers array, ensuring only the last 10 numbers are stored
//     setClickedNumbers(prevNumbers => {
//       const updatedNumbers = [...prevNumbers, number];
//       return updatedNumbers.slice(-10); // Keep only the last 10 numbers
//     });
//   };

//   // Handle value decrement and update played points
//   const handleDecrement = (number) => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number === number ? { ...animal, value: Math.max(0, animal.value - 10) } : animal
//       )
//     );

//     setPlayedPoints(prevPoints => prevPoints + 10); // Increase played points when a bet is canceled
//   };

//   // Cancel All Bet and reset played points
//   const handleCancelAllBet = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal => ({ ...animal, value: 0 }))
//     );
//     setClickedNumbers([]); // Clear the clicked numbers
//     setPlayedPoints(200); // Reset played points to initial value

//     toast.info('All bets have been canceled!');
//   };

//   // Cancel Previous Bet and update played points
//   const handleCancelPreviousBet = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     const lastClickedNumber = clickedNumbers[clickedNumbers.length - 1];

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number === lastClickedNumber ? { ...animal, value: 0 } : animal
//       )
//     );

//     setClickedNumbers(prevNumbers => prevNumbers.slice(0, -1)); // Remove the last clicked number
//     setPlayedPoints(prevPoints => prevPoints + 10); // Increase played points when the last bet is canceled

//     toast.info('Previous bet has been canceled!');
//   };

//   // Handle Upper Line bet and update played points
//   const handleUpperLine = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index < 6 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setPlayedPoints(prevPoints => prevPoints - 60); // Decrease played points when upper line is bet

//     toast.info('Upper line increased by 10 points!');
//   };

//   // Handle Lower Line bet and update played points
//   const handleLowerLine = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index >= prevData.length - 6 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setPlayedPoints(prevPoints => prevPoints - 60); // Decrease played points when lower line is bet

//     toast.info('Lower line increased by 10 points!');
//   };

//   // Handle Odd Number bet and update played points
//   const handleOddNumber = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 !== 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setPlayedPoints(prevPoints => prevPoints - 50); // Decrease played points when odd numbers are bet

//     toast.info('Odd numbers increased by 10 points!');
//   };

//   // Handle Even Number bet and update played points
//   const handleEvenNumber = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 === 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setPlayedPoints(prevPoints => prevPoints - 50); // Decrease played points when even numbers are bet

//     toast.info('Even numbers increased by 10 points!');
//   };

//   const handleLogout = () => {
//     onLogout();
//     toast.success('Logout successful!');
//   };

//   return (
//     <>
//       <div className="body1">
//         <ToastContainer />
//         <div className="container-fluid game-ui">
//           <header className="header d-flex align-items-center justify-content-between">
//             <img src="/logo12.png" alt="Big Diamond Logo" className="logo" />
//             <div className="d-flex balance-and-numbers-wrapper">
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Total Balance</p>
//                 <h2 className="balance-value">560</h2>
//               </div>
//               <div className="numbers-wrapper">
//                 {clickedNumbers.map((num, index) => (
//                   <span key={index} className="number-item">{num}</span>
//                 ))}
//               </div>
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Winning Points</p>
//                 <h2 className="balance-value">{clickedNumbers.reduce((total, num) => {
//                   const animal = animalData.find(animal => animal.number === num);
//                   return total + (animal?.value || 0);
//                 }, 0)}</h2>
//               </div>
//             </div>
//           </header>

//           <div className="row animal-chips">
//             <div className="col-2 col-md-1 left-chips">
//               {[10, 30, 40, 50].map((bet, index) => (
//                 <div key={index} className={`chip chip-color-${index + 1}`}>{bet}</div>
//               ))}
//             </div>

//             <div className="col-8 col-md-10 animal-cards">
//               <div className="row">
//                 {animalData.map((animal, index) => {
//                   const colors = [
//                     'linear-gradient(to bottom, #fc0b03, #32a89b)',
//                     'linear-gradient(to bottom, #037bfc, #22b045)',
//                     'linear-gradient(to bottom, #03fc3d, #a96d58)',
//                     'linear-gradient(to bottom, #f542da, #03fc3d)',
//                     'linear-gradient(to bottom, #03fc3d, #03f4fc)',
//                     'linear-gradient(to bottom, #03f4fc, #9cbf38)',
//                     'linear-gradient(to bottom, #fc03eb, #d64128)',
//                     'linear-gradient(to bottom, #fc03eb, #2e2d28)',
//                     'linear-gradient(to bottom, #fca503, #56723b)',
//                     'linear-gradient(to bottom, #fca503, #2dfc03)',
//                     'linear-gradient(to bottom, #f0b1ef, #fceb03)',
//                     'linear-gradient(to bottom, #9dba88, #03a9fc)'
//                   ];

//                   const cardColor = (index) => colors[index % colors.length];

//                   return (
//                     <div key={animal.number} className="col-6 col-md-2 p-2">
//                       <div className="animal-card" style={{ background: cardColor(index) }}>
//                         <div className="card-number">{animal.number}</div>
//                         <img
//                           src={animal.image}
//                           alt={`Animal ${animal.number}`}
//                           className="animal-img"
//                           style={{ width: '150px', height: '100px' }}
//                         />
//                         <div className="card-value">
//                           <button onClick={() => handleDecrement(animal.number)} className="btn btn-decrement">-</button>
//                           {animal.value}
//                           <button onClick={() => handleIncrement(animal.number)} className="btn btn-increment">+</button>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="col-2 col-md-1 right-chips">
//               {[100, 500, 1000, 5000].map((bet, index) => (
//                 <div key={index} className={`chip chip-colorr-${index + 1}`}>{bet}</div>
//               ))}
//             </div>
//           </div>

//           <div className="bottom-section row">
//             <div className="col-4 col-md-2 points-section">
//               <p style={{ color: 'white' }}>Played Points</p>
//               <h2 className="balance-value">{playedPoints}</h2>
//             </div>

//             <div className="col-8 col-md-7 control-buttons-wrapper text-center">
//               <div className="control-buttons">
//                 <button onClick={handleCancelAllBet} className="btn">Cancel All Bet</button>
//                 <button onClick={handleCancelPreviousBet} className="btn">Cancel Previous Bet</button>
//                 <button onClick={handleUpperLine} className="btn">Upper Line</button>
//                 <button onClick={handleLowerLine} className="btn">Lower Line</button>
//                 <button onClick={handleOddNumber} className="btn">Odd Number</button>
//                 <button onClick={handleEvenNumber} className="btn">Even Number</button>
//                 <button className="btn clear-btn" style={{ backgroundColor: '#33FF57' }}>Clear</button>
//                 <i onClick={handleLogout} className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
//               </div>
//             </div>

//             <div className="col-12 col-md-2 timer-section text-center">
//               <h1 className="timer">
//                 {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default GameDashboard1;



// import { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './GameDashboard1.css';

// const GameDashboard1 = ({ onLogout }) => {
//   const [animalData, setAnimalData] = useState([]);
//   const [clickedNumbers, setClickedNumbers] = useState([]);  // Store only the clicked numbers
//   const [playedPoints, setPlayedPoints] = useState(200);  // Default played points
//   const [timer, setTimer] = useState(120);  // Timer starts from 120 seconds
//   const [isBettingAllowed, setIsBettingAllowed] = useState(true);  // To control if betting is allowed

//   useEffect(() => {
//     fetch('http://localhost:8080/getallimages')
//       .then(response => response.json())
//       .then(data => {
//         const formattedData = data.map(item => ({
//           number: item.number,
//           image: item.imagePath,
//           value: 0, // Initialize value
//         }));
//         setAnimalData(formattedData);
//       })
//       .catch(error => {
//         console.error('Error fetching animal data:', error);
//         toast.error('Failed to load animal data!');
//       });

//     const timerInterval = setInterval(() => {
//       setTimer(prevTime => {
//         if (prevTime === 1) {
//           clearInterval(timerInterval);
//           endGame();
//           setIsBettingAllowed(false);  // Disable betting after time is up
//         }
//         return prevTime - 1;
//       });
//     }, 1000);  // Decrease the timer by 1 second every second

//     return () => clearInterval(timerInterval);  // Cleanup on component unmount
//   }, []);

//   const endGame = () => {
//     const totalWinningPoints = clickedNumbers.reduce((total, num) => {
//       const animal = animalData.find(animal => animal.number === num);
//       return total + (animal?.value || 0);
//     }, 0);

//     toast.info(`Game Over! Total Winning Points: ${totalWinningPoints}`);
//   };

//   // Handle value increment and update played points
//   const handleIncrement = (number) => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number === number ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );

//     setPlayedPoints(prevPoints => prevPoints - 10);

//     setClickedNumbers(prevNumbers => {
//       const updatedNumbers = [...prevNumbers, number];
//       return updatedNumbers;  // Add the number to the clicked list
//     });
//   };

//   // Handle value decrement and update played points
//   const handleDecrement = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     // Remove the most recent clicked number from the clickedNumbers list
//     setClickedNumbers(prevNumbers => {
//       const lastClickedNumber = prevNumbers[prevNumbers.length - 1];
//       if (!lastClickedNumber) return prevNumbers;  // No number to remove
//       const updatedNumbers = prevNumbers.slice(0, -1);  // Remove the last number
//       setAnimalData(prevData =>
//         prevData.map(animal =>
//           animal.number === lastClickedNumber
//             ? { ...animal, value: Math.max(0, animal.value - 10) }  // Decrement the last clicked number by 10
//             : animal
//         )
//       );
//       setPlayedPoints(prevPoints => prevPoints + 10);  // Restore the played points
//       return updatedNumbers;  // Update the clickedNumbers list
//     });

//     toast.info('Previous bet has been canceled!');
//   };

//   // Cancel All Bet
//   const handleCancelAllBet = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal => ({ ...animal, value: 0 }))  // Reset all values
//     );
//     setClickedNumbers([]);  // Clear all clicked numbers
//     setPlayedPoints(200);  // Reset played points
//     toast.info('All bets have been canceled!');
//   };

//   // Cancel Previous Bet
//   const handleCancelPreviousBet = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     const lastClickedNumber = clickedNumbers[clickedNumbers.length - 1];

//     if (lastClickedNumber) {
//       setAnimalData(prevData =>
//         prevData.map(animal =>
//           animal.number === lastClickedNumber ? { ...animal, value: Math.max(0, animal.value - 10) } : animal
//         )
//       );

//       setClickedNumbers(prevNumbers => prevNumbers.slice(0, -1));  // Remove the last clicked number
//       setPlayedPoints(prevPoints => prevPoints + 10);  // Restore played points

//       toast.info('Previous bet has been canceled!');
//     }
//   };

//   // Handle Upper Line bet
//   const handleUpperLine = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index < 6 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setPlayedPoints(prevPoints => prevPoints - 60);
//     toast.info('Upper line increased by 10 points!');
//   };

//   // Handle Lower Line bet
//   const handleLowerLine = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index >= prevData.length - 6 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setPlayedPoints(prevPoints => prevPoints - 60);
//     toast.info('Lower line increased by 10 points!');
//   };

//   // Handle Odd Number bet
//   const handleOddNumber = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 !== 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setPlayedPoints(prevPoints => prevPoints - 50);
//     toast.info('Odd numbers increased by 10 points!');
//   };

//   // Handle Even Number bet
//   const handleEvenNumber = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 === 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setPlayedPoints(prevPoints => prevPoints - 50);
//     toast.info('Even numbers increased by 10 points!');
//   };

//   const handleLogout = () => {
//     onLogout();
//     toast.success('Logout successful!');
//   };

//   return (
//     <>
//       <div className="body1">
//         <ToastContainer />
//         <div className="container-fluid game-ui">
//           <header className="header d-flex align-items-center justify-content-between">
//             <img src="/logo12.png" alt="Big Diamond Logo" className="logo" />
//             <div className="d-flex balance-and-numbers-wrapper">
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Total Balance</p>
//                 <h2 className="balance-value">10560</h2>
//               </div>
//               <div className="numbers-wrapper">
//                 {/* Show only the last 10 numbers */}
//                 {clickedNumbers.slice(-10).map((num, index) => (
//                   <span key={index} className="number-item">{num}</span>
//                 ))}
//               </div>
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Winning Points</p>
//                 <h2 className="balance-value">{clickedNumbers.reduce((total, num) => {
//                   const animal = animalData.find(animal => animal.number === num);
//                   return total + (animal?.value || 0);
//                 }, 0)}</h2>
//               </div>
//             </div>
//           </header>

//           <div className="row main-row">
//             <div className="col-2 col-md-1 left-chips">
//               {[10, 20, 30, 50].map((bet, index) => (
//                 <div key={index} className={`chip chip-colorr-${index + 1}`}>{bet}</div>
//               ))}
//             </div>

//             <div className="col-8 col-md-10 animal-cards">
//               <div className="row">
//                 {animalData.map((animal, index) => {
//                   const colors = [
//                     'linear-gradient(to bottom, #fc0b03, #32a89b)',
//                     'linear-gradient(to bottom, #037bfc, #22b045)',
//                     'linear-gradient(to bottom, #03fc3d, #a96d58)',
//                     'linear-gradient(to bottom, #f542da, #03fc3d)',
//                     'linear-gradient(to bottom, #03fc3d, #03f4fc)',
//                     'linear-gradient(to bottom, #03f4fc, #9cbf38)',
//                     'linear-gradient(to bottom, #fc03eb, #d64128)',
//                     'linear-gradient(to bottom, #fc03eb, #2e2d28)',
//                     'linear-gradient(to bottom, #fca503, #56723b)',
//                     'linear-gradient(to bottom, #fca503, #2dfc03)',
//                     'linear-gradient(to bottom, #f0b1ef, #fceb03)',
//                     'linear-gradient(to bottom, #9dba88, #03a9fc)'
//                   ];

//                   const cardColor = (index) => colors[index % colors.length];

//                   return (
//                     <div key={animal.number} className="col-6 col-md-2 p-2">
//                       <div className="animal-card" style={{ background: cardColor(index) }}>
//                         <div className="card-number">{animal.number}</div>
//                         <img
//                           src={animal.image}
//                           alt={`Animal ${animal.number}`}
//                           className="animal-img"
//                           style={{ width: '150px', height: '100px' }}
//                         />
//                         <div className="card-value">
//                           <button onClick={handleDecrement} className="btn btn-decrement">-</button>
//                           {animal.value}
//                           <button onClick={() => handleIncrement(animal.number)} className="btn btn-increment">+</button>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="col-2 col-md-1 right-chips">
//               {[100, 500, 1000, 5000].map((bet, index) => (
//                 <div key={index} className={`chip chip-colorr-${index + 1}`}>{bet}</div>
//               ))}
//             </div>
//           </div>

//           <div className="bottom-section row">
//             <div className="col-4 col-md-2 points-section">
//               <p style={{ color: 'white' }}>Played Points</p>
//               <h2 className="balance-value">{playedPoints}</h2>
//             </div>

//             <div className="col-8 col-md-7 control-buttons-wrapper text-center">
//               <div className="control-buttons">
//                 <button onClick={handleCancelAllBet} className="btn">Cancel All Bet</button>
//                 <button onClick={handleCancelPreviousBet} className="btn">Cancel Previous Bet</button>
//                 <button onClick={handleUpperLine} className="btn">Upper Line</button>
//                 <button onClick={handleLowerLine} className="btn">Lower Line</button>
//                 <button onClick={handleOddNumber} className="btn">Odd Number</button>
//                 <button onClick={handleEvenNumber} className="btn">Even Number</button>
//                 <button className="btn clear-btn" style={{ backgroundColor: '#33FF57' }}>Clear</button>
//                 <i onClick={handleLogout} className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
//               </div>
//             </div>

//             <div className="col-12 col-md-2 timer-section text-center">
//               <h1 className="timer">
//                 {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default GameDashboard1;

//lowerand upper correct work


// import { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './GameDashboard1.css';

// const GameDashboard1 = ({ onLogout }) => {
//   const [animalData, setAnimalData] = useState([]);
//   const [clickedNumbers, setClickedNumbers] = useState([]);  // Store only the clicked numbers
//   const [playedPoints, setPlayedPoints] = useState(200);  // Default played points
//   const [timer, setTimer] = useState(120);  // Timer starts from 120 seconds
//   const [isBettingAllowed, setIsBettingAllowed] = useState(true);  // To control if betting is allowed

//   useEffect(() => {
//     fetch('http://localhost:8080/getallimages')
//       .then(response => response.json())
//       .then(data => {
//         const formattedData = data.map(item => ({
//           number: item.number,
//           image: item.imagePath,
//           value: 0,
//         }));
//         setAnimalData(formattedData);
//       })
//       .catch(error => {
//         console.error('Error fetching animal data:', error);
//         toast.error('Failed to load animal data!');
//       });

//     const timerInterval = setInterval(() => {
//       setTimer(prevTime => {
//         if (prevTime === 1) {
//           clearInterval(timerInterval);
//           endGame();
//           setIsBettingAllowed(false);  // Disable betting after time is up
//         }
//         return prevTime - 1;
//       });
//     }, 1000);  // Decrease the timer by 1 second every second

//     return () => clearInterval(timerInterval);  // Cleanup on component unmount
//   }, []);

//   const endGame = () => {
//     const totalWinningPoints = clickedNumbers.reduce((total, num) => {
//       const animal = animalData.find(animal => animal.number === num);
//       return total + (animal?.value || 0);
//     }, 0);

//     toast.info(`Game Over! Total Winning Points: ${totalWinningPoints}`);
//   };

//   // Handle value increment and update played points
//   const handleIncrement = (number) => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number === number ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );

//     setPlayedPoints(prevPoints => prevPoints - 10);

//     setClickedNumbers(prevNumbers => {
//       const updatedNumbers = [...prevNumbers, number];
//       return updatedNumbers;  // Add the number to the clicked list
//     });
//   };

//   // Handle value decrement and update played points
//   const handleDecrement = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     // Remove the most recent clicked number from the clickedNumbers list
//     setClickedNumbers(prevNumbers => {
//       const lastClickedNumber = prevNumbers[prevNumbers.length - 1];
//       if (!lastClickedNumber) return prevNumbers;  // No number to remove
//       const updatedNumbers = prevNumbers.slice(0, -1);  // Remove the last number
//       setAnimalData(prevData =>
//         prevData.map(animal =>
//           animal.number === lastClickedNumber
//             ? { ...animal, value: Math.max(0, animal.value - 10) }  // Decrement the last clicked number by 10
//             : animal
//         )
//       );
//       setPlayedPoints(prevPoints => prevPoints + 10);  // Restore the played points
//       return updatedNumbers;  // Update the clickedNumbers list
//     });

//     toast.info('Previous bet has been canceled!');
//   };

//   // Cancel All Bet
//   const handleCancelAllBet = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal => ({ ...animal, value: 0 }))  // Reset all values
//     );
//     setClickedNumbers([]);  // Clear all clicked numbers
//     setPlayedPoints(200);  // Reset played points
//     toast.info('All bets have been canceled!');
//   };

//   // Cancel Previous Bet
//   const handleCancelPreviousBet = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     const lastClickedNumber = clickedNumbers[clickedNumbers.length - 1];

//     if (lastClickedNumber) {
//       setAnimalData(prevData =>
//         prevData.map(animal =>
//           animal.number === lastClickedNumber ? { ...animal, value: Math.max(0, animal.value - 10) } : animal
//         )
//       );

//       setClickedNumbers(prevNumbers => prevNumbers.slice(0, -1));  // Remove the last clicked number
//       setPlayedPoints(prevPoints => prevPoints + 10);  // Restore played points

//       toast.info('Previous bet has been canceled!');
//     }
//   };

//   // Handle Upper Line bet (First 6 animals)
//   const handleUpperLine = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index < 6 ? { ...animal, value: animal.value + 10 } : animal  // Increase first 6 animals' values
//       )
//     );

//     setPlayedPoints(prevPoints => prevPoints - 60);  // Decrease played points by 60 (10 x 6 animals)

//     // Add numbers from the first 6 animals to the clickedNumbers list
//     const upperLineNumbers = animalData.slice(0, 6).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...upperLineNumbers]);

//     toast.info('Upper line increased by 10 points for each!');
//   };

//   // Handle Lower Line bet (Last 6 animals)
//   const handleLowerLine = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index >= prevData.length - 6 ? { ...animal, value: animal.value + 10 } : animal  // Increase last 6 animals' values
//       )
//     );

//     setPlayedPoints(prevPoints => prevPoints - 60);  // Decrease played points by 60 (10 x 6 animals)

//     // Add numbers from the last 6 animals to the clickedNumbers list
//     const lowerLineNumbers = animalData.slice(-6).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...lowerLineNumbers]);

//     toast.info('Lower line increased by 10 points for each!');
//   };

//   // Handle Odd Number bet
//   const handleOddNumber = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 !== 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setPlayedPoints(prevPoints => prevPoints - 50);
//     toast.info('Odd numbers increased by 10 points!');
//   };

//   // Handle Even Number bet
//   const handleEvenNumber = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 === 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setPlayedPoints(prevPoints => prevPoints - 50);
//     toast.info('Even numbers increased by 10 points!');
//   };

//   const handleLogout = () => {
//     onLogout();
//     toast.success('Logout successful!');
//   };

//   return (
//     <>
//       <div className="body1">
//         <ToastContainer />
//         <div className="container-fluid game-ui">
//           <header className="header d-flex align-items-center justify-content-between">
//             <img src="/logo12.png" alt="Big Diamond Logo" className="logo" />
//             <div className="d-flex balance-and-numbers-wrapper">
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Total Balance</p>
//                 <h2 className="balance-value">10560</h2>
//               </div>
//               <div className="numbers-wrapper">
//                 {/* Show only the last 10 clicked numbers */}
//                 {clickedNumbers.slice(-10).map((num, index) => (
//                   <span key={index} className="number-item">{num}</span>
//                 ))}
//               </div>
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Winning Points</p>
//                 <h2 className="balance-value">{clickedNumbers.reduce((total, num) => {
//                   const animal = animalData.find(animal => animal.number === num);
//                   return total + (animal?.value || 0);
//                 }, 0)}</h2>
//               </div>
//             </div>
//           </header>

//           <div className="row main-row">
//             <div className="col-2 col-md-1 left-chips">
//               {[10, 20, 30, 50].map((bet, index) => (
//                 <div key={index} className={`chip chip-colorr-${index + 1}`}>{bet}</div>
//               ))}
//             </div>

//             <div className="col-8 col-md-10 animal-cards">
//               <div className="row">
//                 {animalData.map((animal, index) => {
//                   const colors = [
//                     'linear-gradient(to bottom, #fc0b03, #32a89b)',
//                     'linear-gradient(to bottom, #037bfc, #22b045)',
//                     'linear-gradient(to bottom, #03fc3d, #a96d58)',
//                     'linear-gradient(to bottom, #f542da, #03fc3d)',
//                     'linear-gradient(to bottom, #03fc3d, #03f4fc)',
//                     'linear-gradient(to bottom, #03f4fc, #9cbf38)',
//                     'linear-gradient(to bottom, #fc03eb, #d64128)',
//                     'linear-gradient(to bottom, #fc03eb, #2e2d28)',
//                     'linear-gradient(to bottom, #fca503, #56723b)',
//                     'linear-gradient(to bottom, #fca503, #2dfc03)',
//                     'linear-gradient(to bottom, #f0b1ef, #fceb03)',
//                     'linear-gradient(to bottom, #9dba88, #03a9fc)'
//                   ];

//                   const cardColor = (index) => colors[index % colors.length];

//                   return (
//                     <div key={animal.number} className="col-6 col-md-2 p-2">
//                       <div className="animal-card" style={{ background: cardColor(index) }}>
//                         <div className="card-number">{animal.number}</div>
//                         <img
//                           src={animal.image}
//                           alt={`Animal ${animal.number}`}
//                           className="animal-img"
//                           style={{ width: '150px', height: '100px' }}
//                         />
//                         <div className="card-value">
//                           <button onClick={handleDecrement} className="btn btn-decrement">-</button>
//                           {animal.value}
//                           <button onClick={() => handleIncrement(animal.number)} className="btn btn-increment">+</button>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="col-2 col-md-1 right-chips">
//               {[100, 500, 1000, 5000].map((bet, index) => (
//                 <div key={index} className={`chip chip-colorr-${index + 1}`}>{bet}</div>
//               ))}
//             </div>
//           </div>

//           <div className="bottom-section row">
//             <div className="col-4 col-md-2 points-section">
//               <p style={{ color: 'white' }}>Played Points</p>
//               <h2 className="balance-value">{playedPoints}</h2>
//             </div>

//             <div className="col-8 col-md-7 control-buttons-wrapper text-center">
//               <div className="control-buttons">
//                 <button onClick={handleCancelAllBet} className="btn">Cancel All Bet</button>
//                 <button onClick={handleCancelPreviousBet} className="btn">Cancel Previous Bet</button>
//                 <button onClick={handleUpperLine} className="btn">Upper Line</button>
//                 <button onClick={handleLowerLine} className="btn">Lower Line</button>
//                 <button onClick={handleOddNumber} className="btn">Odd Number</button>
//                 <button onClick={handleEvenNumber} className="btn">Even Number</button>
//                 {/*<button className="btn clear-btn" style={{ backgroundColor: '#33FF57' }}>Clear</button>*/}
//                 <i onClick={handleLogout} className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
//               </div>
//             </div>

//             <div className="col-12 col-md-2 timer-section text-center">
//               <h1 className="timer">
//                 {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default GameDashboard1;


//  after adding all button functionality

// import { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './GameDashboard1.css';

// const GameDashboard1 = ({ onLogout }) => {
//   const [animalData, setAnimalData] = useState([]);
//   const [clickedNumbers, setClickedNumbers] = useState([]);  // Store only the clicked numbers
//   const [playedPoints, setPlayedPoints] = useState(500);  // Default played points
//   const [timer, setTimer] = useState(120);  // Timer starts from 120 seconds
//   const [isBettingAllowed, setIsBettingAllowed] = useState(true);  // To control if betting is allowed

//   useEffect(() => {
//     fetch('http://localhost:8080/getallimages')
//       .then(response => response.json())
//       .then(data => {
//         const formattedData = data.map(item => ({
//           number: item.number,
//           image: item.imagePath,
//           value: 0,
//         }));
//         setAnimalData(formattedData);
//       })
//       .catch(error => {
//         console.error('Error fetching animal data:', error);
//         toast.error('Failed to load animal data!');
//       });

//     const timerInterval = setInterval(() => {
//       setTimer(prevTime => {
//         if (prevTime === 1) {
//           clearInterval(timerInterval);
//           endGame();
//           setIsBettingAllowed(false);  // Disable betting after time is up
//         }
//         return prevTime - 1;
//       });
//     }, 1000);  // Decrease the timer by 1 second every second

//     return () => clearInterval(timerInterval);  // Cleanup on component unmount
//   }, []);

//   const endGame = () => {
//     const totalWinningPoints = clickedNumbers.reduce((total, num) => {
//       const animal = animalData.find(animal => animal.number === num);
//       return total + (animal?.value || 0);
//     }, 0);

//     toast.info(`Game Over! Total Winning Points: ${totalWinningPoints}`);
//   };

//   // Handle value increment and update played points
//   const handleIncrement = (number) => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number === number ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );

//     setPlayedPoints(prevPoints => prevPoints - 10);

//     setClickedNumbers(prevNumbers => {
//       const updatedNumbers = [...prevNumbers, number];
//       return updatedNumbers;  // Add the number to the clicked list
//     });
//   };

//   // Handle value decrement and update played points
//   const handleDecrement = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     // Remove the most recent clicked number from the clickedNumbers list
//     setClickedNumbers(prevNumbers => {
//       const lastClickedNumber = prevNumbers[prevNumbers.length - 1];
//       if (!lastClickedNumber) return prevNumbers;  // No number to remove
//       const updatedNumbers = prevNumbers.slice(0, -1);  // Remove the last number
//       setAnimalData(prevData =>
//         prevData.map(animal =>
//           animal.number === lastClickedNumber
//             ? { ...animal, value: Math.max(0, animal.value - 10) }  // Decrement the last clicked number by 10
//             : animal
//         )
//       );
//       setPlayedPoints(prevPoints => prevPoints + 10);  // Restore the played points
//       return updatedNumbers;  // Update the clickedNumbers list
//     });

//     toast.info('Previous bet has been canceled!');
//   };

//   // Cancel All Bet
//   const handleCancelAllBet = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal => ({ ...animal, value: 0 }))  // Reset all values
//     );
//     setClickedNumbers([]);  // Clear all clicked numbers
//     setPlayedPoints(200);  // Reset played points
//     toast.info('All bets have been canceled!');
//   };

//   // Cancel Previous Bet
//   const handleCancelPreviousBet = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     const lastClickedNumber = clickedNumbers[clickedNumbers.length - 1];

//     if (lastClickedNumber) {
//       setAnimalData(prevData =>
//         prevData.map(animal =>
//           animal.number === lastClickedNumber ? { ...animal, value: Math.max(0, animal.value - 10) } : animal
//         )
//       );

//       setClickedNumbers(prevNumbers => prevNumbers.slice(0, -1));  // Remove the last clicked number
//       setPlayedPoints(prevPoints => prevPoints + 10);  // Restore played points

//       toast.info('Previous bet has been canceled!');
//     }
//   };

//   // Handle Upper Line bet (First 6 animals)
//   const handleUpperLine = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index < 6 ? { ...animal, value: animal.value + 10 } : animal  // Increase first 6 animals' values
//       )
//     );

//     setPlayedPoints(prevPoints => prevPoints - 60);  // Decrease played points by 60 (10 x 6 animals)

//     // Add numbers from the first 6 animals to the clickedNumbers list
//     const upperLineNumbers = animalData.slice(0, 6).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...upperLineNumbers]);

//     toast.info('Upper line increased by 10 points for each!');
//   };

//   // Handle Lower Line bet (Last 6 animals)
//   const handleLowerLine = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index >= prevData.length - 6 ? { ...animal, value: animal.value + 10 } : animal  // Increase last 6 animals' values
//       )
//     );

//     setPlayedPoints(prevPoints => prevPoints - 60);  // Decrease played points by 60 (10 x 6 animals)

//     // Add numbers from the last 6 animals to the clickedNumbers list
//     const lowerLineNumbers = animalData.slice(-6).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...lowerLineNumbers]);

//     toast.info('Lower line increased by 10 points for each!');
//   };

//   // Handle Odd Number bet
//   const handleOddNumber = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 !== 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setPlayedPoints(prevPoints => prevPoints - 50);

//     // Add odd numbers to clickedNumbers
//     const oddNumbers = animalData.filter(animal => animal.number % 2 !== 0).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...oddNumbers]);

//     toast.info('Odd numbers increased by 10 points!');
//   };

//   // Handle Even Number bet
//   const handleEvenNumber = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 === 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setPlayedPoints(prevPoints => prevPoints - 50);

//     // Add even numbers to clickedNumbers
//     const evenNumbers = animalData.filter(animal => animal.number % 2 === 0).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...evenNumbers]);

//     toast.info('Even numbers increased by 10 points!');
//   };

//   const handleLogout = () => {
//     onLogout();
//     toast.success('Logout successful!');
//   };

//   return (
//     <>
//       <div className="body1">
//         <ToastContainer />
//         <div className="container-fluid game-ui">
//           <header className="header d-flex align-items-center justify-content-between">
//             <img src="/logo12.png" alt="Big Diamond Logo" className="logo" />
//             <div className="d-flex balance-and-numbers-wrapper">
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Total Balance</p>
//                 <h2 className="balance-value">1000</h2>
//               </div>
//               <div className="numbers-wrapper">
//                 {/* Show only the last 10 clicked numbers */}
//                 {clickedNumbers.slice(-10).map((num, index) => (
//                   <span key={index} className="number-item">{num}</span>
//                 ))}
//               </div>
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Winning Points</p>
//                 <h2 className="balance-value">{clickedNumbers.reduce((total, num) => {
//                   const animal = animalData.find(animal => animal.number === num);
//                   return total + (animal?.value || 0);
//                 }, 0)}</h2>
//               </div>
//             </div>
//           </header>

//           <div className="row main-row">
//             <div className="col-2 col-md-1 left-chips">
//               {[10, 20, 30, 50].map((bet, index) => (
//                 <div key={index} className={`chip chip-colorr-${index + 1}`}>{bet}</div>
//               ))}
//             </div>

//             <div className="col-8 col-md-10 animal-cards">
//               <div className="row">
//                 {animalData.map((animal, index) => {
//                   const colors = [
//                     'linear-gradient(to bottom, #fc0b03, #32a89b)',
//                     'linear-gradient(to bottom, #037bfc, #22b045)',
//                     'linear-gradient(to bottom, #03fc3d, #a96d58)',
//                     'linear-gradient(to bottom, #f542da, #03fc3d)',
//                     'linear-gradient(to bottom, #03fc3d, #03f4fc)',
//                     'linear-gradient(to bottom, #03f4fc, #9cbf38)',
//                     'linear-gradient(to bottom, #fc03eb, #d64128)',
//                     'linear-gradient(to bottom, #fc03eb, #2e2d28)',
//                     'linear-gradient(to bottom, #fca503, #56723b)',
//                     'linear-gradient(to bottom, #fca503, #2dfc03)',
//                     'linear-gradient(to bottom, #f0b1ef, #fceb03)',
//                     'linear-gradient(to bottom, #9dba88, #03a9fc)',
//                   ];

//                   const cardColor = (index) => colors[index % colors.length];

//                   return (
//                     <div key={animal.number} className="col-6 col-md-2 p-2">
//                       <div className="animal-card" style={{ background: cardColor(index) }}>
//                         <div className="card-number">{animal.number}</div>
//                         <img
//                           src={animal.image}
//                           alt={`Animal ${animal.number}`}
//                           className="animal-img"
//                           style={{ width: '150px', height: '100px' }}
//                         />
//                         <div className="card-value">
//                           <button onClick={handleDecrement} className="btn btn-decrement">-</button>
//                           {animal.value}
//                           <button onClick={() => handleIncrement(animal.number)} className="btn btn-increment">+</button>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="col-2 col-md-1 right-chips">
//               {[100, 500, 1000, 5000].map((bet, index) => (
//                 <div key={index} className={`chip chip-colorr-${index + 1}`}>{bet}</div>
//               ))}
//             </div>
//           </div>

//           <div className="bottom-section row">
//             <div className="col-4 col-md-2 points-section">
//               <p style={{ color: 'white' }}>Played Points</p>
//               <h2 className="balance-value">{playedPoints}</h2>
//             </div>

//             <div className="col-8 col-md-7 control-buttons-wrapper text-center">
//               <div className="control-buttons">
//                 <button onClick={handleCancelAllBet} className="btn">Cancel All Bet</button>
//                 <button onClick={handleCancelPreviousBet} className="btn">Cancel Previous Bet</button>
//                 <button onClick={handleUpperLine} className="btn">Upper Line</button>
//                 <button onClick={handleLowerLine} className="btn">Lower Line</button>
//                 <button onClick={handleOddNumber} className="btn">Odd Number</button>
//                 <button onClick={handleEvenNumber} className="btn">Even Number</button>
//                 <i onClick={handleLogout} className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
//               </div>
//             </div>

//             <div className="col-12 col-md-2 timer-section text-center">
//               <h1 className="timer">
//                 {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default GameDashboard1;




// import { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './GameDashboard1.css';

// const GameDashboard1 = ({ onLogout }) => {
//   const [animalData, setAnimalData] = useState([]);
//   const [clickedNumbers, setClickedNumbers] = useState([]);  // Store only the clicked numbers
//   const [playedPoints, setPlayedPoints] = useState(500);  // Default played points
//   const [timer, setTimer] = useState(120);  // Timer starts from 120 seconds
//   const [isBettingAllowed, setIsBettingAllowed] = useState(true);  // To control if betting is allowed

//   useEffect(() => {
//     fetch('http://localhost:8080/getallimages')
//       .then(response => response.json())
//       .then(data => {
//         const formattedData = data.map(item => ({
//           number: item.number,
//           image: item.imagePath,
//           value: 0,
//         }));
//         setAnimalData(formattedData);
//       })
//       .catch(error => {
//         console.error('Error fetching animal data:', error);
//         toast.error('Failed to load animal data!');
//       });

//     const timerInterval = setInterval(() => {
//       setTimer(prevTime => {
//         if (prevTime === 1) {
//           clearInterval(timerInterval);
//           endGame();
//           setIsBettingAllowed(false);  // Disable betting after time is up
//         }
//         return prevTime - 1;
//       });
//     }, 1000);  // Decrease the timer by 1 second every second

//     return () => clearInterval(timerInterval);  // Cleanup on component unmount
//   }, []);

//   const endGame = () => {
//     const totalWinningPoints = clickedNumbers.reduce((total, num) => {
//       const animal = animalData.find(animal => animal.number === num);
//       return total + (animal?.value || 0);
//     }, 0);

//     toast.info(`Game Over! Total Winning Points: ${totalWinningPoints}`);
//   };

//   // Handle value increment and update played points
//   const handleIncrement = (number) => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number === number ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );

//     setPlayedPoints(prevPoints => prevPoints - 10);

//     setClickedNumbers(prevNumbers => {
//       const updatedNumbers = [...prevNumbers, number];
//       return updatedNumbers;  // Add the number to the clicked list
//     });

//     // Winning Points increased by 80 for each + action
//     toast.info('Winning points increased by 80!');
//   };

//   // Handle value decrement and update played points
//   const handleDecrement = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     // Remove the most recent clicked number from the clickedNumbers list
//     setClickedNumbers(prevNumbers => {
//       const lastClickedNumber = prevNumbers[prevNumbers.length - 1];
//       if (!lastClickedNumber) return prevNumbers;  // No number to remove
//       const updatedNumbers = prevNumbers.slice(0, -1);  // Remove the last number
//       setAnimalData(prevData =>
//         prevData.map(animal =>
//           animal.number === lastClickedNumber
//             ? { ...animal, value: Math.max(0, animal.value - 10) }  // Decrement the last clicked number by 10
//             : animal
//         )
//       );
//       setPlayedPoints(prevPoints => prevPoints + 10);  // Restore the played points
//       return updatedNumbers;  // Update the clickedNumbers list
//     });

//     // Winning Points decreased by 80 for each - action
//     toast.info('Winning points decreased by 80!');
//   };

//   // Cancel All Bet
//   const handleCancelAllBet = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal => ({ ...animal, value: 0 }))  // Reset all values
//     );
//     setClickedNumbers([]);  // Clear all clicked numbers
//     setPlayedPoints(200);  // Reset played points
//     toast.info('All bets have been canceled!');
//   };

//   // Cancel Previous Bet
//   const handleCancelPreviousBet = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     const lastClickedNumber = clickedNumbers[clickedNumbers.length - 1];

//     if (lastClickedNumber) {
//       setAnimalData(prevData =>
//         prevData.map(animal =>
//           animal.number === lastClickedNumber ? { ...animal, value: Math.max(0, animal.value - 10) } : animal
//         )
//       );

//       setClickedNumbers(prevNumbers => prevNumbers.slice(0, -1));  // Remove the last clicked number
//       setPlayedPoints(prevPoints => prevPoints + 10);  // Restore played points

//       toast.info('Previous bet has been canceled!');
//     }
//   };

//   // Handle Upper Line bet (First 6 animals)
//   const handleUpperLine = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index < 6 ? { ...animal, value: animal.value + 10 } : animal  // Increase first 6 animals' values
//       )
//     );

//     setPlayedPoints(prevPoints => prevPoints - 60);  // Decrease played points by 60 (10 x 6 animals)

//     // Add numbers from the first 6 animals to the clickedNumbers list
//     const upperLineNumbers = animalData.slice(0, 6).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...upperLineNumbers]);

//     toast.info('Upper line increased by 10 points for each!');
//   };

//   // Handle Lower Line bet (Last 6 animals)
//   const handleLowerLine = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index >= prevData.length - 6 ? { ...animal, value: animal.value + 10 } : animal  // Increase last 6 animals' values
//       )
//     );

//     setPlayedPoints(prevPoints => prevPoints - 60);  // Decrease played points by 60 (10 x 6 animals)

//     // Add numbers from the last 6 animals to the clickedNumbers list
//     const lowerLineNumbers = animalData.slice(-6).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...lowerLineNumbers]);

//     toast.info('Lower line increased by 10 points for each!');
//   };

//   // Handle Odd Number bet
//   const handleOddNumber = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 !== 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setPlayedPoints(prevPoints => prevPoints - 50);

//     // Add odd numbers to clickedNumbers
//     const oddNumbers = animalData.filter(animal => animal.number % 2 !== 0).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...oddNumbers]);

//     toast.info('Odd numbers increased by 10 points!');
//   };

//   // Handle Even Number bet
//   const handleEvenNumber = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 === 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setPlayedPoints(prevPoints => prevPoints - 50);

//     // Add even numbers to clickedNumbers
//     const evenNumbers = animalData.filter(animal => animal.number % 2 === 0).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...evenNumbers]);

//     toast.info('Even numbers increased by 10 points!');
//   };

//   const handleLogout = () => {
//     onLogout();
//     toast.success('Logout successful!');
//   };

//   return (
//     <>
//       <div className="body1">
//         <ToastContainer />
//         <div className="container-fluid game-ui">
//           <header className="header d-flex align-items-center justify-content-between">
//             <img src="/logo12.png" alt="Big Diamond Logo" className="logo" />
//             <div className="d-flex balance-and-numbers-wrapper">
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Total Balance</p>
//                 <h2 className="balance-value">1000</h2>
//               </div>
//               <div className="numbers-wrapper">
//                 {/* Show only the last 10 clicked numbers */}
//                 {clickedNumbers.slice(-10).map((num, index) => (
//                   <span key={index} className="number-item">{num}</span>
//                 ))}
//               </div>
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Winning Points</p>
//                 <h2 className="balance-value">{clickedNumbers.reduce((total, num) => {
//                   const animal = animalData.find(animal => animal.number === num);
//                   return total + (animal?.value || 0);
//                 }, 0) * 8}</h2>  {/* Winning Points calculation */}
//               </div>
//             </div>
//           </header>

//           <div className="row main-row">
//             <div className="col-2 col-md-1 left-chips">
//               {[10, 20, 30, 50].map((bet, index) => (
//                 <div key={index} className={`chip chip-colorr-${index + 1}`}>{bet}</div>
//               ))}
//             </div>

//             <div className="col-8 col-md-10 animal-cards">
//               <div className="row">
//                 {animalData.map((animal, index) => {
//                   const colors = [
//                     'linear-gradient(to bottom, #fc0b03, #32a89b)',
//                     'linear-gradient(to bottom, #037bfc, #22b045)',
//                     'linear-gradient(to bottom, #03fc3d, #a96d58)',
//                     'linear-gradient(to bottom, #f542da, #03fc3d)',
//                     'linear-gradient(to bottom, #03fc3d, #03f4fc)',
//                     'linear-gradient(to bottom, #03f4fc, #9cbf38)',
//                     'linear-gradient(to bottom, #fc03eb, #d64128)',
//                     'linear-gradient(to bottom, #fc03eb, #2e2d28)',
//                     'linear-gradient(to bottom, #fca503, #56723b)',
//                     'linear-gradient(to bottom, #fca503, #2dfc03)',
//                     'linear-gradient(to bottom, #f0b1ef, #fceb03)',
//                     'linear-gradient(to bottom, #9dba88, #03a9fc)',
//                   ];

//                   const cardColor = (index) => colors[index % colors.length];

//                   return (
//                     <div key={animal.number} className="col-6 col-md-2 p-2">
//                       <div className="animal-card" style={{ background: cardColor(index) }}>
//                         <div className="card-number">{animal.number}</div>
//                         <img
//                           src={animal.image}
//                           alt={`Animal ${animal.number}`}
//                           className="animal-img"
//                           style={{ width: '150px', height: '100px' }}
//                         />
//                         <div className="card-value">
//                           <button onClick={handleDecrement} className="btn btn-decrement">-</button>
//                           {animal.value}
//                           <button onClick={() => handleIncrement(animal.number)} className="btn btn-increment">+</button>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="col-2 col-md-1 right-chips">
//               {[100, 500, 1000, 5000].map((bet, index) => (
//                 <div key={index} className={`chip chip-colorr-${index + 1}`}>{bet}</div>
//               ))}
//             </div>
//           </div>

//           <div className="bottom-section row">
//             <div className="col-4 col-md-2 points-section">
//               <p style={{ color: 'white' }}>Played Points</p>
//               <h2 className="balance-value">{playedPoints}</h2>
//             </div>

//             <div className="col-8 col-md-7 control-buttons-wrapper text-center">
//               <div className="control-buttons">
//                 <button onClick={handleCancelAllBet} className="btn">Cancel All Bet</button>
//                 <button onClick={handleCancelPreviousBet} className="btn">Cancel Previous Bet</button>
//                 <button onClick={handleUpperLine} className="btn">Upper Line</button>
//                 <button onClick={handleLowerLine} className="btn">Lower Line</button>
//                 <button onClick={handleOddNumber} className="btn">Odd Number</button>
//                 <button onClick={handleEvenNumber} className="btn">Even Number</button>
//                 <i onClick={handleLogout} className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
//               </div>
//             </div>

//             <div className="col-12 col-md-2 timer-section text-center">
//               <h1 className="timer">
//                 {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default GameDashboard1;

/* eslint-disable react/prop-types */
//19,.11.2024

// import { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './GameDashboard1.css';

// const GameDashboard1 = ({ onLogout }) => {
//   const [animalData, setAnimalData] = useState([]);
//   const [clickedNumbers, setClickedNumbers] = useState([]);  // Store only the clicked numbers
//   const [totalBalance, setTotalBalance] = useState(500);  // Initial total balance
//   const [playedPoints, setPlayedPoints] = useState(0);  // Total played points (bets placed)
//   const [timer, setTimer] = useState(60);  // Timer starts from 120 seconds
//   const [isBettingAllowed, setIsBettingAllowed] = useState(true);  // To control if betting is allowed
//   const [isGameOver, setIsGameOver] = useState(false);  // To track if the game is over and show the number

//   useEffect(() => {
//     fetch('http://localhost:8080/getallimages')
//       .then(response => response.json())
//       .then(data => {
//         const formattedData = data.map(item => ({
//           number: item.number,
//           image: item.imagePath,
//           value: 0,
//         }));
//         setAnimalData(formattedData);
//       })
//       .catch(error => {
//         console.error('Error fetching animal data:', error);
//         toast.error('Failed to load animal data!');
//       });

//     const timerInterval = setInterval(() => {
//       setTimer(prevTime => {
//         if (prevTime === 1) {
//           clearInterval(timerInterval);
//           endGame();
//           setIsBettingAllowed(false);  // Disable betting after time is up
//           setIsGameOver(true);  // Set game over flag to true
//         }
//         return prevTime - 1;
//       });
//     }, 1000);  // Update timer every 1 second

//     return () => clearInterval(timerInterval);  // Cleanup on component unmount
//   }, []);

//   const endGame = () => {
//     const totalWinningPoints = clickedNumbers.reduce((total, num) => {
//       const animal = animalData.find(animal => animal.number === num);
//       return total + (animal?.value || 0);
//     }, 0);

//     // Custom scoring logic based on the total played points
//     let resultMessage = '';
//     if (playedPoints >= 10 && playedPoints <= 70) {
//       resultMessage = 'Points: 0';
//     } else if (playedPoints >= 80 && playedPoints <= 160) {
//       resultMessage = 'Points: 80';
//     } else {
//       resultMessage = `Points: ${totalWinningPoints}`;
//     }

//     const finalBalance = totalBalance + totalWinningPoints;

//     const resultSummary = `
//       Game Over! 
//       Total Played Points: ${playedPoints}
//       Total Winning Points: ${totalWinningPoints}
//       Final Balance: ${finalBalance}
//     `;

//     toast.info(resultSummary);
//     toast.info(resultMessage);  // Show the final result based on the custom logic
//   };

//   // Handle value increment and update total balance and played points
//   const handleIncrement = (number) => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number === number ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );

//     setTotalBalance(prevBalance => prevBalance - 10);  // Deduct from total balance

//     setClickedNumbers(prevNumbers => {
//       const updatedNumbers = [...prevNumbers, number];
//       return updatedNumbers;  // Add the number to the clicked list
//     });

//     setPlayedPoints(prevPoints => prevPoints + 10);

//     toast.info('Winning points increased by 10!');
//   };

//   // Handle value decrement and update total balance and played points
//   const handleDecrement = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     // Remove the most recent clicked number from the clickedNumbers list
//     setClickedNumbers(prevNumbers => {
//       const lastClickedNumber = prevNumbers[prevNumbers.length - 1];
//       if (!lastClickedNumber) return prevNumbers;  // No number to remove
//       const updatedNumbers = prevNumbers.slice(0, -1);  // Remove the last number
//       setAnimalData(prevData =>
//         prevData.map(animal =>
//           animal.number === lastClickedNumber
//             ? { ...animal, value: Math.max(0, animal.value - 10) }  // Decrement the last clicked number by 10
//             : animal
//         )
//       );
//       setTotalBalance(prevBalance => prevBalance + 10);  // Restore from total balance

//       setPlayedPoints(prevPoints => Math.max(0, prevPoints - 10));  // Prevent negative points

//       return updatedNumbers;  // Update the clickedNumbers list
//     });

//     toast.info('Winning points decreased by 10!');
//   };

//   // Cancel All Bet
//   const handleCancelAllBet = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal => ({ ...animal, value: 0 }))  // Reset all values
//     );
//     setClickedNumbers([]);  // Clear all clicked numbers
//     setTotalBalance(1000);  // Reset total balance
//     setPlayedPoints(0);  // Reset played points
//     toast.info('All bets have been canceled!');
//   };

//   // Cancel Previous Bet
//   const handleCancelPreviousBet = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     const lastClickedNumber = clickedNumbers[clickedNumbers.length - 1];

//     if (lastClickedNumber) {
//       setAnimalData(prevData =>
//         prevData.map(animal =>
//           animal.number === lastClickedNumber ? { ...animal, value: Math.max(0, animal.value - 10) } : animal
//         )
//       );

//       setClickedNumbers(prevNumbers => prevNumbers.slice(0, -1));  // Remove the last clicked number
//       setTotalBalance(prevBalance => prevBalance + 10);  // Restore total balance

//       setPlayedPoints(prevPoints => Math.max(0, prevPoints - 10));  // Prevent negative points

//       toast.info('Previous bet has been canceled!');
//     }
//   };

//   // Handle Upper Line bet (First 6 animals)
//   const handleUpperLine = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index < 6 ? { ...animal, value: animal.value + 10 } : animal  // Increase first 6 animals' values
//       )
//     );

//     setTotalBalance(prevBalance => prevBalance - 60);  // Decrease total balance by 60 (10 x 6 animals)

//     const upperLineNumbers = animalData.slice(0, 6).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...upperLineNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 60);  // Add 60 for 6 bets
//   };

//   // Handle Lower Line bet (Last 6 animals)
//   const handleLowerLine = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index >= prevData.length - 6 ? { ...animal, value: animal.value + 10 } : animal  // Increase last 6 animals' values
//       )
//     );

//     setTotalBalance(prevBalance => prevBalance - 60);  // Decrease total balance by 60 (10 x 6 animals)

//     const lowerLineNumbers = animalData.slice(-6).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...lowerLineNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 60);  // Add 60 for 6 bets
//   };

//   // Handle Odd Number bet
//   const handleOddNumber = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 !== 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setTotalBalance(prevBalance => prevBalance - 50);

//     const oddNumbers = animalData.filter(animal => animal.number % 2 !== 0).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...oddNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 50);

//     toast.info('Odd numbers increased by 10 points!');
//   };

//   // Handle Even Number bet
//   const handleEvenNumber = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 === 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setTotalBalance(prevBalance => prevBalance - 50);

//     const evenNumbers = animalData.filter(animal => animal.number % 2 === 0).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...evenNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 50);

//     toast.info('Even numbers increased by 10 points!');
//   };

//   // Handle user logout
//   const handleLogout = () => {
//     onLogout();  // Assuming `onLogout` will handle the logout logic
//   };

//   useEffect(() => {
//     // Set timeout to hide the modal after 10 seconds and reset the game
//     if (isGameOver) {
//       const timeout = setTimeout(() => {
//         setIsGameOver(false);  // Hide the modal after 10 seconds
//         // Reset the game state
//       }, 10000);  // 10 seconds

//       return () => clearTimeout(timeout);  // Cleanup the timeout on component unmount
//     }
//   }, [isGameOver]);




//   return (
//     <>
//       <div className="body1">
//         <ToastContainer />
//         <div className="container-fluid game-ui">
//           <header className="header d-flex align-items-center justify-content-between">
//             <img src="/logo12.png" alt="Big Diamond Logo" className="logo" />
//             <div className="d-flex balance-and-numbers-wrapper">
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Total Balance</p>
//                 <h2 className="balance-value">{totalBalance}</h2>
//               </div>
//               <div className="numbers-wrapper">
//                 {/* Show the last clicked number after time is up */}
//                 {isGameOver && clickedNumbers.slice(-1).map((num, index) => (
//                   <span key={index} className="number-item">{num}</span>
//                 ))}
//               </div>
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Winning Points</p>
//                 <h2 className="balance-value">
//                   {clickedNumbers.reduce((total, num) => {
//                     const animal = animalData.find(animal => animal.number === num);
//                     return total + (animal?.value || 0);
//                   }, 0) * 8}
//                 </h2> {/* Winning Points calculation */}
//               </div>
//             </div>
//           </header>

//           <div className="row main-row">
//             <div className="col-2 col-md-1 left-chips">
//               {[10, 20, 30, 50].map((bet, index) => (
//                 <div key={index} className={`chip chip-colorr-${index + 1}`}>{bet}</div>
//               ))}
//             </div>

//             <div className="col-8 col-md-10 animal-cards">
//               <div className="row">
//                 {animalData.map((animal, index) => {
//                   const colors = [
//                     'linear-gradient(to bottom, #fc0b03, #32a89b)',
//                     'linear-gradient(to bottom, #037bfc, #22b045)',
//                     'linear-gradient(to bottom, #03fc3d, #a96d58)',
//                     'linear-gradient(to bottom, #f542da, #03fc3d)',
//                     'linear-gradient(to bottom, #03fc3d, #03f4fc)',
//                     'linear-gradient(to bottom, #03f4fc, #9cbf38)',
//                     'linear-gradient(to bottom, #fc03eb, #d64128)',
//                     'linear-gradient(to bottom, #fc03eb, #2e2d28)',
//                     'linear-gradient(to bottom, #fca503, #56723b)',
//                     'linear-gradient(to bottom, #fca503, #2dfc03)',
//                     'linear-gradient(to bottom, #f0b1ef, #fceb03)',
//                     'linear-gradient(to bottom, #9dba88, #03a9fc)',
//                   ];

//                   const cardColor = (index) => colors[index % colors.length];

//                   return (
//                     <div key={animal.number} className="col-6 col-md-2 p-2">
//                       <div className="animal-card" style={{ background: cardColor(index) }}>
//                         <div className="card-number">{animal.number}</div>
//                         <img
//                           src={animal.image}
//                           alt={`Animal ${animal.number}`}
//                           className="animal-img"
//                           style={{ width: '150px', height: '100px' }}
//                         />
//                         <div className="card-value">
//                           <button onClick={handleDecrement} className="btn btn-decrement">-</button>
//                           {animal.value}
//                           <button onClick={() => handleIncrement(animal.number)} className="btn btn-increment">+</button>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="col-2 col-md-1 right-chips">
//               {[100, 500, 1000, 5000].map((bet, index) => (
//                 <div key={index} className={`chip chip-colorr-${index + 1}`}>{bet}</div>
//               ))}
//             </div>
//           </div>

//           <div className="bottom-section row">
//             <div className="col-4 col-md-2 points-section">
//               <p style={{ color: 'white' }}>Played Points</p>
//               <h2 className="balance-value">{playedPoints}</h2>  {/* Total played points */}
//             </div>

//             <div className="col-8 col-md-7 control-buttons-wrapper text-center">
//               <div className="control-buttons">
//                 <button onClick={handleCancelAllBet} className="btn">Cancel All Bet</button>
//                 <button onClick={handleCancelPreviousBet} className="btn">Cancel Previous Bet</button>
//                 <button onClick={handleUpperLine} className="btn">Upper Line</button>
//                 <button onClick={handleLowerLine} className="btn">Lower Line</button>
//                 <button onClick={handleOddNumber} className="btn">Odd Number</button>
//                 <button onClick={handleEvenNumber} className="btn">Even Number</button>
//                 <i onClick={handleLogout} className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
//               </div>
//             </div>

//             <div className="col-12 col-md-2 timer-section text-center">
//               <h1 className="timer">
//                 {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal Dialog to show the last clicked number when the game ends */}
//       {isGameOver && clickedNumbers.length > 0 && (
//         <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Your Result</h5>
//               </div>
//               <div className="modal-body">
//                 <p>You win the below points:</p>
//                 <div className="number-item">{clickedNumbers.slice(-1)[0]}</div>
//                 <div className="modal-image">
//                   <img
//                     src={animalData.find(animal => animal.number === clickedNumbers.slice(-1)[0])?.image}
//                     alt={`Animal ${clickedNumbers.slice(-1)[0]}`}
//                     className="animal-img"
//                     style={{ width: '150px', height: '100px', display: 'flex', justifyContent: 'center' }}

//                   />
//                 </div>
//                 <div className="modal-points">
//                   {/* Custom points display logic */}
//                   {playedPoints >= 10 && playedPoints <= 70 ? 'Points: 0' :
//                     playedPoints >= 80 && playedPoints <= 160 ? 'Points: 80' :
//                       playedPoints >= 170 && playedPoints <= 240 ? 'Points: 80' :
//                         playedPoints >= 250 && playedPoints <= 320 ? 'Points: 160' :
//                           playedPoints >= 330 && playedPoints <= 400 ? 'Points: 240' :
//                             playedPoints >= 410 && playedPoints <= 500 ? 'Points: 320' :
//                               `Points: ${clickedNumbers.reduce((total, num) => {
//                                 const animal = animalData.find(animal => animal.number === num);
//                                 return total + (animal?.value || 0);
//                               }, 0)}`}
//                 </div>
//               </div>
//               {/* <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default GameDashboard1;

//21.11.2024
/* eslint-disable react/prop-types */
//19,.11.2024

// import { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './GameDashboard1.css';

// const GameDashboard1 = ({ onLogout }) => {
//   const [animalData, setAnimalData] = useState([]);
//   const [clickedNumbers, setClickedNumbers] = useState([]);  // Store only the clicked numbers
//   const [totalBalance, setTotalBalance] = useState(500);  // Initial total balance
//   const [playedPoints, setPlayedPoints] = useState(0);  // Total played points (bets placed)
//   const [timer, setTimer] = useState(60);  // Timer starts from 120 seconds
//   const [isBettingAllowed, setIsBettingAllowed] = useState(true);  // To control if betting is allowed
//   const [isGameOver, setIsGameOver] = useState(false);  // To track if the game is over and show the number


//   useEffect(() => {
//     // Function to start a new game
//     const startGame = () => {
//       // Fetch animal data
//       fetch('http://localhost:8080/getallimages')
//         .then(response => response.json())
//         .then(data => {
//           const formattedData = data.map(item => ({
//             number: item.number,
//             image: item.imagePath,
//             value: 0,
//           }));
//           setAnimalData(formattedData);  // Set the animal data
//           setTotalBalance(500);  // Reset total balance
//           setPlayedPoints(0);  // Reset played points
//           setClickedNumbers([]);  // Reset clicked numbers
//           setTimer(60);  // Reset the timer to 60
//           setIsBettingAllowed(true);  // Allow betting initially
//           setIsGameOver(false);  // Reset game over state
//         })
//         .catch(error => {
//           console.error('Error fetching animal data:', error);
//           toast.error('Failed to load animal data!');
//         });

//       // Clear any previous timer interval to avoid overlapping
//       clearInterval(window.timerInterval);

//       // Timer interval
//       window.timerInterval = setInterval(() => {
//         setTimer(prevTime => {
//           if (prevTime === 1) {
//             clearInterval(window.timerInterval);  // Stop the timer when it reaches 0
//             endGame();  // End the game
//             setIsBettingAllowed(false);  // Disable betting after time is up
//             setIsGameOver(true);  // Set game over flag to true
//           } else if (prevTime <= 10) {
//             // Disable betting when there are 10 seconds or less remaining
//             setIsBettingAllowed(false);
//           } else {
//             // Allow betting when time is above 10 seconds
//             setIsBettingAllowed(true);
//           }
//           return prevTime - 1;  // Decrease the timer by 1 every second
//         });
//       }, 1000);  // Update every 1 second
//     };

//     if (isGameOver) {
//       // Restart the game after 10 seconds when it ends
//       setTimeout(() => {
//         startGame();  // Restart the game after 10 seconds
//       }, 10000);  // Delay the restart by 10 seconds
//     } else {
//       startGame();  // Start the game initially or after it ends
//     }

//     return () => clearInterval(window.timerInterval);  // Cleanup timer when component unmounts
//   }, [isGameOver]);

//   // This effect depends on `isGameOver`

//   const endGame = () => {
//     const totalWinningPoints = clickedNumbers.reduce((total, num) => {
//       const animal = animalData.find(animal => animal.number === num);
//       return total + (animal?.value || 0);
//     }, 0);

//     // Custom scoring logic based on the total played points
//     let resultMessage = '';
//     if (playedPoints >= 10 && playedPoints <= 70) {
//       resultMessage = 'Points: 0';
//     } else if (playedPoints >= 80 && playedPoints <= 160) {
//       resultMessage = 'Points: 80';
//     } else {
//       resultMessage = `Points: ${totalWinningPoints}`;
//     }

//     const finalBalance = totalBalance + totalWinningPoints;

//     const resultSummary = `
//       Game Over! 
//       Total Played Points: ${playedPoints}
//       Total Winning Points: ${totalWinningPoints}
//       Final Balance: ${finalBalance}
//     `;

//     toast.info(resultSummary);
//     toast.info(resultMessage);  // Show the final result based on the custom logic
//   };

//   // Handle value increment and update total balance and played points
//   const handleIncrement = (number) => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number === number ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );

//     setTotalBalance(prevBalance => prevBalance - 10);  // Deduct from total balance

//     setClickedNumbers(prevNumbers => {
//       const updatedNumbers = [...prevNumbers, number];
//       return updatedNumbers;  // Add the number to the clicked list
//     });

//     setPlayedPoints(prevPoints => prevPoints + 10);

//     toast.info('Winning points increased by 10!');
//   };

//   // Handle value decrement and update total balance and played points
//   const handleDecrement = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     // Remove the most recent clicked number from the clickedNumbers list
//     setClickedNumbers(prevNumbers => {
//       const lastClickedNumber = prevNumbers[prevNumbers.length - 1];
//       if (!lastClickedNumber) return prevNumbers;  // No number to remove
//       const updatedNumbers = prevNumbers.slice(0, -1);  // Remove the last number
//       setAnimalData(prevData =>
//         prevData.map(animal =>
//           animal.number === lastClickedNumber
//             ? { ...animal, value: Math.max(0, animal.value - 10) }  // Decrement the last clicked number by 10
//             : animal
//         )
//       );
//       setTotalBalance(prevBalance => prevBalance + 10);  // Restore from total balance

//       setPlayedPoints(prevPoints => Math.max(0, prevPoints - 10));  // Prevent negative points

//       return updatedNumbers;  // Update the clickedNumbers list
//     });

//     toast.info('Winning points decreased by 10!');
//   };

//   // Cancel All Bet
//   const handleCancelAllBet = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal => ({ ...animal, value: 0 }))  // Reset all values
//     );
//     setClickedNumbers([]);  // Clear all clicked numbers
//     setTotalBalance(1000);  // Reset total balance
//     setPlayedPoints(0);  // Reset played points
//     toast.info('All bets have been canceled!');
//   };

//   // Cancel Previous Bet
//   const handleCancelPreviousBet = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     const lastClickedNumber = clickedNumbers[clickedNumbers.length - 1];

//     if (lastClickedNumber) {
//       setAnimalData(prevData =>
//         prevData.map(animal =>
//           animal.number === lastClickedNumber ? { ...animal, value: Math.max(0, animal.value - 10) } : animal
//         )
//       );

//       setClickedNumbers(prevNumbers => prevNumbers.slice(0, -1));  // Remove the last clicked number
//       setTotalBalance(prevBalance => prevBalance + 10);  // Restore total balance

//       setPlayedPoints(prevPoints => Math.max(0, prevPoints - 10));  // Prevent negative points

//       toast.info('Previous bet has been canceled!');
//     }
//   };

//   // Handle Upper Line bet (First 6 animals)
//   const handleUpperLine = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index < 6 ? { ...animal, value: animal.value + 10 } : animal  // Increase first 6 animals' values
//       )
//     );

//     setTotalBalance(prevBalance => prevBalance - 60);  // Decrease total balance by 60 (10 x 6 animals)

//     const upperLineNumbers = animalData.slice(0, 6).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...upperLineNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 60);  // Add 60 for 6 bets
//   };

//   // Handle Lower Line bet (Last 6 animals)
//   const handleLowerLine = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index >= prevData.length - 6 ? { ...animal, value: animal.value + 10 } : animal  // Increase last 6 animals' values
//       )
//     );

//     setTotalBalance(prevBalance => prevBalance - 60);  // Decrease total balance by 60 (10 x 6 animals)

//     const lowerLineNumbers = animalData.slice(-6).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...lowerLineNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 60);  // Add 60 for 6 bets
//   };

//   // Handle Odd Number bet
//   const handleOddNumber = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 !== 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setTotalBalance(prevBalance => prevBalance - 50);

//     const oddNumbers = animalData.filter(animal => animal.number % 2 !== 0).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...oddNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 50);

//     toast.info('Odd numbers increased by 10 points!');
//   };

//   // Handle Even Number bet
//   const handleEvenNumber = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 === 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setTotalBalance(prevBalance => prevBalance - 50);

//     const evenNumbers = animalData.filter(animal => animal.number % 2 === 0).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...evenNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 50);

//     toast.info('Even numbers increased by 10 points!');
//   };

//   // Handle user logout
//   const handleLogout = () => {
//     onLogout();  // Assuming `onLogout` will handle the logout logic
//   };

//   useEffect(() => {
//     // Set timeout to hide the modal after 10 seconds and reset the game
//     if (isGameOver) {
//       const timeout = setTimeout(() => {
//         setIsGameOver(false);  // Hide the modal after 10 seconds
//         // Reset the game state
//       }, 10000);  // 10 seconds

//       return () => clearTimeout(timeout);  // Cleanup the timeout on component unmount
//     }
//   }, [isGameOver]);




//   return (
//     <>
//       <div className="body1">
//         <ToastContainer />
//         <div className="container-fluid game-ui">
//           <header className="header d-flex align-items-center justify-content-between">
//             <img src="/logo12.png" alt="Big Diamond Logo" className="logo" />
//             <div className="d-flex balance-and-numbers-wrapper">
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Total Balance</p>
//                 <h2 className="balance-value">{totalBalance}</h2>
//               </div>
//               <div className="numbers-wrapper">
//                 {/* Show the last clicked number after time is up */}
//                 {isGameOver && clickedNumbers.slice(-1).map((num, index) => (
//                   <span key={index} className="number-item">{num}</span>
//                 ))}
//               </div>
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Winning Points</p>
//                 <h2 className="balance-value">
//                   {clickedNumbers.reduce((total, num) => {
//                     const animal = animalData.find(animal => animal.number === num);
//                     return total + (animal?.value || 0);
//                   }, 0) * 8}
//                 </h2> {/* Winning Points calculation */}
//               </div>
//             </div>
//           </header>

//           <div className="row main-row">
//             <div className="col-2 col-md-1 left-chips">
//               {[10, 20, 30, 50].map((bet, index) => (
//                 <div key={index} className={`chip chip-colorr-${index + 1}`}>{bet}</div>
//               ))}
//             </div>

//             <div className="col-8 col-md-10 animal-cards">
//               <div className="row">
//                 {animalData.map((animal, index) => {
//                   const colors = [
//                     'linear-gradient(to bottom, #fc0b03, #32a89b)',
//                     'linear-gradient(to bottom, #037bfc, #22b045)',
//                     'linear-gradient(to bottom, #03fc3d, #a96d58)',
//                     'linear-gradient(to bottom, #f542da, #03fc3d)',
//                     'linear-gradient(to bottom, #03fc3d, #03f4fc)',
//                     'linear-gradient(to bottom, #03f4fc, #9cbf38)',
//                     'linear-gradient(to bottom, #fc03eb, #d64128)',
//                     'linear-gradient(to bottom, #fc03eb, #2e2d28)',
//                     'linear-gradient(to bottom, #fca503, #56723b)',
//                     'linear-gradient(to bottom, #fca503, #2dfc03)',
//                     'linear-gradient(to bottom, #f0b1ef, #fceb03)',
//                     'linear-gradient(to bottom, #9dba88, #03a9fc)',
//                   ];

//                   const cardColor = (index) => colors[index % colors.length];

//                   return (
//                     <div key={animal.number} className="col-6 col-md-2 p-2">
//                       <div className="animal-card" style={{ background: cardColor(index) }}>
//                         <div className="card-number">{animal.number}</div>
//                         <img
//                           src={animal.image}
//                           alt={`Animal ${animal.number}`}
//                           className="animal-img"
//                           style={{ width: '150px', height: '100px' }}
//                         />
//                         <div className="card-value">
//                           <button onClick={handleDecrement} className="btn btn-decrement">-</button>
//                           {animal.value}
//                           <button onClick={() => handleIncrement(animal.number)} className="btn btn-increment">+</button>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="col-2 col-md-1 right-chips">
//               {[100, 500, 1000, 5000].map((bet, index) => (
//                 <div key={index} className={`chip chip-colorr-${index + 1}`}>{bet}</div>
//               ))}
//             </div>
//           </div>

//           <div className="bottom-section row">
//             <div className="col-4 col-md-2 points-section">
//               <p style={{ color: 'white' }}>Played Points</p>
//               <h2 className="balance-value">{playedPoints}</h2>  {/* Total played points */}
//             </div>

//             <div className="col-8 col-md-7 control-buttons-wrapper text-center">
//               <div className="control-buttons">
//                 <button onClick={handleCancelAllBet} className="btn">Cancel All Bet</button>
//                 <button onClick={handleCancelPreviousBet} className="btn">Cancel Previous Bet</button>
//                 <button onClick={handleUpperLine} className="btn">Upper Line</button>
//                 <button onClick={handleLowerLine} className="btn">Lower Line</button>
//                 <button onClick={handleOddNumber} className="btn">Odd Number</button>
//                 <button onClick={handleEvenNumber} className="btn">Even Number</button>
//                 <i onClick={handleLogout} className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
//               </div>
//             </div>

//             <div className="col-12 col-md-2 timer-section text-center">
//               <h1 className="timer">
//                 {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal Dialog to show the last clicked number when the game ends */}
//       {isGameOver && clickedNumbers.length > 0 && (
//         <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Your Result</h5>
//               </div>
//               <div className="modal-body">
//                 <p>You win the below points:</p>
//                 <div className="number-item">{clickedNumbers.slice(-1)[0]}</div>
//                 <div className="modal-image">
//                   <img
//                     src={animalData.find(animal => animal.number === clickedNumbers.slice(-1)[0])?.image}
//                     alt={`Animal ${clickedNumbers.slice(-1)[0]}`}
//                     className="animal-img"
//                     style={{ width: '150px', height: '100px', display: 'flex', justifyContent: 'center' }}

//                   />
//                 </div>
//                 <div className="modal-points">
//                   {/* Custom points display logic */}
//                   {playedPoints >= 10 && playedPoints <= 70 ? 'Points: 0' :
//                     playedPoints >= 80 && playedPoints <= 160 ? 'Points: 80' :
//                       playedPoints >= 170 && playedPoints <= 240 ? 'Points: 80' :
//                         playedPoints >= 250 && playedPoints <= 320 ? 'Points: 160' :
//                           playedPoints >= 330 && playedPoints <= 400 ? 'Points: 240' :
//                             playedPoints >= 410 && playedPoints <= 500 ? 'Points: 320' :
//                               `Points: ${clickedNumbers.reduce((total, num) => {
//                                 const animal = animalData.find(animal => animal.number === num);
//                                 return total + (animal?.value || 0);
//                               }, 0)}`}
//                 </div>
//               </div>
//               {/* <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default GameDashboard1;


// after the changign value store  in localstorage 

/* eslint-disable react/prop-types */
//24,.11.2024
/* eslint-disable react/prop-types */
//19,.11.2024

// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ProfileImage from '../assets/ProfileImage.jpg';
// import './GameDashboard.css';


// const GameDashboard = ({ onLogout }) => {
//   const [animalData, setAnimalData] = useState([]);
//   const [clickedNumbers, setClickedNumbers] = useState([]);
//   const [totalBalance, setTotalBalance] = useState(500);
//   const [playedPoints, setPlayedPoints] = useState(0);
//   const [timer, setTimer] = useState(60);
//   const [isBettingAllowed, setIsBettingAllowed] = useState(true);
//   const [isGameOver, setIsGameOver] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const startGame = () => {

//       setIsLoading(true);

//       fetch('http://localhost:8080/getallimages')
//         .then(response => response.json())
//         .then(data => {
//           const formattedData = data.map(item => ({
//             number: item.number,
//             image: item.imagePath,
//             value: 0,
//           }));

//           setAnimalData(formattedData);

//           // Initialize game state from localStorage or reset if no data exists
//           const savedBalance = localStorage.getItem('totalBalance');
//           const savedPlayedPoints = localStorage.getItem('playedPoints');
//           const savedClickedNumbers = JSON.parse(localStorage.getItem('clickedNumbers')) || [];

//           // If no clicked numbers, set it to the numbers 1 to 12
//           const initializedClickedNumbers = savedClickedNumbers.length === 0 ? Array.from({ length: 12 }, (_, i) => i + 1) : savedClickedNumbers;



//           setTotalBalance(savedBalance ? parseInt(savedBalance, 10) : 500);
//           setPlayedPoints(savedPlayedPoints ? parseInt(savedPlayedPoints, 10) : 0);
//           setClickedNumbers(initializedClickedNumbers);

//           setTimer(60);
//           setIsBettingAllowed(true);
//           setIsGameOver(false);
//         })
//         .catch(error => {
//           console.error('Error fetching animal data:', error);
//           toast.error('Failed to load animal data!');
//         })
//         .finally(() => {
//           setIsLoading(false); // Set loading to false once data is fetched
//         });

//       clearInterval(window.timerInterval);

//       window.timerInterval = setInterval(() => {
//         setTimer(prevTime => {
//           if (prevTime === 1) {
//             clearInterval(window.timerInterval);
//             setIsBettingAllowed(false);
//             setIsGameOver(true);
//           } else if (prevTime <= 10) {
//             setIsBettingAllowed(false);
//           } else {
//             setIsBettingAllowed(true);
//           }
//           return prevTime - 1;
//         });
//       }, 1000);
//     };

//     if (isGameOver) {
//       setTimeout(() => {
//         startGame();
//       }, 10000);
//     } else {
//       startGame();
//     }

//     return () => clearInterval(window.timerInterval);
//   }, [isGameOver]);


//   // Handle value increment and update total balance and played points
//   const handleIncrement = (number) => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }
//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number === number ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );

//     setTotalBalance(prevBalance => prevBalance - 10);  // Deduct from total balance

//     setClickedNumbers(prevNumbers => {
//       const updatedNumbers = [...prevNumbers, number];
//       return updatedNumbers;  // Add the number to the clicked list
//     });

//     setPlayedPoints(prevPoints => prevPoints + 10);
//   };

//   // Handle value decrement and update total balance and played points
//   // Handle value decrement and update total balance and played points
//   const handleDecrement = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     // Prevent incrementing totalBalance if it's already 500
//     if (totalBalance >= 500) {
//       toast.info('Total balance is already at its maximum (500). Decrement not allowed.');
//       return; // Prevent any further action if balance is 500 or more
//     }

//     // Remove the most recent clicked number from the clickedNumbers list
//     setClickedNumbers(prevNumbers => {
//       const lastClickedNumber = prevNumbers[prevNumbers.length - 1];
//       if (!lastClickedNumber) return prevNumbers;  // No number to remove
//       const updatedNumbers = prevNumbers.slice(0, -1);  // Remove the last number

//       // Update animal data
//       setAnimalData(prevData =>
//         prevData.map(animal =>
//           animal.number === lastClickedNumber
//             ? { ...animal, value: Math.max(0, animal.value - 10) }  // Decrement the last clicked number by 10
//             : animal
//         )
//       );

//       // Decrease the total balance by 5, but only if it's less than 500
//       setTotalBalance(prevBalance => prevBalance + 5);  // Restore from total balance

//       // Decrease played points by 5, prevent going below 0
//       setPlayedPoints(prevPoints => Math.max(0, prevPoints - 5));  // Decrease by 5, prevent negative points

//       return updatedNumbers;  // Update the clickedNumbers list
//     });
//   };



//   // Cancel All Bet
//   const handleCancelAllBet = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal => ({ ...animal, value: 0 }))  // Reset all values
//     );
//     setClickedNumbers([]);  // Clear all clicked numbers
//     setTotalBalance(500);  // Reset total balance
//     setPlayedPoints(0);  // Reset played points
//     toast.info('All bets have been canceled!');
//   };

//   // Cancel Previous Bet
//   const handleCancelPreviousBet = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     const lastClickedNumber = clickedNumbers[clickedNumbers.length - 1];

//     if (lastClickedNumber) {
//       setAnimalData(prevData =>
//         prevData.map(animal =>
//           animal.number === lastClickedNumber ? { ...animal, value: Math.max(0, animal.value - 10) } : animal
//         )
//       );

//       setClickedNumbers(prevNumbers => prevNumbers.slice(0, -1));  // Remove the last clicked number
//       setTotalBalance(prevBalance => prevBalance + 10);  // Restore total balance

//       setPlayedPoints(prevPoints => Math.max(0, prevPoints - 10));  // Prevent negative points

//       toast.info('Previous bet has been canceled!');
//     }
//   };

//   // Handle Upper Line bet (First 6 animals)
//   const handleUpperLine = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index < 6 ? { ...animal, value: animal.value + 10 } : animal  // Increase first 6 animals' values
//       )
//     );

//     setTotalBalance(prevBalance => prevBalance - 60);  // Decrease total balance by 60 (10 x 6 animals)

//     const upperLineNumbers = animalData.slice(0, 6).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...upperLineNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 60);  // Add 60 for 6 bets
//   };

//   // Handle Lower Line bet (Last 6 animals)
//   const handleLowerLine = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index >= prevData.length - 6 ? { ...animal, value: animal.value + 10 } : animal  // Increase last 6 animals' values
//       )
//     );

//     setTotalBalance(prevBalance => prevBalance - 60);  // Decrease total balance by 60 (10 x 6 animals)

//     const lowerLineNumbers = animalData.slice(-6).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...lowerLineNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 60);  // Add 60 for 6 bets
//   };

//   // Handle Odd Number bet
//   const handleOddNumber = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 !== 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setTotalBalance(prevBalance => prevBalance - 60);

//     const oddNumbers = animalData.filter(animal => animal.number % 2 !== 0).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...oddNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 60);
//   };

//   // Handle Even Number bet
//   const handleEvenNumber = () => {
//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 === 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setTotalBalance(prevBalance => prevBalance - 60);

//     const evenNumbers = animalData.filter(animal => animal.number % 2 === 0).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...evenNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 50);
//   };
//   // Handle user logout
//   const handleLogout = () => {
//     onLogout();  // Assuming `onLogout` will handle the logout logic
//   };

//   const minBetNumber = (() => {
//     // Step 1: Find the minimum value in clicked numbers
//     const minValue = clickedNumbers.reduce((min, num) => {
//       const animal = animalData.find(animal => animal.number === num);
//       return animal ? Math.min(min, animal.value) : min;
//     }, Infinity);

//     // Step 2: Find all animals with this minimum value
//     const minBetAnimals = clickedNumbers.filter(num => {
//       const animal = animalData.find(animal => animal.number === num);
//       return animal && animal.value === minValue;
//     }).map(num => animalData.find(animal => animal.number === num));

//     // Step 3: Randomly pick one animal from the animals with the minimum value
//     const randomAnimal = minBetAnimals[Math.floor(Math.random() * minBetAnimals.length)];

//     return randomAnimal;
//   })();


//   const navigate = useNavigate();
//   const change = () => {

//     navigate("/profile");
//   }

//   return (
//     <>
//       <div className="body1">
//         <ToastContainer />
//         <div className="container-fluid game-ui">
//           <header className="header d-flex align-items-center justify-content-between">
//             <img src="/logo12.png" alt="Big Diamond Logo" className="logo" />
//             <div className="d-flex balance-and-numbers-wrapper">
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Total Balance</p>
//                 <h2 className="balance-value">{totalBalance}</h2>
//               </div>
//               <div className="numbers-wrapper">
//                 {/* Show the last clicked number after time is up */}
//                 {isGameOver && clickedNumbers.slice(-1).map((num, index) => (
//                   <span key={index} className="number-item">{num}</span>
//                 ))}
//               </div>
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Winning Points</p>
//                 <h2 className="balance-value">
//                   {playedPoints * 8}  {/* Multiply playedPoints by 8 */}
//                 </h2>
//               </div>
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Profile</p>

//                 <img
//                   src={ProfileImage}
//                   onClick={change}
//                   alt="User Avatar"
//                   className="profile-avatar-img"
//                   style={{ width: '15%', height: '15%', cursor: 'pointer' }}
//                 />

//               </div>
//             </div>
//           </header>

//           <div className="row main-row">
//             <div className="col-2 col-md-1 left-chips">
//             </div>

//             <div className="col-8 col-md-10 animal-cards">
//               {/* Display spinner while loading */}
//               {isLoading ? (
//                 <div className="spinner-container">
//                   <div className="spinner"></div>
//                 </div>
//               ) : (
//                 <div className="row">
//                   {animalData.map((animal, index) => {
//                     const colors = [
//                       'linear-gradient(to bottom, #fc0b03, #32a89b)',
//                       'linear-gradient(to bottom, #037bfc, #22b045)',
//                       'linear-gradient(to bottom, #03fc3d, #a96d58)',
//                       'linear-gradient(to bottom, #f542da, #03fc3d)',
//                       'linear-gradient(to bottom, #03fc3d, #03f4fc)',
//                       'linear-gradient(to bottom, #03f4fc, #9cbf38)',
//                       'linear-gradient(to bottom, #fc03eb, #d64128)',
//                       'linear-gradient(to bottom, #fc03eb, #2e2d28)',
//                       'linear-gradient(to bottom, #fca503, #56723b)',
//                       'linear-gradient(to bottom, #fca503, #2dfc03)',
//                       'linear-gradient(to bottom, #f0b1ef, #fceb03)',
//                       'linear-gradient(to bottom, #9dba88, #03a9fc)',
//                     ];

//                     const cardColor = (index) => colors[index % colors.length];

//                     return (
//                       <div key={animal.number} className="col-6 col-md-2 p-2">
//                         <div className="animal-card" style={{ background: cardColor(index) }}>
//                           <div className="card-number">{animal.number}</div>
//                           <img
//                             src={animal.image}
//                             alt={`Animal ${animal.number}`}
//                             className="animal-img"
//                             style={{ width: '150px', height: '100px' }}
//                           />
//                           <div className="card-value">
//                             <h6 onClick={handleDecrement} className="btn btn-decrement" style={{ color: 'black' }}>-</h6>
//                             {animal.value}
//                             <h6 onClick={() => handleIncrement(animal.number)} className="btn btn-increment" style={{ color: 'black' }}>+</h6>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//             <div className="col-2 col-md-1 right-chips">
//             </div>
//           </div>

//           <div className="bottom-section row">
//             <div className="col-4 col-md-2 points-section">
//               <p style={{ color: 'white' }}>Played Points</p>
//               <h2 className="balance-value">{playedPoints}</h2>  {/* Total played points */}
//             </div>

//             <div className="col-8 col-md-7 control-buttons-wrapper text-center">
//               <div className="control-buttons">
//                 <button onClick={handleCancelAllBet} className="btn">Cancel All Bet</button>
//                 <button onClick={handleCancelPreviousBet} className="btn">Cancel Previous Bet</button>
//                 <button onClick={handleUpperLine} className="btn">Upper Line</button>
//                 <button onClick={handleLowerLine} className="btn">Lower Line</button>
//                 <button onClick={handleOddNumber} className="btn">Odd Number</button>
//                 <button onClick={handleEvenNumber} className="btn">Even Number</button>
//                 <i onClick={handleLogout} className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" style={{ cursor: 'pointer' }}></i>
//               </div>
//             </div>

//             <div className="col-12 col-md-2 timer-section text-center">
//               <h1 className="timer">
//                 {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Modal Dialog to show the last clicked number when the game ends */}
//       {isGameOver && clickedNumbers.length > 0 && (
//         <div
//           className="modal fade show"
//           style={{
//             display: 'block',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background overlay
//           }}
//           tabIndex="-1"
//         >
//           <div className="modal-dialog modal-dialog-centered modal-lg">
//             <div className="modal-content rounded-3 shadow-lg">
//               <div className="modal-header  text-center">
//                 <h5 className="modal-title " >Your Result</h5>

//               </div>
//               <div className="modal-body text-center">
//                 <p className="fs-4 mb-4">Congratulations! You earned the following points:</p>

//                 {/* Display the animal number and its image */}
//                 {/* <div className="number-item mb-4" style={{ padding: '0px' }}>
//                   <span className="fs-1 fw-bold text-primary">{clickedNumbers.slice(-1)[0]}</span>
//                 </div> */}
//                 {/* <div className="modal-image mb-4">
//                   <img
//                     src={animalData.find(animal => animal.number === clickedNumbers.slice(-1)[0])?.image}
//                     alt={`Animal ${clickedNumbers.slice(-1)[0]}`}
//                     className="animal-img rounded-3"
//                     style={{
//                       width: '200px',
//                       height: '150px',
//                       objectFit: 'cover',
//                     }}
//                   />
//                 </div> */}
//                 {/* color */}
//                 {/* Display Points */}
//                 <div className="modal-points fs-5 text-secondary mb-4">
//                   {playedPoints <= 70 ? 'Points: 0' :
//                     playedPoints >= 80 && playedPoints <= 160 ? 'Points: 80' :
//                       playedPoints >= 170 && playedPoints <= 240 ? 'Points: 80' :
//                         playedPoints >= 250 && playedPoints <= 320 ? 'Points: 160' :
//                           playedPoints >= 330 && playedPoints <= 400 ? 'Points: 240' :
//                             playedPoints >= 410 && playedPoints <= 500 ? 'Points: 320' :
//                               playedPoints >= 510 && playedPoints <= 600 ? 'Points: 400' :
//                                 playedPoints >= 610 && playedPoints <= 700 ? 'Points: 480' :
//                                   playedPoints >= 710 && playedPoints <= 800 ? 'Points: 560' :
//                                     playedPoints >= 810 && playedPoints <= 900 ? 'Points: 640' :
//                                       playedPoints >= 910 && playedPoints <= 1000 ? 'Points: 720' :
//                                         playedPoints >= 1010 && playedPoints <= 1100 ? 'Points: 800' :
//                                           playedPoints >= 1110 && playedPoints <= 1200 ? 'Points: 880' :
//                                             `Points: ${clickedNumbers.reduce((total, num) => {
//                                               const animal = animalData.find(animal => animal.number === num);
//                                               return total + (animal?.value || 0);
//                                             }, 0)}`}
//                 </div>

//                 {/* Display the number with the minimum bet value */}
//                 {clickedNumbers.length > 0 && (
//                   <div className="min-bet-number-section text-center mb-4">
//                     <p className="fs-5 text-secondary">Your Number is :</p>

//                     {/* Display the random minimum bet animal */}
//                     {minBetNumber ? (
//                       <div className="modal-points fs-5 text-secondary mb-4">
//                         <div >
//                           <span className="fs-1 fw-bold text-primary">{minBetNumber.number}</span>
//                         </div>
//                         <div className="modal-image mb-4">
//                           <img
//                             src={minBetNumber.image}
//                             alt={`Animal ${minBetNumber.number}`}
//                             className="animal-img rounded-3"
//                             style={{
//                               width: '200px',
//                               height: '150px',
//                               objectFit: 'cover',
//                             }}
//                           />
//                         </div>
//                       </div>
//                     ) : (
//                       <p>No animals with minimum value found.</p>
//                     )}

//                   </div>
//                 )}

//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default GameDashboard;

//25.11.2024
/* eslint-disable react/prop-types */
//19,.11.2024

// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ProfileImage from '../assets/ProfileImage.jpg';
// import './GameDashboard.css';


// const GameDashboard = ({ onLogout }) => {
//   const [animalData, setAnimalData] = useState([]);
//   const [clickedNumbers, setClickedNumbers] = useState([]);
//   const [totalBalance, setTotalBalance] = useState(500);
//   const [playedPoints, setPlayedPoints] = useState(0);
//   const [timer, setTimer] = useState(60);
//   const [isBettingAllowed, setIsBettingAllowed] = useState(true);
//   const [isGameOver, setIsGameOver] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);





//   useEffect(() => {
//     const startGame = () => {

//       setIsLoading(true);

//       fetch('http://localhost:8080/getallimages')
//         .then(response => response.json())
//         .then(data => {
//           const formattedData = data.map(item => ({
//             number: item.number,
//             image: item.imagePath,
//             value: 0,
//           }));

//           setAnimalData(formattedData);

//           // Initialize game state from localStorage or reset if no data exists
//           const savedBalance = localStorage.getItem('totalBalance');
//           const savedPlayedPoints = localStorage.getItem('playedPoints');
//           const savedClickedNumbers = JSON.parse(localStorage.getItem('clickedNumbers')) || [];

//           // If no clicked numbers, set it to the numbers 1 to 12
//           const initializedClickedNumbers = savedClickedNumbers.length === 0 ? Array.from({ length: 12 }, (_, i) => i + 1) : savedClickedNumbers;


//           setTotalBalance(savedBalance ? parseInt(savedBalance, 10) : 500);
//           setPlayedPoints(savedPlayedPoints ? parseInt(savedPlayedPoints, 10) : 0);
//           setClickedNumbers(initializedClickedNumbers);

//           setTimer(60);
//           setIsBettingAllowed(true);
//           setIsGameOver(false);
//         })
//         .catch(error => {
//           console.error('Error fetching animal data:', error);
//           toast.error('Failed to load animal data!');
//         })
//         .finally(() => {
//           setIsLoading(false); // Set loading to false once data is fetched
//         });

//       clearInterval(window.timerInterval);

//       window.timerInterval = setInterval(() => {
//         setTimer(prevTime => {
//           if (prevTime === 1) {
//             clearInterval(window.timerInterval);
//             setIsBettingAllowed(false);
//             setIsGameOver(true);
//           } else if (prevTime <= 10) {
//             setIsBettingAllowed(false);
//           } else {
//             setIsBettingAllowed(true);
//           }
//           return prevTime - 1;
//         });
//       }, 1000);
//     };

//     if (isGameOver) {
//       setTimeout(() => {
//         startGame();
//       }, 10000);
//     } else {
//       startGame();
//     }

//     return () => clearInterval(window.timerInterval);

//   }, [isGameOver]);


//   // Handle value increment and update total balance and played points
//   const handleIncrement = (number) => {

//     if (totalBalance === 0) {
//       toast.info('Please recharge your balance to place a bet!');
//       return;
//     }

//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }
//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number === number ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );

//     setTotalBalance(prevBalance => prevBalance - 10);  // Deduct from total balance

//     setClickedNumbers(prevNumbers => {
//       const updatedNumbers = [...prevNumbers, number];
//       return updatedNumbers;  // Add the number to the clicked list
//     });

//     setPlayedPoints(prevPoints => prevPoints + 10);
//   };

//   // Handle value decrement and update total balance and played points
//   // Handle value decrement and update total balance and played points
//   const handleDecrement = () => {

//     if (totalBalance === 0) {
//       toast.info('Please recharge your balance to place a bet!');
//       return;
//     }

//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     // Prevent incrementing totalBalance if it's already 500
//     if (totalBalance >= 500) {
//       toast.info('Total balance is already at its maximum (500). Decrement not allowed.');
//       return; // Prevent any further action if balance is 500 or more
//     }

//     // Remove the most recent clicked number from the clickedNumbers list
//     setClickedNumbers(prevNumbers => {
//       const lastClickedNumber = prevNumbers[prevNumbers.length - 1];
//       if (!lastClickedNumber) return prevNumbers;  // No number to remove
//       const updatedNumbers = prevNumbers.slice(0, -1);  // Remove the last number

//       // Update animal data
//       setAnimalData(prevData =>
//         prevData.map(animal =>
//           animal.number === lastClickedNumber
//             ? { ...animal, value: Math.max(0, animal.value - 10) }  // Decrement the last clicked number by 10
//             : animal
//         )
//       );

//       // Decrease the total balance by 5, but only if it's less than 500
//       setTotalBalance(prevBalance => prevBalance + 5);  // Restore from total balance

//       // Decrease played points by 5, prevent going below 0
//       setPlayedPoints(prevPoints => Math.max(0, prevPoints - 5));  // Decrease by 5, prevent negative points

//       return updatedNumbers;  // Update the clickedNumbers list
//     });
//   };



//   // Cancel All Bet
//   const handleCancelAllBet = () => {



//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal => ({ ...animal, value: 0 }))  // Reset all values
//     );
//     setClickedNumbers([]);  // Clear all clicked numbers
//     setTotalBalance(500);  // Reset total balance
//     setPlayedPoints(0);  // Reset played points
//     toast.info('All bets have been canceled!');
//   };

//   // Cancel Previous Bet
//   const handleCancelPreviousBet = () => {



//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     const lastClickedNumber = clickedNumbers[clickedNumbers.length - 1];

//     if (lastClickedNumber) {
//       setAnimalData(prevData =>
//         prevData.map(animal =>
//           animal.number === lastClickedNumber ? { ...animal, value: Math.max(0, animal.value - 10) } : animal
//         )
//       );

//       setClickedNumbers(prevNumbers => prevNumbers.slice(0, -1));  // Remove the last clicked number
//       setTotalBalance(prevBalance => prevBalance + 10);  // Restore total balance

//       setPlayedPoints(prevPoints => Math.max(0, prevPoints - 10));  // Prevent negative points

//       toast.info('Previous bet has been canceled!');
//     }
//   };

//   // Handle Upper Line bet (First 6 animals)
//   const handleUpperLine = () => {

//     if (totalBalance === 0) {
//       toast.info('Please recharge your balance to place a bet!');
//       return;
//     }

//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index < 6 ? { ...animal, value: animal.value + 10 } : animal  // Increase first 6 animals' values
//       )
//     );

//     setTotalBalance(prevBalance => prevBalance - 60);  // Decrease total balance by 60 (10 x 6 animals)

//     const upperLineNumbers = animalData.slice(0, 6).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...upperLineNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 60);  // Add 60 for 6 bets
//   };

//   // Handle Lower Line bet (Last 6 animals)
//   const handleLowerLine = () => {

//     if (totalBalance === 0) {
//       toast.info('Please recharge your balance to place a bet!');
//       return;
//     }

//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index >= prevData.length - 6 ? { ...animal, value: animal.value + 10 } : animal  // Increase last 6 animals' values
//       )
//     );

//     setTotalBalance(prevBalance => prevBalance - 60);  // Decrease total balance by 60 (10 x 6 animals)

//     const lowerLineNumbers = animalData.slice(-6).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...lowerLineNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 60);  // Add 60 for 6 bets
//   };

//   // Handle Odd Number bet
//   const handleOddNumber = () => {

//     if (totalBalance === 0) {
//       toast.info('Please recharge your balance to place a bet!');
//       return;
//     }

//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 !== 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setTotalBalance(prevBalance => prevBalance - 60);

//     const oddNumbers = animalData.filter(animal => animal.number % 2 !== 0).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...oddNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 60);
//   };

//   // Handle Even Number bet
//   const handleEvenNumber = () => {


//     if (totalBalance === 0) {
//       toast.info('Please recharge your balance to place a bet!');
//       return;
//     }

//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 === 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setTotalBalance(prevBalance => prevBalance - 60);

//     const evenNumbers = animalData.filter(animal => animal.number % 2 === 0).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...evenNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 50);
//   };
//   // Handle user logout
//   const handleLogout = () => {
//     onLogout();  // Assuming `onLogout` will handle the logout logic
//   };

//   const minBetNumber = (() => {
//     let betValue = null;

//     // Step 1: Determine the bet value based on playedPoints
//     if (playedPoints >= 80 && playedPoints <= 160) {
//       betValue = 10;
//     } else if (playedPoints >= 170 && playedPoints <= 240) {
//       betValue = 10;
//     } else if (playedPoints >= 240 && playedPoints <= 320) {
//       betValue = 20;
//     } else if (playedPoints >= 330 && playedPoints <= 400) {
//       betValue = 30;
//     } else if (playedPoints >= 410 && playedPoints <= 500) {
//       betValue = 40;
//     } else if (playedPoints >= 510 && playedPoints <= 600) {
//       betValue = 50;
//     } else if (playedPoints >= 610 && playedPoints <= 700) {
//       betValue = 60;
//     } else if (playedPoints >= 710 && playedPoints <= 800) {
//       betValue = 70;
//     } else if (playedPoints >= 810 && playedPoints <= 900) {
//       betValue = 80;
//     } else if (playedPoints >= 910 && playedPoints <= 1000) {
//       betValue = 90;
//     } else if (playedPoints >= 1010 && playedPoints <= 1100) {
//       betValue = 100;
//     } else if (playedPoints >= 1110 && playedPoints <= 1200) {
//       betValue = 110;
//     }

//     // 2
//     const findAnimalWithBetValue = (betValue) => {
//       // Find animals with the bet value
//       const betAnimals = clickedNumbers.filter(num => {
//         const animal = animalData.find(animal => animal.number === num);
//         return animal && animal.value === betValue;
//       }).map(num => animalData.find(animal => animal.number === num));

//       if (betAnimals.length > 0) {
//         // Return a random animal if there are any with the bet value
//         return betAnimals[Math.floor(Math.random() * betAnimals.length)];
//       } else {
//         return null;
//       }
//     }

//     //3
//     if (playedPoints >= 10 && playedPoints <= 70) {
//       // Find animals with 0 points bet
//       const zeroPointAnimals = animalData.filter(animal => animal.value === 0 && !clickedNumbers.includes(animal.number));

//       if (zeroPointAnimals.length > 0) {
//         // Return a random animal with 0 points bet if found
//         return zeroPointAnimals[Math.floor(Math.random() * zeroPointAnimals.length)];
//       } else {
//         // If no animals with 0 points, fallback to showing any random animal with 0 points
//         return findAnimalWithBetValue(0);
//       }
//     }

//     // 4
//     if (betValue !== null) {
//       let animal = findAnimalWithBetValue(betValue);

//       if (animal) {
//         return animal;
//       }

//       // 5
//       let lowerBetValue = betValue;

//       // Fallback logic: check smaller bet values (10, 20, 30, etc.)
//       while (lowerBetValue > 0) {
//         lowerBetValue -= 10;

//         animal = findAnimalWithBetValue(lowerBetValue);
//         if (animal) {

//           return animal;
//         }
//       }

//       // If no valid animals are found for any bet value, return an animal with 0 points
//       return findAnimalWithBetValue(0); // Fallback to 0-point bet if no animals found
//     } else {
//       // If no bet is placed, return a random animal from all available animals
//       const randomAnimal = animalData[Math.floor(Math.random() * animalData.length)];

//       return randomAnimal;
//     }
//   })();

//   const navigate = useNavigate();
//   const change = () => {

//     navigate("/profile");
//   }

//   return (
//     <>
//       <div className="body1">
//         <ToastContainer />
//         <div className="container-fluid game-ui">
//           <header className="header d-flex align-items-center justify-content-between">
//             <img src="/logo12.png" alt="Big Diamond Logo" className="logo" />
//             <div className="d-flex balance-and-numbers-wrapper">
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Total Balance</p>
//                 <h2 className="balance-value">{totalBalance}</h2>
//               </div>

//               <div className="numbers-wrapper">
//                 {isGameOver && clickedNumbers.length > 0 && (
//                   <span>
//                     {minBetNumber ? (
//                       <span>
//                         <span className="number-item">{minBetNumber.number}</span>
//                       </span>
//                     ) : (
//                       <p>No animals with minimum value found.</p>
//                     )}
//                   </span>
//                 )}
//               </div>

//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Winning Points</p>
//                 <h2 className="balance-value">
//                   {playedPoints * 8}  {/* Multiply playedPoints by 8 */}
//                 </h2>
//               </div>

//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Profile</p>
//                 <img
//                   src={ProfileImage}
//                   onClick={change}
//                   alt="User Avatar"
//                   className="profile-avatar-img"
//                   style={{ width: '15%', height: '15%', cursor: 'pointer' }}
//                 />
//               </div>
//             </div>
//           </header>


//           <div className="row main-row">
//             <div className="col-2 col-md-1 left-chips">
//             </div>

//             <div className="col-8 col-md-10 animal-cards">
//               {/* Display spinner while loading */}
//               {isLoading ? (
//                 <div className="spinner-container">
//                   <div className="spinner"></div>
//                 </div>
//               ) : (
//                 <div className="row">
//                   {animalData.map((animal, index) => {
//                     const colors = [
//                       'linear-gradient(to bottom, #fc0b03, #32a89b)',
//                       'linear-gradient(to bottom, #037bfc, #22b045)',
//                       'linear-gradient(to bottom, #03fc3d, #a96d58)',
//                       'linear-gradient(to bottom, #f542da, #03fc3d)',
//                       'linear-gradient(to bottom, #03fc3d, #03f4fc)',
//                       'linear-gradient(to bottom, #03f4fc, #9cbf38)',
//                       'linear-gradient(to bottom, #fc03eb, #d64128)',
//                       'linear-gradient(to bottom, #fc03eb, #2e2d28)',
//                       'linear-gradient(to bottom, #fca503, #56723b)',
//                       'linear-gradient(to bottom, #fca503, #2dfc03)',
//                       'linear-gradient(to bottom, #f0b1ef, #fceb03)',
//                       'linear-gradient(to bottom, #9dba88, #03a9fc)',
//                     ];

//                     const cardColor = (index) => colors[index % colors.length];

//                     return (
//                       <div key={animal.number} className="col-6 col-md-2 p-2">
//                         <div className="animal-card" style={{ background: cardColor(index) }}>
//                           <div className="card-number">{animal.number}</div>
//                           <img
//                             src={animal.image}
//                             alt={`Animal ${animal.number}`}
//                             className="animal-img"
//                             style={{ width: '150px', height: '100px' }}
//                           />
//                           <div className="card-value">
//                             <h6 onClick={handleDecrement} className="btn btn-decrement" style={{ color: 'black' }}>-</h6>
//                             {animal.value}
//                             <h6 onClick={() => handleIncrement(animal.number)} className="btn btn-increment" style={{ color: 'black' }}>+</h6>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//             <div className="col-2 col-md-1 right-chips">
//             </div>
//           </div>

//           <div className="bottom-section row">
//             <div className="col-4 col-md-2 points-section">
//               <p style={{ color: 'white' }}>Played Points</p>
//               <h2 className="balance-value">{playedPoints}</h2>  {/* Total played points */}
//             </div>

//             <div className="col-8 col-md-7 control-buttons-wrapper text-center">
//               <div className="control-buttons">
//                 <button onClick={handleCancelAllBet} className="btn">Cancel All Bet</button>
//                 <button onClick={handleCancelPreviousBet} className="btn">Cancel Previous Bet</button>
//                 <button onClick={handleUpperLine} className="btn">Upper Line</button>
//                 <button onClick={handleLowerLine} className="btn">Lower Line</button>
//                 <button onClick={handleOddNumber} className="btn">Odd Number</button>
//                 <button onClick={handleEvenNumber} className="btn">Even Number</button>
//                 <i onClick={handleLogout} className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" style={{ cursor: 'pointer' }}></i>
//               </div>
//             </div>

//             <div className="col-12 col-md-2 d-flex justify-content-center align-items-center timer-section text-center">
//               <h1 className="timer">
//                 {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
//               </h1>
//             </div>

//           </div>
//         </div>
//       </div>
//       {/* Modal Dialog to show the last clicked number when the game ends */}
//       {isGameOver && clickedNumbers.length > 0 && (
//         <div
//           className="modal fade show"
//           style={{
//             display: 'block',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background overlay
//           }}
//           tabIndex="-1"
//         >
//           <div className="modal-dialog modal-dialog-centered modal-lg">
//             <div className="modal-content rounded-3 shadow-lg">
//               <div className="modal-header  text-center">
//                 <h5 className="modal-title " >Your Result</h5>

//               </div>
//               <div className="modal-body text-center">
//                 <p className="fs-4 mb-4">Congratulations! You earned the following points:</p>

//                 {/* Display the animal number and its image */}

//                 <div className="modal-points fs-5 text-secondary mb-4">
//                   {playedPoints <= 70 ? 'Points: 0' :
//                     playedPoints >= 80 && playedPoints <= 160 ? 'Points: 80' :
//                       playedPoints >= 170 && playedPoints <= 240 ? 'Points: 80' :
//                         playedPoints >= 250 && playedPoints <= 320 ? 'Points: 160' :
//                           playedPoints >= 330 && playedPoints <= 400 ? 'Points: 240' :
//                             playedPoints >= 410 && playedPoints <= 500 ? 'Points: 320' :
//                               playedPoints >= 510 && playedPoints <= 600 ? 'Points: 400' :
//                                 playedPoints >= 610 && playedPoints <= 700 ? 'Points: 480' :
//                                   playedPoints >= 710 && playedPoints <= 800 ? 'Points: 560' :
//                                     playedPoints >= 810 && playedPoints <= 900 ? 'Points: 640' :
//                                       playedPoints >= 910 && playedPoints <= 1000 ? 'Points: 720' :
//                                         playedPoints >= 1010 && playedPoints <= 1100 ? 'Points: 800' :
//                                           playedPoints >= 1110 && playedPoints <= 1200 ? 'Points: 880' :
//                                             `Points: ${clickedNumbers.reduce((total, num) => {
//                                               const animal = animalData.find(animal => animal.number === num);
//                                               return total + (animal?.value || 0);
//                                             }, 0)}`}
//                 </div>

//                 {/* Display the number with the minimum bet value */}
//                 {clickedNumbers.length > 0 && (
//                   <div className="min-bet-number-section text-center mb-4">
//                     <p className="fs-5 text-secondary">Your Number is :</p>

//                     {/* Display the random minimum bet animal */}
//                     {minBetNumber ? (
//                       <div className="modal-points fs-5 text-secondary mb-4">
//                         <div >

//                           <span className="fs-1 fw-bold text-primary">{minBetNumber.number}</span>

//                         </div>
//                         <div className="modal-image mb-4">
//                           <img
//                             src={minBetNumber.image}
//                             alt={`Animal ${minBetNumber.number}`}
//                             className="animal-img rounded-3"
//                             style={{
//                               width: '500px',
//                               height: '300px',
//                               objectFit: 'cover',
//                             }}
//                           />
//                         </div>
//                       </div>
//                     ) : (
//                       <p>No animals with minimum value found.</p>
//                     )}

//                   </div>
//                 )}

//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default GameDashboard;


//27.11.2024
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
//19,.11.2024

// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ProfileImage from '../assets/ProfileImage.jpg';
// import './GameDashboard.css';


// const GameDashboard = ({ onLogout }) => {
//   const [animalData, setAnimalData] = useState([]);
//   const [clickedNumbers, setClickedNumbers] = useState([]);
//   const [totalBalance, setTotalBalance] = useState(0);
//   const [playedPoints, setPlayedPoints] = useState(0);
//   const [timer, setTimer] = useState(60);
//   const [isBettingAllowed, setIsBettingAllowed] = useState(true);
//   const [isGameOver, setIsGameOver] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [minBetNumber, setMinBetNumber] = useState(null);
//   const [showNumber, setShowNumber] = useState(false);
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const startGame = () => {


//       setIsLoading(true);

//       fetch('http://localhost:8080/getallimages')
//         .then(response => response.json())
//         .then(data => {
//           const formattedData = data.map(item => ({
//             number: item.number,
//             image: item.imagePath,
//             value: 0,
//           }));

//           setAnimalData(formattedData);

//           // Initialize game state from localStorage or reset if no data exists
//           const savedBalance = localStorage.getItem('totalBalance');
//           const savedPlayedPoints = localStorage.getItem('playedPoints');
//           const savedClickedNumbers = JSON.parse(localStorage.getItem('clickedNumbers')) || [];

//           // If no clicked numbers, set it to the numbers 1 to 12
//           const initializedClickedNumbers = savedClickedNumbers.length === 0 ? Array.from({ length: 12 }, (_, i) => i + 1) : savedClickedNumbers;


//           let storedNumber = JSON.parse(localStorage.getItem('minBetNumber')) || [];

//           console.log("our game", storedNumber);

//           setTotalBalance(savedBalance ? parseInt(savedBalance, 10) : 500);
//           setPlayedPoints(savedPlayedPoints ? parseInt(savedPlayedPoints, 10) : 0);
//           setClickedNumbers(initializedClickedNumbers);

//           setTimer(60);
//           setIsBettingAllowed(true);
//           setIsGameOver(false);
//         })
//         .catch(error => {
//           console.error('Error fetching animal data:', error);
//           toast.error('Failed to load animal data!');
//         })
//         .finally(() => {
//           setIsLoading(false); // Set loading to false once data is fetched
//         });

//       clearInterval(window.timerInterval);

//       window.timerInterval = setInterval(() => {
//         setTimer(prevTime => {
//           if (prevTime === 1) {
//             clearInterval(window.timerInterval);
//             setIsBettingAllowed(false);
//             setIsGameOver(true);
//           } else if (prevTime <= 10) {
//             setIsBettingAllowed(false);
//           } else {
//             setIsBettingAllowed(true);
//           }
//           return prevTime - 1;
//         });
//       }, 1000);
//     };

//     if (isGameOver) {
//       setTimeout(() => {
//         startGame();
//       }, 10000);
//     } else {
//       startGame();
//     }

//     return () => clearInterval(window.timerInterval);

//   }, [isGameOver]);


//   // Handle value increment and update total balance and played points
//   const handleIncrement = (number) => {

//     if (totalBalance === 0) {
//       toast.info('Please recharge your balance to place a bet!');
//       return;
//     }

//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }
//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number === number ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );

//     setTotalBalance(prevBalance => prevBalance - 10);  // Deduct from total balance

//     setClickedNumbers(prevNumbers => {
//       const updatedNumbers = [...prevNumbers, number];
//       return updatedNumbers;  // Add the number to the clicked list
//     });

//     setPlayedPoints(prevPoints => prevPoints + 10);
//   };


//   // Handle value decrement and update total balance and played points
//   const handleDecrement = () => {

//     if (totalBalance === 0) {
//       toast.info('Please recharge your balance to place a bet!');
//       return;
//     }

//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     // Prevent incrementing totalBalance if it's already 500
//     if (totalBalance >= 500) {
//       toast.info('Total balance is already at its maximum (500). Decrement not allowed.');
//       return;
//     }

//     // Remove the most recent clicked number from the clickedNumbers list
//     setClickedNumbers(prevNumbers => {
//       const lastClickedNumber = prevNumbers[prevNumbers.length - 1];
//       if (!lastClickedNumber) return prevNumbers;  // No number to remove
//       const updatedNumbers = prevNumbers.slice(0, -1);  // Remove the last number

//       // Update animal data
//       setAnimalData(prevData =>
//         prevData.map(animal =>
//           animal.number === lastClickedNumber
//             ? { ...animal, value: Math.max(0, animal.value - 10) }
//             : animal
//         )
//       );

//       // Decrease the total balance by 5, but only if it's less than 500
//       setTotalBalance(prevBalance => prevBalance + 5);

//       // Decrease played points by 5, prevent going below 0
//       setPlayedPoints(prevPoints => Math.max(0, prevPoints - 5));

//       return updatedNumbers;
//     });
//   };



//   // Cancel All Bet
//   const handleCancelAllBet = () => {



//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal => ({ ...animal, value: 0 }))
//     );
//     setClickedNumbers([]);
//     setTotalBalance(500);
//     setPlayedPoints(0);
//     toast.info('All bets have been canceled!');
//   };

//   // Cancel Previous Bet
//   const handleCancelPreviousBet = () => {



//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     const lastClickedNumber = clickedNumbers[clickedNumbers.length - 1];

//     if (lastClickedNumber) {
//       setAnimalData(prevData =>
//         prevData.map(animal =>
//           animal.number === lastClickedNumber ? { ...animal, value: Math.max(0, animal.value - 10) } : animal
//         )
//       );

//       setClickedNumbers(prevNumbers => prevNumbers.slice(0, -1));
//       setTotalBalance(prevBalance => prevBalance + 10);

//       setPlayedPoints(prevPoints => Math.max(0, prevPoints - 10));
//       toast.info('Previous bet has been canceled!');
//     }
//   };

//   // Handle Upper Line bet (First 6 animals)
//   const handleUpperLine = () => {

//     if (totalBalance === 0) {
//       toast.info('Please recharge your balance to place a bet!');
//       return;
//     }

//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index < 6 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );

//     setTotalBalance(prevBalance => prevBalance - 60);

//     const upperLineNumbers = animalData.slice(0, 6).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...upperLineNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 60);
//   };

//   // Handle Lower Line bet (Last 6 animals)
//   const handleLowerLine = () => {

//     if (totalBalance === 0) {
//       toast.info('Please recharge your balance to place a bet!');
//       return;
//     }

//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map((animal, index) =>
//         index >= prevData.length - 6 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );

//     setTotalBalance(prevBalance => prevBalance - 60);

//     const lowerLineNumbers = animalData.slice(-6).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...lowerLineNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 60);
//   };

//   // Handle Odd Number bet
//   const handleOddNumber = () => {

//     if (totalBalance === 0) {
//       toast.info('Please recharge your balance to place a bet!');
//       return;
//     }

//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 !== 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setTotalBalance(prevBalance => prevBalance - 60);

//     const oddNumbers = animalData.filter(animal => animal.number % 2 !== 0).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...oddNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 60);
//   };

//   // Handle Even Number bet
//   const handleEvenNumber = () => {


//     if (totalBalance === 0) {
//       toast.info('Please recharge your balance to place a bet!');
//       return;
//     }

//     if (!isBettingAllowed) {
//       toast.info('Betting is no longer allowed. Time is up!');
//       return;
//     }

//     setAnimalData(prevData =>
//       prevData.map(animal =>
//         animal.number % 2 === 0 ? { ...animal, value: animal.value + 10 } : animal
//       )
//     );
//     setTotalBalance(prevBalance => prevBalance - 60);

//     const evenNumbers = animalData.filter(animal => animal.number % 2 === 0).map(animal => animal.number);
//     setClickedNumbers(prevNumbers => [...prevNumbers, ...evenNumbers]);

//     setPlayedPoints(prevPoints => prevPoints + 50);
//   };
//   // Handle user logout
//   const handleLogout = () => {
//     onLogout();
//   };

//   const findAnimalWithBetValue = (betValue) => {
//     // Find animals with the bet value
//     const betAnimals = clickedNumbers
//       .filter((num) => {
//         const animal = animalData.find((animal) => animal.number === num);
//         return animal && animal.value === betValue;
//       })
//       .map((num) => animalData.find((animal) => animal.number === num));

//     if (betAnimals.length > 0) {
//       // Return a random animal if there are any with the bet value
//       return betAnimals[Math.floor(Math.random() * betAnimals.length)];
//     }
//     return null;
//   };

//   const calculateMinBetNumber = () => {
//     let betValue = null;

//     // Step 1: Determine the bet value based on playedPoints
//     if (playedPoints >= 80 && playedPoints <= 160) betValue = 10;
//     else if (playedPoints >= 170 && playedPoints <= 240) betValue = 10;
//     else if (playedPoints >= 240 && playedPoints <= 320) betValue = 20;
//     else if (playedPoints >= 330 && playedPoints <= 400) betValue = 30;
//     else if (playedPoints >= 410 && playedPoints <= 500) betValue = 40;
//     else if (playedPoints >= 510 && playedPoints <= 600) betValue = 50;
//     else if (playedPoints >= 610 && playedPoints <= 700) betValue = 60;
//     else if (playedPoints >= 710 && playedPoints <= 800) betValue = 70;
//     else if (playedPoints >= 810 && playedPoints <= 900) betValue = 80;
//     else if (playedPoints >= 910 && playedPoints <= 1000) betValue = 90;
//     else if (playedPoints >= 1010 && playedPoints <= 1100) betValue = 100;
//     else if (playedPoints >= 1110 && playedPoints <= 1200) betValue = 110;

//     // Step 2: Special case for 0-point animals
//     if (playedPoints >= 10 && playedPoints <= 70) {
//       const zeroPointAnimals = animalData.filter(
//         (animal) => animal.value === 0 && !clickedNumbers.includes(animal.number)
//       );

//       if (zeroPointAnimals.length > 0) {
//         return zeroPointAnimals[Math.floor(Math.random() * zeroPointAnimals.length)];
//       }
//       return findAnimalWithBetValue(0);
//     }

//     // Step 3: Find an animal with the bet value
//     if (betValue !== null) {
//       let animal = findAnimalWithBetValue(betValue);

//       if (animal) return animal;

//       // Step 4: Fallback logic - decrement the bet value
//       let lowerBetValue = betValue;

//       while (lowerBetValue > 0) {
//         lowerBetValue -= 10;
//         animal = findAnimalWithBetValue(lowerBetValue);
//         if (animal) return animal;
//       }

//       // Ultimate fallback: Find any animal with 0 points
//       return findAnimalWithBetValue(0);
//     }

//     // Step 5: Random animal as a last resort
//     return animalData[Math.floor(Math.random() * animalData.length)];
//   };


//   // const updateResultsInLocalStorage = (newResult) => {
//   //   const storedResults = JSON.parse(localStorage.getItem("gameResults")) || [];
//   //   const updatedResults = [newResult, ...storedResults.slice(0, 9)]; // Limit to 10 results
//   //   localStorage.setItem("gameResults", JSON.stringify(updatedResults));
//   //   setResults(updatedResults);
//   //   console.log("log", updatedResults);
//   // };
//   const updateResultsInLocalStorage = (newResult) => {
//     const storedResults = JSON.parse(localStorage.getItem("gameResults")) || [];
//     const updatedResults = [newResult, ...storedResults.slice(0, 9)];
//     localStorage.setItem("gameResults", JSON.stringify(updatedResults));
//     setResults(updatedResults);
//   };




//   useEffect(() => {


//     const storedResults = JSON.parse(localStorage.getItem("gameResults")) || [];
//     setResults(storedResults);
//     // Step 6: Calculate the minimum bet number
//     const calculatedNumber = calculateMinBetNumber();
//     setMinBetNumber(calculatedNumber);

//     // Step 7: Delay showing the number by 1 minute (60000ms)
//     const timer = setTimeout(() => {
//       setShowNumber(true);
//       updateResultsInLocalStorage(calculatedNumber?.number || "No valid animal found");
//     }, 60000);

//     // Cleanup timer on component unmount
//     return () => clearTimeout(timer);
//   }, [playedPoints, animalData, clickedNumbers]);



//   const navigate = useNavigate();
//   const change = () => {

//     navigate("/profile");
//   }

//   useEffect(() => {
//     const userId = localStorage.getItem('userId');  // Get userId from localStorage

//     if (userId) {
//       // Fetch the total balance for the user
//       fetch(`http://localhost:8080/user/totalamount/${userId}`)
//         .then(response => response.json())
//         .then(data => {
//           setTotalBalance(data);  // Update the totalBalance state with API response
//         })
//         .catch(error => {
//           console.error('Error fetching total balance:', error);
//           toast.error('Failed to load total balance!');
//         });
//     } else {
//       toast.error('User ID not found!');
//     }
//   }, []);

//   return (
//     <>
//       <div className="body1">
//         <ToastContainer />
//         <div className="container-fluid game-ui">
//           <header className="header d-flex align-items-center justify-content-between">
//             <img src="/logo12.png" alt="Big Diamond Logo" className="logo" />
//             <div className="d-flex balance-and-numbers-wrapper">
//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Total Balance</p>
//                 <h2 className="balance-value">{totalBalance}</h2>
//               </div>

//               <div className="numbers-wrapper">
//                 {results.map((num, index) => (
//                   <div key={index} className="numbers-wrapper">
//                     <span className="number-item">{num}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Winning Points</p>
//                 <h2 className="balance-value">
//                   {playedPoints * 8}  {/* Multiply playedPoints by 8 */}
//                 </h2>
//               </div>

//               <div className="balance-section text-center">
//                 <p style={{ color: 'white' }}>Profile</p>
//                 <img
//                   src={ProfileImage}
//                   onClick={change}
//                   alt="User Avatar"
//                   className="profile-avatar-img"
//                   style={{ width: '15%', height: '15%', cursor: 'pointer' }}
//                 />
//               </div>
//             </div>
//           </header>


//           <div className="row main-row">
//             <div className="col-2 col-md-1 left-chips">
//             </div>

//             <div className="col-8 col-md-10 animal-cards">
//               {/* Display spinner while loading */}
//               {isLoading ? (
//                 <div className="spinner-container">
//                   <div className="spinner"></div>
//                 </div>
//               ) : (
//                 <div className="row">
//                   {animalData.map((animal, index) => {
//                     const colors = [
//                       'linear-gradient(to bottom, #fc0b03, #32a89b)',
//                       'linear-gradient(to bottom, #037bfc, #22b045)',
//                       'linear-gradient(to bottom, #03fc3d, #a96d58)',
//                       'linear-gradient(to bottom, #f542da, #03fc3d)',
//                       'linear-gradient(to bottom, #03fc3d, #03f4fc)',
//                       'linear-gradient(to bottom, #03f4fc, #9cbf38)',
//                       'linear-gradient(to bottom, #fc03eb, #d64128)',
//                       'linear-gradient(to bottom, #fc03eb, #2e2d28)',
//                       'linear-gradient(to bottom, #fca503, #56723b)',
//                       'linear-gradient(to bottom, #fca503, #2dfc03)',
//                       'linear-gradient(to bottom, #f0b1ef, #fceb03)',
//                       'linear-gradient(to bottom, #9dba88, #03a9fc)',
//                     ];

//                     const cardColor = (index) => colors[index % colors.length];

//                     return (
//                       <div key={animal.number} className="col-6 col-md-2 p-2">
//                         <div className="animal-card" style={{ background: cardColor(index) }}>
//                           <div className="card-number">{animal.number}</div>
//                           <img
//                             src={animal.image}
//                             alt={`Animal ${animal.number}`}
//                             className="animal-img"
//                             style={{ width: '150px', height: '100px' }}
//                           />
//                           <div className="card-value">
//                             <h6 onClick={handleDecrement} className="btn btn-decrement" style={{ color: 'black' }}>-</h6>
//                             {animal.value}
//                             <h6 onClick={() => handleIncrement(animal.number)} className="btn btn-increment" style={{ color: 'black' }}>+</h6>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//             <div className="col-2 col-md-1 right-chips">
//             </div>
//           </div>

//           <div className="bottom-section row">
//             <div className="col-4 col-md-2 points-section">
//               <p style={{ color: 'white' }}>Played Points</p>
//               <h2 className="balance-value">{playedPoints}</h2>  {/* Total played points */}
//             </div>

//             <div className="col-8 col-md-7 control-buttons-wrapper text-center">
//               <div className="control-buttons">
//                 <button onClick={handleCancelAllBet} className="btn">Cancel All Bet</button>
//                 <button onClick={handleCancelPreviousBet} className="btn">Cancel Previous Bet</button>
//                 <button onClick={handleUpperLine} className="btn">Upper Line</button>
//                 <button onClick={handleLowerLine} className="btn">Lower Line</button>
//                 <button onClick={handleOddNumber} className="btn">Odd Number</button>
//                 <button onClick={handleEvenNumber} className="btn">Even Number</button>
//                 <i onClick={handleLogout} className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" style={{ cursor: 'pointer' }}></i>
//               </div>
//             </div>

//             <div className="col-12 col-md-2 d-flex justify-content-center align-items-center timer-section text-center">
//               <h1 className="timer">
//                 {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
//               </h1>
//             </div>

//           </div>
//         </div>
//       </div>
//       {/* Modal Dialog to show the last clicked number when the game ends */}
//       {isGameOver && clickedNumbers.length > 0 && (
//         <div
//           className="modal fade show"
//           style={{
//             display: 'block',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background overlay
//           }}
//           tabIndex="-1"
//         >
//           <div className="modal-dialog modal-dialog-centered modal-lg">
//             <div className="modal-content rounded-3 shadow-lg">
//               <div className="modal-header  text-center">
//                 <h5 className="modal-title " >Your Result</h5>

//               </div>
//               <div className="modal-body text-center">
//                 <p className="fs-4 mb-4">Congratulations! You earned the following points:</p>

//                 {/* Display the animal number and its image */}

//                 <div className="modal-points fs-5 text-secondary mb-4">
//                   {playedPoints <= 70 ? 'Points: 0' :
//                     playedPoints >= 80 && playedPoints <= 160 ? 'Points: 80' :
//                       playedPoints >= 170 && playedPoints <= 240 ? 'Points: 80' :
//                         playedPoints >= 250 && playedPoints <= 320 ? 'Points: 160' :
//                           playedPoints >= 330 && playedPoints <= 400 ? 'Points: 240' :
//                             playedPoints >= 410 && playedPoints <= 500 ? 'Points: 320' :
//                               playedPoints >= 510 && playedPoints <= 600 ? 'Points: 400' :
//                                 playedPoints >= 610 && playedPoints <= 700 ? 'Points: 480' :
//                                   playedPoints >= 710 && playedPoints <= 800 ? 'Points: 560' :
//                                     playedPoints >= 810 && playedPoints <= 900 ? 'Points: 640' :
//                                       playedPoints >= 910 && playedPoints <= 1000 ? 'Points: 720' :
//                                         playedPoints >= 1010 && playedPoints <= 1100 ? 'Points: 800' :
//                                           playedPoints >= 1110 && playedPoints <= 1200 ? 'Points: 880' :
//                                             `Points: ${clickedNumbers.reduce((total, num) => {
//                                               const animal = animalData.find(animal => animal.number === num);
//                                               return total + (animal?.value || 0);
//                                             }, 0)}`}
//                 </div>

//                 {/* Display the number with the minimum bet value */}
//                 {clickedNumbers.length > 0 && (
//                   <div className="min-bet-number-section text-center mb-4">
//                     <p className="fs-5 text-secondary">Your Number is :</p>

//                     {/* Display the random minimum bet animal */}
//                     {minBetNumber ? (
//                       <div className="modal-points fs-5 text-secondary mb-4">
//                         <div >

//                           <span className="fs-1 fw-bold text-primary">{minBetNumber.number}</span>

//                           {localStorage.setItem('minBetNumber', minBetNumber.number)}

//                         </div>
//                         <div className="modal-image mb-4">
//                           <img
//                             src={minBetNumber.image}
//                             alt={`Animal ${minBetNumber.number}`}
//                             className="animal-img rounded-3"
//                             style={{
//                               width: '500px',
//                               height: '300px',
//                               objectFit: 'cover',
//                             }}
//                           />
//                         </div>
//                       </div>
//                     ) : (
//                       <p>No animals with minimum value found.</p>
//                     )}

//                   </div>
//                 )}

//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default GameDashboard;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
//19,.11.2024

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileImage from '../assets/ProfileImage.jpg';
import './GameDashboard.css';


const GameDashboard = ({ onLogout }) => {
  const [animalData, setAnimalData] = useState([]);
  const [clickedNumbers, setClickedNumbers] = useState([]);
  const [totalBalance, setTotalBalance] = useState();
  const [playedPoints, setPlayedPoints] = useState(0);
  const [timer, setTimer] = useState(60);
  const [isBettingAllowed, setIsBettingAllowed] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [minBetNumber, setMinBetNumber] = useState(null);
  const [showNumber, setShowNumber] = useState(false);
  const [results, setResults] = useState([]);




  const calculatePoints = () => {
    if (playedPoints <= 70) return 0;
    if (playedPoints >= 80 && playedPoints <= 160) return 80;
    if (playedPoints >= 170 && playedPoints <= 240) return 80;
    if (playedPoints >= 250 && playedPoints <= 320) return 160;
    if (playedPoints >= 330 && playedPoints <= 400) return 240;
    if (playedPoints >= 410 && playedPoints <= 500) return 320;
    if (playedPoints >= 510 && playedPoints <= 600) return 400;
    if (playedPoints >= 610 && playedPoints <= 700) return 480;
    if (playedPoints >= 710 && playedPoints <= 800) return 560;
    if (playedPoints >= 810 && playedPoints <= 900) return 640;
    if (playedPoints >= 910 && playedPoints <= 1000) return 720;
    if (playedPoints >= 1010 && playedPoints <= 1100) return 800;
    if (playedPoints >= 1110 && playedPoints <= 1200) return 880;
    return clickedNumbers.reduce((total, num) => {
      const animal = animalData.find((animal) => animal.number === num);
      return total + (animal?.value || 0);
    }, 0);
  };

  useEffect(() => {
    const startGame = () => {

      setIsLoading(true);

      fetch('http://localhost:8080/getallimages')
        .then(response => response.json())
        .then(data => {
          const formattedData = data.map(item => ({
            number: item.number,
            image: item.imagePath,
            value: 0,
          }));

          setAnimalData(formattedData);
          setTotalBalance(fetchTotalBalance);
          // Initialize game state from localStorage or reset if no data exists
          const savedBalance = localStorage.getItem('totalBalance');
          const savedPlayedPoints = localStorage.getItem('playedPoints');
          const savedClickedNumbers = JSON.parse(localStorage.getItem('clickedNumbers')) || [];

          // If no clicked numbers, set it to the numbers 1 to 12
          const initializedClickedNumbers = savedClickedNumbers.length === 0 ? Array.from({ length: 12 }, (_, i) => i + 1) : savedClickedNumbers;


          let storedNumber = JSON.parse(localStorage.getItem('minBetNumber')) || [];

          // console.log("our game", storedNumber);

          setTotalBalance(savedBalance ? parseInt(savedBalance, 10) : totalBalance); //totalbalance
          setPlayedPoints(savedPlayedPoints ? parseInt(savedPlayedPoints, 10) : 0);
          setClickedNumbers(initializedClickedNumbers);

          setTimer(60);
          setIsBettingAllowed(true);
          setIsGameOver(false);
        })
        .catch(error => {
          // console.error('Error fetching animal data:', error);
          toast.error('Failed to load animal data!');
        })
        .finally(() => {
          setIsLoading(false); // Set loading to false once data is fetched
        });

      clearInterval(window.timerInterval);



      window.timerInterval = setInterval(() => {
        setTimer(prevTime => {
          if (prevTime === 1) {
            clearInterval(window.timerInterval);
            setIsBettingAllowed(false);
            setIsGameOver(true);

          } else if (prevTime <= 10) {
            setIsBettingAllowed(false);
          } else {
            setIsBettingAllowed(true);
          }
          return prevTime - 1;
        });



      }, 1000);
    };



    if (isGameOver) {

      setTimeout(() => {
        updateUserBalance();
        setTotalBalance(totalBalance);
        startGame();

      }, 10000);
    } else {

      startGame();
    }

    return () => clearInterval(window.timerInterval);

  }, [isGameOver]);


  // Handle value increment and update total balance and played points
  const handleIncrement = (number) => {

    if (totalBalance === 0) {
      toast.info('Please recharge your balance to place a bet!');
      return;
    }

    if (!isBettingAllowed) {
      toast.info('Betting is no longer allowed. Time is up!');
      return;
    }
    setAnimalData(prevData =>
      prevData.map(animal =>
        animal.number === number ? { ...animal, value: animal.value + 10 } : animal
      )
    );

    setTotalBalance(prevBalance => prevBalance - 10);  // Deduct from total balance

    setClickedNumbers(prevNumbers => {
      const updatedNumbers = [...prevNumbers, number];
      return updatedNumbers;  // Add the number to the clicked list
    });

    setPlayedPoints(prevPoints => prevPoints + 10);
  };


  // Handle value decrement and update total balance and played points
  const handleDecrement = () => {

    // if (totalBalance === 0) {
    //   toast.info('Please recharge your balance to place a bet!');
    //   return;
    // }

    if (!isBettingAllowed) {
      toast.info('Betting is no longer allowed. Time is up!');
      return;
    }

    // Prevent incrementing totalBalance if it's already 500
    if (totalBalance >= 500) {
      toast.info('Total balance is already at its maximum (500). Decrement not allowed.');
      return; // Prevent any further action if balance is 500 or more
    }

    // Remove the most recent clicked number from the clickedNumbers list
    setClickedNumbers(prevNumbers => {
      const lastClickedNumber = prevNumbers[prevNumbers.length - 1];
      if (!lastClickedNumber) return prevNumbers;  // No number to remove
      const updatedNumbers = prevNumbers.slice(0, -1);  // Remove the last number

      // Update animal data
      setAnimalData(prevData =>
        prevData.map(animal =>
          animal.number === lastClickedNumber
            ? { ...animal, value: Math.max(0, animal.value - 10) }  // Decrement the last clicked number by 10
            : animal
        )
      );

      // Decrease the total balance by 5, but only if it's less than 500
      setTotalBalance(prevBalance => prevBalance + 5);  // Restore from total balance

      // Decrease played points by 5, prevent going below 0
      setPlayedPoints(prevPoints => Math.max(0, prevPoints - 5));  // Decrease by 5, prevent negative points

      return updatedNumbers;  // Update the clickedNumbers list
    });
  };

  // Cancel All Bet
  const handleCancelAllBet = async () => {


    if (!isBettingAllowed) {
      toast.info('Betting is no longer allowed. Time is up!');
      return;
    }

    const userId = localStorage.getItem("userId");
    const response = await axios.get(`http://localhost:8080/user/totalamount/${userId}`);
    const fetchedTotalBalance = response.data; // Assuming this returns the total balance


    setAnimalData(prevData =>
      prevData.map(animal => ({ ...animal, value: 0 }))  // Reset all values
    );
    setClickedNumbers([]);  // Clear all clicked numbers
    setTotalBalance(fetchedTotalBalance);  // Reset total balance
    setPlayedPoints(0);  // Reset played points
    toast.info('All bets have been canceled!');
  };

  // Cancel Previous Bet
  const handleCancelPreviousBet = () => {



    if (!isBettingAllowed) {
      toast.info('Betting is no longer allowed. Time is up!');
      return;
    }

    const lastClickedNumber = clickedNumbers[clickedNumbers.length - 1];

    if (lastClickedNumber) {
      setAnimalData(prevData =>
        prevData.map(animal =>
          animal.number === lastClickedNumber ? { ...animal, value: Math.max(0, animal.value - 10) } : animal
        )
      );

      setClickedNumbers(prevNumbers => prevNumbers.slice(0, -1));  // Remove the last clicked number
      setTotalBalance(prevBalance => prevBalance + 10);  // Restore total balance

      setPlayedPoints(prevPoints => Math.max(0, prevPoints - 10));  // Prevent negative points

      toast.info('Previous bet has been canceled!');
    }
  };

  // Handle Upper Line bet (First 6 animals)
  const handleUpperLine = () => {

    if (totalBalance === 0) {
      toast.info('Please recharge your balance to place a bet!');
      return;
    }

    if (!isBettingAllowed) {
      toast.info('Betting is no longer allowed. Time is up!');
      return;
    }

    setAnimalData(prevData =>
      prevData.map((animal, index) =>
        index < 6 ? { ...animal, value: animal.value + 10 } : animal  // Increase first 6 animals' values
      )
    );

    setTotalBalance(prevBalance => prevBalance - 60);  // Decrease total balance by 60 (10 x 6 animals)

    const upperLineNumbers = animalData.slice(0, 6).map(animal => animal.number);
    setClickedNumbers(prevNumbers => [...prevNumbers, ...upperLineNumbers]);

    setPlayedPoints(prevPoints => prevPoints + 60);  // Add 60 for 6 bets
  };

  // Handle Lower Line bet (Last 6 animals)
  const handleLowerLine = () => {

    if (totalBalance === 0) {
      toast.info('Please recharge your balance to place a bet!');
      return;
    }

    if (!isBettingAllowed) {
      toast.info('Betting is no longer allowed. Time is up!');
      return;
    }

    setAnimalData(prevData =>
      prevData.map((animal, index) =>
        index >= prevData.length - 6 ? { ...animal, value: animal.value + 10 } : animal  // Increase last 6 animals' values
      )
    );

    setTotalBalance(prevBalance => prevBalance - 60);  // Decrease total balance by 60 (10 x 6 animals)

    const lowerLineNumbers = animalData.slice(-6).map(animal => animal.number);
    setClickedNumbers(prevNumbers => [...prevNumbers, ...lowerLineNumbers]);

    setPlayedPoints(prevPoints => prevPoints + 60);  // Add 60 for 6 bets
  };

  // Handle Odd Number bet
  const handleOddNumber = () => {

    if (totalBalance === 0) {
      toast.info('Please recharge your balance to place a bet!');
      return;
    }

    if (!isBettingAllowed) {
      toast.info('Betting is no longer allowed. Time is up!');
      return;
    }

    setAnimalData(prevData =>
      prevData.map(animal =>
        animal.number % 2 !== 0 ? { ...animal, value: animal.value + 10 } : animal
      )
    );
    setTotalBalance(prevBalance => prevBalance - 60);

    const oddNumbers = animalData.filter(animal => animal.number % 2 !== 0).map(animal => animal.number);
    setClickedNumbers(prevNumbers => [...prevNumbers, ...oddNumbers]);

    setPlayedPoints(prevPoints => prevPoints + 60);
  };

  // Handle Even Number bet
  const handleEvenNumber = () => {


    if (totalBalance === 0) {
      toast.info('Please recharge your balance to place a bet!');
      return;
    }

    if (!isBettingAllowed) {
      toast.info('Betting is no longer allowed. Time is up!');
      return;
    }

    setAnimalData(prevData =>
      prevData.map(animal =>
        animal.number % 2 === 0 ? { ...animal, value: animal.value + 10 } : animal
      )
    );
    setTotalBalance(prevBalance => prevBalance - 60);

    const evenNumbers = animalData.filter(animal => animal.number % 2 === 0).map(animal => animal.number);
    setClickedNumbers(prevNumbers => [...prevNumbers, ...evenNumbers]);

    setPlayedPoints(prevPoints => prevPoints + 50);
  };
  // Handle user logout
  const handleLogout = () => {
    onLogout();
  };

  const findAnimalWithBetValue = (betValue) => {
    // Find animals with the bet value
    const betAnimals = clickedNumbers
      .filter((num) => {
        const animal = animalData.find((animal) => animal.number === num);
        return animal && animal.value === betValue;
      })
      .map((num) => animalData.find((animal) => animal.number === num));

    if (betAnimals.length > 0) {
      // Return a random animal if there are any with the bet value
      return betAnimals[Math.floor(Math.random() * betAnimals.length)];
    }
    return null;
  };

  const calculateMinBetNumber = () => {
    let betValue = null;

    // Step 1: Determine the bet value based on playedPoints
    if (playedPoints >= 80 && playedPoints <= 160) betValue = 10;
    else if (playedPoints >= 170 && playedPoints <= 240) betValue = 10;
    else if (playedPoints >= 240 && playedPoints <= 320) betValue = 20;
    else if (playedPoints >= 330 && playedPoints <= 400) betValue = 30;
    else if (playedPoints >= 410 && playedPoints <= 500) betValue = 40;
    else if (playedPoints >= 510 && playedPoints <= 600) betValue = 50;
    else if (playedPoints >= 610 && playedPoints <= 700) betValue = 60;
    else if (playedPoints >= 710 && playedPoints <= 800) betValue = 70;
    else if (playedPoints >= 810 && playedPoints <= 900) betValue = 80;
    else if (playedPoints >= 910 && playedPoints <= 1000) betValue = 90;
    else if (playedPoints >= 1010 && playedPoints <= 1100) betValue = 100;
    else if (playedPoints >= 1110 && playedPoints <= 1200) betValue = 110;

    // Step 2: Special case for 0-point animals
    if (playedPoints >= 10 && playedPoints <= 70) {
      const zeroPointAnimals = animalData.filter(
        (animal) => animal.value === 0 && !clickedNumbers.includes(animal.number)
      );

      if (zeroPointAnimals.length > 0) {
        return zeroPointAnimals[Math.floor(Math.random() * zeroPointAnimals.length)];
      }
      return findAnimalWithBetValue(0); // Fallback to any animal with a 0 bet
    }

    // Step 3: Find an animal with the bet value
    if (betValue !== null) {
      let animal = findAnimalWithBetValue(betValue);

      if (animal) return animal;

      // Step 4: Fallback logic - decrement the bet value
      let lowerBetValue = betValue;

      while (lowerBetValue > 0) {
        lowerBetValue -= 10;
        animal = findAnimalWithBetValue(lowerBetValue);
        if (animal) return animal;
      }

      return findAnimalWithBetValue(0);
    }

    // Step 5: Random animal as a last resort
    return animalData[Math.floor(Math.random() * animalData.length)];
  };


  const updateResultsInLocalStorage = (newResult) => {
    const storedResults = JSON.parse(localStorage.getItem("gameResults")) || [];
    const updatedResults = [newResult, ...storedResults.slice(0, 9)]; // Limit to 10 results
    localStorage.setItem("gameResults", JSON.stringify(updatedResults));
    setResults(updatedResults);
  };

  useEffect(() => {

    const storedResults = JSON.parse(localStorage.getItem("gameResults")) || [];
    setResults(storedResults);
    // Step 6: Calculate the minimum bet number
    const calculatedNumber = calculateMinBetNumber();
    setMinBetNumber(calculatedNumber);

    // Step 7: 
    const timer = setTimeout(() => {
      setShowNumber(true);
      updateResultsInLocalStorage(calculatedNumber?.number || "No valid animal found");
    }, 60000);
    return () => clearTimeout(timer);
  }, [playedPoints, animalData, clickedNumbers]);



  const navigate = useNavigate();
  const change = () => {

    navigate("/profile");
  }

  const fetchTotalBalance = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      // console.error("User ID is not available in local storage");
      toast.error("User ID is not available in local storage");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/user/totalamount/${userId}`);
      setTotalBalance(response.data); // Update the total balance
    } catch (error) {
      //console.error("Error fetching total balance:", error);
      toast.error("Error fetching total balance:", error);
    }
  };

  useEffect(() => {
    fetchTotalBalance();
  }, []);


  //update the total balance after game is over 
  const userId = localStorage.getItem("userId");

  const updateUserBalance = async () => {

    try {

      const points = calculatePoints();
      const updatedBalance = totalBalance + points;

      const url = `http://localhost:8080/user/totalamount/${userId}?id=${userId}&totalAmount=${updatedBalance}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error('Failed to update user total amount');
      }
      const data = await response.json();
      //console.log('Success:', data);
      //alert('User total amount updated successfully.');
    } catch (error) {
      //console.error('Error:', error);
      //alert('An error occurred while updating the total amount.');
    }
  };


  return (
    <>
      <div className="body1">
        <ToastContainer />
        <div className="container-fluid game-ui">
          <header className="header d-flex align-items-center justify-content-between">
            <img src="/logo12.png" alt="Big Diamond Logo" className="logo" />
            <div className="d-flex balance-and-numbers-wrapper">
              <div className="balance-section text-center">
                <p style={{ color: 'white' }}>Total Balance</p>
                <h2 className="balance-value">{totalBalance}</h2>
              </div>

              <div className="numbers-wrapper">
                {results.map((num, index) => (
                  <div key={index}>
                    <span className="number-item">{num}</span>
                  </div>
                ))}
              </div>

              <div className="balance-section text-center">
                <p style={{ color: 'white' }}>Winning Points</p>
                <h2 className="balance-value">
                  {playedPoints * 8}  {/* Multiply playedPoints by 8 */}
                </h2>
              </div>

              <div className="balance-section text-center">
                <p style={{ color: 'white' }}>Profile</p>
                <img
                  src={ProfileImage}
                  onClick={change}
                  alt="User Avatar"
                  className="profile-avatar-img"
                  style={{ width: '15%', height: '15%', cursor: 'pointer' }}
                />
              </div>
            </div>
          </header>


          <div className="row main-row">
            <div className="col-2 col-md-1 left-chips">
            </div>

            <div className="col-8 col-md-10 animal-cards">
              {/* Display spinner while loading */}
              {isLoading ? (
                <div className="spinner-container">
                  <div className="spinner"></div>
                </div>
              ) : (
                <div className="row">
                  {animalData.map((animal, index) => {
                    const colors = [
                      'linear-gradient(to bottom, #fc0b03, #32a89b)',
                      'linear-gradient(to bottom, #037bfc, #22b045)',
                      'linear-gradient(to bottom, #03fc3d, #a96d58)',
                      'linear-gradient(to bottom, #f542da, #03fc3d)',
                      'linear-gradient(to bottom, #03fc3d, #03f4fc)',
                      'linear-gradient(to bottom, #03f4fc, #9cbf38)',
                      'linear-gradient(to bottom, #fc03eb, #d64128)',
                      'linear-gradient(to bottom, #fc03eb, #2e2d28)',
                      'linear-gradient(to bottom, #fca503, #56723b)',
                      'linear-gradient(to bottom, #fca503, #2dfc03)',
                      'linear-gradient(to bottom, #f0b1ef, #fceb03)',
                      'linear-gradient(to bottom, #9dba88, #03a9fc)',
                    ];

                    const cardColor = (index) => colors[index % colors.length];

                    return (
                      <div key={animal.number} className="col-6 col-md-2 p-2">
                        <div className="animal-card" style={{ background: cardColor(index) }}>
                          <div className="card-number">{animal.number}</div>
                          <img
                            src={animal.image}
                            alt={`Animal ${animal.number}`}
                            className="animal-img"
                            style={{ width: '150px', height: '100px' }}
                          />
                          <div className="card-value">
                            <h6 onClick={handleDecrement} className="btn btn-decrement" style={{ color: 'black' }}>-</h6>
                            {animal.value}
                            <h6 onClick={() => handleIncrement(animal.number)} className="btn btn-increment" style={{ color: 'black' }}>+</h6>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="col-2 col-md-1 right-chips">
            </div>
          </div>

          <div className="bottom-section row">
            <div className="col-4 col-md-2 points-section">
              <p style={{ color: 'white' }}>Played Points</p>
              <h2 className="balance-value">{playedPoints}</h2>  {/* Total played points */}
            </div>

            <div className="col-8 col-md-7 control-buttons-wrapper text-center">
              <div className="control-buttons">
                <button onClick={handleCancelAllBet} className="btn">Cancel All Bet</button>
                <button onClick={handleCancelPreviousBet} className="btn">Cancel Previous Bet</button>
                <button onClick={handleUpperLine} className="btn">Upper Line</button>
                <button onClick={handleLowerLine} className="btn">Lower Line</button>
                <button onClick={handleOddNumber} className="btn">Odd Number</button>
                <button onClick={handleEvenNumber} className="btn">Even Number</button>
                <i onClick={handleLogout} className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" style={{ cursor: 'pointer' }}></i>
              </div>
            </div>

            <div className="col-12 col-md-2 d-flex justify-content-center align-items-center timer-section text-center">
              <h1 className="timer">
                {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
              </h1>
            </div>

          </div>
        </div>
      </div>
      {/* Modal Dialog to show the last clicked number when the game ends */}
      {isGameOver && clickedNumbers.length > 0 && (
        <div
          className="modal fade show"
          style={{
            display: 'block',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background overlay
          }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-3 shadow-lg">
              <div className="modal-header  text-center">
                <h5 className="modal-title " >Your Result</h5>

              </div>
              <div className="modal-body text-center">
                <p className="fs-4 mb-4">Congratulations! You earned the following points:</p>

                {/* Display the animal number and its image */}

                <div className="modal-points fs-5 text-secondary mb-4">
                  {playedPoints <= 70 ? 'Points: 0' :
                    playedPoints >= 80 && playedPoints <= 160 ? 'Points: 80' :
                      playedPoints >= 170 && playedPoints <= 240 ? 'Points: 80' :
                        playedPoints >= 250 && playedPoints <= 320 ? 'Points: 160' :
                          playedPoints >= 330 && playedPoints <= 400 ? 'Points: 240' :
                            playedPoints >= 410 && playedPoints <= 500 ? 'Points: 320' :
                              playedPoints >= 510 && playedPoints <= 600 ? 'Points: 400' :
                                playedPoints >= 610 && playedPoints <= 700 ? 'Points: 480' :
                                  playedPoints >= 710 && playedPoints <= 800 ? 'Points: 560' :
                                    playedPoints >= 810 && playedPoints <= 900 ? 'Points: 640' :
                                      playedPoints >= 910 && playedPoints <= 1000 ? 'Points: 720' :
                                        playedPoints >= 1010 && playedPoints <= 1100 ? 'Points: 800' :
                                          playedPoints >= 1110 && playedPoints <= 1200 ? 'Points: 880' :
                                            `Points: ${clickedNumbers.reduce((total, num) => {
                                              const animal = animalData.find(animal => animal.number === num);
                                              return total + (animal?.value || 0);
                                            }, 0)}`}
                </div>

                {/* Display the number with the minimum bet value */}
                {clickedNumbers.length > 0 && (
                  <div className="min-bet-number-section text-center mb-4">
                    <p className="fs-5 text-secondary">Your Number is :</p>

                    {/* Display the random minimum bet animal */}
                    {minBetNumber ? (
                      <div className="modal-points fs-5 text-secondary mb-4">
                        <div >

                          <span className="fs-1 fw-bold text-primary">{minBetNumber.number}</span>

                          {localStorage.setItem('minBetNumber', minBetNumber.number)}

                        </div>
                        <div className="modal-image mb-4">
                          <img
                            src={minBetNumber.image}
                            alt={`Animal ${minBetNumber.number}`}
                            className="animal-img rounded-3"
                            style={{
                              width: '500px',
                              height: '300px',
                              objectFit: 'cover',
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      <p>No animals with minimum value found.</p>
                    )}

                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GameDashboard;
