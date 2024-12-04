/* eslint-disable react/prop-types */
// Timer.js


const Timer = ({ timer }) => {
  return (
    <div className="col-12 col-md-2 timer-section text-center">
      <h1 className="timer">
        {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
      </h1>
    </div>
  );
};

export default Timer;
