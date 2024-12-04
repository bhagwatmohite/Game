/* eslint-disable react/prop-types */
// BettingChips.js


const BettingChips = ({ chips }) => {
  return (
    <div className="col-2 col-md-1 left-chips">
      {chips.map((chip, index) => (
        <div key={index} className={`chip chip-colorr-${index + 1}`}>{chip}</div>
      ))}
    </div>
  );
};

export default BettingChips;
