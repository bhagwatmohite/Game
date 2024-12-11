/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */



// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import DataTable from 'react-data-table-component';
// import { useNavigate } from 'react-router-dom';
// import EditImageModal from './EditImageModal'; // Import the modal

// const Images = () => {
//   const [images, setImages] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [currentImage, setCurrentImage] = useState(null);
//   const navigate = useNavigate();

//   // Fetch images from backend API
//   useEffect(() => {
//     axios.get('http://api.12home.vip/getallimages')
//       .then((response) => {
//         setImages(response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the image data:", error);
//       });
//   }, []);

//   // Filter images based on search term
//   const filteredData = images.filter(item => {
//     return (
//       item.id.toString().includes(searchTerm.toLowerCase()) ||
//       item.number.toString().includes(searchTerm.toLowerCase())
//     );
//   });

//   // Handle edit button click
//   const handleEdit = (image) => {
//     setCurrentImage(image);
//     setShowModal(true);
//   };

//   // Handle update image details via API
//   const handleUpdate = (id, updatedImage) => {
//     axios.put(`http://api.12home.vip/updateimage/${id}`, updatedImage)
//       .then((response) => {
//         const updatedImages = images.map((img) =>
//           img.id === id ? { ...img, ...updatedImage } : img
//         );
//         setImages(updatedImages);
//         alert('Image updated successfully');
//       })
//       .catch((error) => {
//         console.error("Error updating image:", error);
//         alert('Error updating image');
//       });
//   };

//   // Handle delete action
//   const handleDelete = (id) => {
//     axios.delete(`http://api.12home.vip/deleteimage/${id}`)
//       .then(() => {
//         setImages(images.filter(image => image.id !== id));
//         alert('Image deleted successfully');
//       })
//       .catch((error) => {
//         console.error("Error deleting image:", error);
//         alert('Error deleting image');
//       });
//   };

//   // Navigate to add image page
//   const addImage = () => {
//     navigate("addImage");
//   };

//   // Columns for DataTable
//   const columns = [
//     { name: 'ID', selector: row => row.id, sortable: true },
//     { name: 'Number', selector: row => row.number, sortable: true },
//     {
//       name: 'Image',
//       selector: row => row.imagePath,
//       cell: row => (
//         <img
//           src={`http://api.12home.vip/Images/${row.imagePath}`}
//           alt={`image-${row.id}`}
//           style={{ width: '50px', height: '50px' }}
//         />
//       ),
//       sortable: false
//     },
//     {
//       name: 'Action',
//       button: true,
//       cell: (row) => (
//         <div className="d-flex">
//           <button
//             onClick={() => handleEdit(row)}
//             className="btn btn-warning btn-sm me-2"
//           >
//             Edit
//           </button>
//           <button
//             onClick={() => handleDelete(row.id)}
//             className="btn btn-danger btn-sm"
//           >
//             Delete
//           </button>
//         </div>
//       ),
//       sortable: false
//     }
//   ];

//   return (
//     <div className="container-fluid">
//       <h1 className="h3 mb-2 text-gray-800">Images</h1>
//       <p className="mb-4">Manage images in the system. You can view, add, edit, and delete images.</p>
//       <div className="d-flex">
//         <button
//           className="btn btn-success btn-sm me-2"
//           onClick={addImage}
//           style={{ marginBottom: '20px' }}
//         >
//           Add Image
//         </button>
//       </div>

//       <div className="card shadow mb-4">
//         <div className="card-header py-3 d-flex justify-content-between align-items-center">
//           <h6 className="m-0 font-weight-bold text-primary">Images DataTable</h6>

//           {/* Search Input */}
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={{ width: '40%' }}
//           />
//         </div>
//         <div className="card-body">
//           {/* DataTable Component */}
//           <DataTable
//             columns={columns}
//             data={filteredData}
//             pagination
//             highlightOnHover
//             responsive
//             defaultSortField="id"
//           />
//         </div>
//       </div>

//       {/* Edit Image Modal */}
//       {currentImage && (
//         <EditImageModal
//           show={showModal}
//           handleClose={() => setShowModal(false)}
//           image={currentImage}
//           handleUpdate={handleUpdate}
//         />
//       )}
//     </div>
//   );
// };

// export default Images;

//edit modal success

// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import DataTable from 'react-data-table-component';
// import { useNavigate } from 'react-router-dom';
// import EditImageModal from './EditImageModal';

// const Images = () => {
//   const [images, setImages] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [currentImage, setCurrentImage] = useState(null);
//   const navigate = useNavigate();

//   // Fetch all images on component mount
//   useEffect(() => {
//     axios.get('http://api.12home.vip/getallimages')
//       .then((response) => {
//         setImages(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching images:", error);
//       });
//   }, []);

//   // Filter images based on search term
//   const filteredData = images.filter(item =>
//     item.id.toString().includes(searchTerm.toLowerCase()) ||
//     item.number.toString().includes(searchTerm.toLowerCase())
//   );

//   // Open modal to edit image
//   const handleEdit = (image) => {
//     setCurrentImage(image);
//     setShowModal(true);
//   };

//   // Update image
//   const handleUpdate = (id, updatedImage) => {
//     const formData = new FormData();
//     formData.append('number', updatedImage.number);
//     if (updatedImage.image) {
//       formData.append('image', updatedImage.image);  // Append the selected image file
//     }

//     axios.put(`http://api.12home.vip/updateimage/${id}`, formData)
//       .then((response) => {
//         // Update the image in the state
//         const updatedImages = images.map((img) =>
//           img.id === id ? { ...img, ...updatedImage } : img
//         );
//         setImages(updatedImages);
//         alert('Image updated successfully');
//         setShowModal(false);  // Close modal after update
//       })
//       .catch((error) => {
//         console.error("Error updating image:", error);
//         alert('Error updating image');
//       });
//   };

