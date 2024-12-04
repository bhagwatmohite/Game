/* eslint-disable react/prop-types */
// GameOverModal.js


const GameOverModal = ({ clickedNumbers, animalData, playedPoints }) => {
  const totalWinningPoints = clickedNumbers.reduce((total, num) => {
    const animal = animalData.find(animal => animal.number === num);
    return total + (animal?.value || 0);
  }, 0);

  const resultMessage = playedPoints >= 10 && playedPoints <= 70 ? 'Points: 0' :
    playedPoints >= 80 && playedPoints <= 160 ? 'Points: 80' :
      `Points: ${totalWinningPoints}`;

  return (
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
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Your Result</h5>
          </div>
          <div className="modal-body text-center">
            <p className="fs-4 mb-4">Congratulations! You earned the following points:</p>
            <div className="number-item mb-4" style={{ padding: '0px' }}>
              <span className="fs-1 fw-bold text-primary">{clickedNumbers.slice(-1)[0]}</span>
            </div>
            <div className="modal-image mb-4">
              <img
                src={animalData.find(animal => animal.number === clickedNumbers.slice(-1)[0])?.image}
                alt={`Animal ${clickedNumbers.slice(-1)[0]}`}
                className="animal-img rounded-3"
                style={{
                  width: '200px',
                  height: '150px',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className="modal-points fs-5 text-secondary mb-4">
              {resultMessage}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOverModal;
