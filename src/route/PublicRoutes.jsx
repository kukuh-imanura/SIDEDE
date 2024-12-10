import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ isLogin, access }) => {
  const redirectMap = {
    admin: '/dashboardadmin',
    pelayanan: '/dashboardpelayanan',
    pendonor: '/utama',
  };

  return isLogin ? <Navigate to={redirectMap[access] || '/'} /> : <Outlet />;
};

export default PublicRoute;

PublicRoute.propTypes = {
  access: PropTypes.any,
  isLogin: PropTypes.any,
};
