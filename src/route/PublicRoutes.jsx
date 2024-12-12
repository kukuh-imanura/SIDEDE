import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ isLogin, access }) => {
  const redirectMap = {
    admin: '/admin',
    pelayanan: '/pelayanan',
    pendonor: '/pendonor',
  };

  return isLogin ? <Navigate to={redirectMap[access] || '/'} /> : <Outlet />;
};

export default PublicRoute;

PublicRoute.propTypes = {
  access: PropTypes.any,
  isLogin: PropTypes.any,
};
