/* eslint-disable react/prop-types */
// BalanceSection.js


const BalanceSection = ({ totalBalance, winningPoints }) => {
  return (
    <div className="d-flex balance-and-numbers-wrapper">
      <div className="balance-section text-center">
        <p style={{ color: 'white' }}>Total Balance</p>
        <h2 className="balance-value">{totalBalance}</h2>
      </div>
      <div className="balance-section text-center">
        <p style={{ color: 'white' }}>Winning Points</p>
        <h2 className="balance-value">{winningPoints}</h2>
      </div>
    </div>
  );
};

export default BalanceSection;
