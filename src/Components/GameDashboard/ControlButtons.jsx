/* eslint-disable react/prop-types */
// ControlButtons.js


const ControlButtons = ({
  handleCancelAllBet,
  handleCancelPreviousBet,
  handleUpperLine,
  handleLowerLine,
  handleOddNumber,
  handleEvenNumber,
  handleLogout,
  isBettingAllowed,
}) => {
  return (
    <div className="control-buttons">
      <button onClick={handleCancelAllBet} className="btn" disabled={!isBettingAllowed}>Cancel All Bet</button>
      <button onClick={handleCancelPreviousBet} className="btn" disabled={!isBettingAllowed}>Cancel Previous Bet</button>
      <button onClick={handleUpperLine} className="btn" disabled={!isBettingAllowed}>Upper Line</button>
      <button onClick={handleLowerLine} className="btn" disabled={!isBettingAllowed}>Lower Line</button>
      <button onClick={handleOddNumber} className="btn" disabled={!isBettingAllowed}>Odd Number</button>
      <button onClick={handleEvenNumber} className="btn" disabled={!isBettingAllowed}>Even Number</button>
      <i onClick={handleLogout} className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
    </div>
  );
};

export default ControlButtons;
