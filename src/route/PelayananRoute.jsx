import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const PelayananRoute = ({ isLogin, access }) => {
  if (!isLogin) {
    return <Navigate to='/' />;
  }

  const redirectMap = {
    pelayanan: <Outlet />,
    admin: <Navigate to='/admin' />,
    pendonor: <Navigate to='/pendonor' />,
  };

  return redirectMap[access] || <Navigate to='/' />;
};

export default PelayananRoute;

PelayananRoute.propTypes = {
  access: PropTypes.string,
  isLogin: PropTypes.any,
};