//   // Delete image
//   const handleDelete = (id) => {
//     axios.delete(`http://api.12home.vip/deleteimage/${id}`)
//       .then(() => {
//         setImages(images.filter(image => image.id !== id));
//         alert('Image deleted successfully');
//       })
//       .catch((error) => {
//         console.error("Error deleting image:", error);
//         alert('Error deleting image');
//       });
//   };



//   // Columns for DataTable
//   const columns = [
//     { name: 'ID', selector: row => row.id, sortable: true },
//     { name: 'Number', selector: row => row.number, sortable: true },
//     {
//       name: 'Image',
//       selector: row => row.imagePath,
//       cell: row => (
//         <img
//           src={`http://api.12home.vip/Images/${row.imagePath}`}
//           alt={`image-${row.id}`}
//           style={{ width: '50px', height: '50px' }}
//         />
//       ),
//       sortable: false
//     },
//     {
//       name: 'Action',
//       button: true,
//       cell: (row) => (
//         <div className="d-flex">
//           <button
//             onClick={() => handleEdit(row)}
//             className="btn btn-warning btn-sm me-2"
//           >
//             Edit
//           </button>
//           <button
//             onClick={() => handleDelete(row.id)}
//             className="btn btn-danger btn-sm"
//           >
//             Delete
//           </button>
//         </div>
//       ),
//       sortable: false
//     }
//   ];

//   return (
//     <div className="container-fluid">
//       <h1 className="h3 mb-2 text-gray-800">Images</h1>
//       <p className="mb-4">Manage images in the system. You can view, add, edit, and delete images.</p>
//       <div className="d-flex">
//         <button
//           className="btn btn-success btn-sm me-2"

//           style={{ marginBottom: '20px' }}>
//           Add Images
//         </button>

//       </div>
//       {/* Search Bar */}
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search by ID or Number"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       {/* Data Table */}
//       <DataTable
//         title="Image List"
//         columns={columns}
//         data={filteredData}
//         pagination
//       />

//       {/* Edit Image Modal */}
//       <EditImageModal
//         showModal={showModal}
//         setShowModal={setShowModal}
//         currentImage={currentImage}
//         handleUpdate={handleUpdate}
//       />
//     </div>
//   );
// };

// export default Images;

import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddImages from './AddImages';
import EditImageModal from './EditImageModal';

const Images = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://api.12home.vip/getallimages')
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  const handleAddImage = (newImage) => {
    setImages([...images, newImage]);  // Add new image to the list
  };

  const handleEdit = (image) => {
    setCurrentImage(image);
    setShowEditModal(true);
  };

  const handleUpdate = (id, updatedImage) => {
    const formData = new FormData();
    formData.append('number', updatedImage.number);
    if (updatedImage.image) {
      formData.append('image', updatedImage.image);
    }

    axios.put(`http://api.12home.vip/updateimage/${id}`, formData)
      .then((response) => {
        const updatedImages = images.map((img) =>
          img.id === id ? { ...img, ...updatedImage } : img
        );
        setImages(updatedImages);
        setShowEditModal(false);
        toast.success('Error updating image');
      })
      .catch((error) => {
        console.error("Error updating image:", error);
        // alert('Error updating image');
        toast.error('Error updating image');
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://api.12home.vip/deleteimage/${id}`)
      .then(() => {
        setImages(images.filter(image => image.id !== id));
        toast.success('Image delete successfully...');
      })
      .catch((error) => {
        console.error("Error deleting image:", error);
        // alert('Error deleting image');
        toast.error('Error deleting image');
      });
  };

  const filteredData = images.filter(item =>
    item.id.toString().includes(searchTerm.toLowerCase()) ||
    item.number.toString().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { name: 'ID', selector: row => row.id, sortable: true },
    { name: 'Number', selector: row => row.number, sortable: true },
    {
      name: 'Image',
      selector: row => row.imagePath,
      cell: row => (
        <img
          src={`http://api.12home.vip/Images/${row.imagePath}`}
          alt={`image-${row.id}`}
          style={{ width: '50px', height: '50px' }}
        />
      ),
      sortable: false
    },
    {
      name: 'Action',
      button: true,
      cell: (row) => (
        // <div className="d-flex">
        //   <button onClick={() => handleEdit(row)} className="btn btn-warning btn-sm me-2">
        //     Edit
        //   </button>
        //   <button onClick={() => handleDelete(row.id)} className="btn btn-danger btn-sm">
        //     Delete
        //   </button>
        // </div>
        <div>
          {/* Edit Icon */}
          <button
            className="btn btn-warning btn-sm me-2"
            onClick={() => handleEdit(row)}
            aria-label="Edit User"
            style={{ marginRight: '3px' }}>
            <FaEdit />
          </button>

          {/* Delete Icon */}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(row.id)}
            aria-label="Delete User">
            <FaTrash />
          </button>
        </div>
      ),
      sortable: false
    }
  ];

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Images</h1>
      <p className="mb-4">Manage images in the system. You can view, add, edit, and delete images.</p>
      <div className="d-flex">
        <button
          className="btn btn-success btn-sm me-2"
          style={{ marginBottom: '20px' }}
          onClick={() => setShowAddModal(true)}
        >
          Add Image
        </button>
      </div>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by ID or Number"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <DataTable
        title="Image List"
        columns={columns}
        data={filteredData}
        pagination
      />

      <EditImageModal
        showModal={showEditModal}
        setShowModal={setShowEditModal}
        currentImage={currentImage}
        handleUpdate={handleUpdate}
      />

      <AddImages
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        onImageAdded={handleAddImage}
      />
      <ToastContainer />
    </div>
  );
};

export default Images;
