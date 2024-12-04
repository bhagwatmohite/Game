/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import axios from 'axios';
// import { useState } from 'react';
// import { Button, Form, Modal } from 'react-bootstrap';

// const AddImages = ({ showModal, onClose, onAddImage }) => {
//   const [number, setNumber] = useState('');
//   const [imageFile, setImageFile] = useState(null);

//   const handleAddImage = async () => {
//     const formData = new FormData();
//     formData.append("number", number);
//     formData.append("image", imageFile);

//     try {
//       const response = await axios.post("/image/add", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       onAddImage(response.data);  // Pass new image data to Images component
//       setNumber('');
//       setImageFile(null);
//     } catch (error) {
//       console.error("Error adding image:", error);
//     }
//   };

//   return (
//     <Modal show={showModal} onHide={onClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Add New Image</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           <Form.Group controlId="formNumber">
//             <Form.Label>Number</Form.Label>
//             <Form.Control
//               type="number"
//               placeholder="Enter number"
//               value={number}
//               onChange={(e) => setNumber(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group controlId="formFile" className="mt-3">
//             <Form.Label>Upload Image</Form.Label>
//             <Form.Control
//               type="file"
//               onChange={(e) => setImageFile(e.target.files[0])}
//             />
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onClose}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={handleAddImage}>
//           Save Image
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default AddImages;
import axios from 'axios';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddImages = ({ show, onHide, onImageAdded }) => {
  const [number, setNumber] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleAddImage = () => {
    // Check if all required fields are valid
    if (!number || !imageFile) {
      toast.error("Both fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append('number', number);
    formData.append('image', imageFile);

    axios.post('http://localhost:8080/addimage', formData)
      .then((response) => {
        onImageAdded(response.data);  // Update the image list
        onHide();  // Close modal after successful addition
        setNumber('');  // Reset fields
        setImageFile(null);
        toast.success('Image added successfully!');
      })
      .catch((error) => {
        console.error("Error adding image:", error);
        toast.error('Error adding image');
      });
  };

  // Handle number input to ensure it only accepts digits
  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {  // Allow only numeric input
      setNumber(value);
    } else {
      toast.error("Number can only contain digits.");
    }
  };

  return (
    <>
      <ToastContainer /> {/* Toast container to render notifications */}
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                placeholder='Enter Number...'
                value={number}
                onChange={handleNumberChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => {
                  setImageFile(e.target.files[0]);
                }}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleAddImage}
            disabled={!number || !imageFile}  // Disable if fields are empty
          >
            Add Image
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddImages;
