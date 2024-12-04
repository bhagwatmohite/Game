/* eslint-disable react/prop-types */
// AnimalCard.js

const AnimalCard = ({ animal, onIncrement, onDecrement }) => {
  const cardColor = [
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

  return (
    <div className="col-6 col-md-2 p-2">
      <div className="animal-card" style={{ background: cardColor[animal.number % cardColor.length] }}>
        <div className="card-number">{animal.number}</div>
        <img
          src={animal.image}
          alt={`Animal ${animal.number}`}
          className="animal-img"
          style={{ width: '150px', height: '100px' }}
        />
        <div className="card-value">
          <h6 onClick={onDecrement} className="btn btn-decrement" style={{ color: 'black' }}>-</h6>
          {animal.value}
          <h6 onClick={() => onIncrement(animal.number)} className="btn btn-increment" style={{ color: 'black' }}>+</h6>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;


// {
//   isGameOver && clickedNumbers.length > 0 && (
//     <div
//       className="modal fade show"
//       style={{
//         display: 'block',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background overlay
//       }}
//       tabIndex="-1"
//     >
//       <div className="modal-dialog modal-dialog-centered modal-lg">
//         <div className="modal-content rounded-3 shadow-lg">
//           <div className="modal-header bg-primary text-white">
//             <h5 className="modal-title">Your Result</h5>
//           </div>
//           <div className="modal-body text-center">
//             <p className="fs-4 mb-4">Congratulations! You earned the following points:</p>

//             {/* Display the last clicked number that the user actually bet on */}
//             <div className="number-item mb-4" style={{ padding: '0px' }}>
//               <span className="fs-1 fw-bold text-primary">
//                 {/* Display the last number from clickedNumbers */}
//                 {clickedNumbers.slice(-1)[0]}
//               </span>
//             </div>

//             {/* Display the image of the last clicked animal */}
//             <div className="modal-image mb-4">
//               <img
//                 src={animalData.find(animal => animal.number === clickedNumbers.slice(-1)[0])?.image}
//                 alt={`Animal ${clickedNumbers.slice(-1)[0]}`}
//                 className="animal-img rounded-3"
//                 style={{
//                   width: '200px',
//                   height: '150px',
//                   objectFit: 'cover',
//                 }}
//               />
//             </div>

//             {/* Display Points */}
//             <div className="modal-points fs-5 text-secondary mb-4">
//               {playedPoints <= 70 ? 'Points: 0' :
//                 `Points: ${clickedNumbers.reduce((total, num) => {
//                   const animal = animalData.find(animal => animal.number === num);
//                   return total + (animal?.value || 0);
//                 }, 0)}`
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
