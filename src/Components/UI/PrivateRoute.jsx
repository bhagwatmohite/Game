/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isUserLoggedIn, children }) => {
  return isUserLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
