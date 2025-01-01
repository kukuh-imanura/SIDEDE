import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ isLogin, access }) => {
  const redirectMap = {
    A: '/admin',
    S: '/pelayanan',
    D: '/pendonor',
  };

  return isLogin ? <Navigate to={redirectMap[access] || '/'} /> : <Outlet />;
};

export default PublicRoute;

PublicRoute.propTypes = {
  access: PropTypes.any,
  isLogin: PropTypes.any,
};
