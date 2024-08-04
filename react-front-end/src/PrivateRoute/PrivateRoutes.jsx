import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ element }) => {
  let token = Cookies.get('token');
  return token ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
