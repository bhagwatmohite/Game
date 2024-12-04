/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/admin/login" />;
};

export default PrivateRoutes;
