import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const PendonorRoute = ({ isLogin, access }) => {
  if (!isLogin) {
    return <Navigate to='/' />;
  }

  const redirectMap = {
    pendonor: <Outlet />,
    pelayanan: <Navigate to='/dashboardpelayanan' />,
    admin: <Navigate to='/dashboardadmin' />,
  };

  return redirectMap[access] || <Navigate to='/' />;
};

export default PendonorRoute;

PendonorRoute.propTypes = {
  access: PropTypes.string,
  isLogin: PropTypes.any,
};
