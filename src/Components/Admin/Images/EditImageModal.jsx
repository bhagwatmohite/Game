/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';



const EditImageModal = ({ showModal, setShowModal, currentImage, handleUpdate }) => {
  const [number, setNumber] = useState(currentImage?.number || '');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (currentImage) {
      setNumber(currentImage.number);
      setImage(null); // Reset the image when modal is opened
    }
  }, [currentImage]);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);  // Update the selected file
  };

  const handleSubmit = () => {
    handleUpdate(currentImage.id, { number, image });

  };

  return (
    showModal && (
      <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Image</h5>
              <button type="button" className="btn-close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="number" className="form-label">Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default EditImageModal;
