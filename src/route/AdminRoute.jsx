import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = ({ isLogin, access }) => {
  if (!isLogin) {
    return <Navigate to='/' />;
  }

  const redirectMap = {
    admin: <Outlet />,
    pelayanan: <Navigate to='/dashboardpelayanan' />,
    pendonor: <Navigate to='/utama' />,
  };

  return redirectMap[access] || <Navigate to='/' />;
};

export default AdminRoute;

AdminRoute.propTypes = {
  access: PropTypes.string,
  isLogin: PropTypes.any,
};
