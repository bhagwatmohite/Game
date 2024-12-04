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
    const updatedResults = [newResult, ...storedResults.slice(0, 9)];
    localStorage.setItem("gameResults", JSON.stringify(updatedResults));
    setResults(updatedResults);
  };

  useEffect(() => {

    const storedResults = JSON.parse(localStorage.getItem("gameResults")) || [];
    setResults(storedResults);
    // Step 6:
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

      const points = calculatePoints(); // Calculate points
      const updatedBalance = totalBalance + points; // Add points to the total balance

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
