import { Route, Routes } from 'react-router-dom';

// Route
import PublicRoute from './PublicRoutes';
import AdminRoute from './AdminRoute';
import PelayananRoute from './PelayananRoute';
import PendonorRoute from './PendonorRoute';

// Public
import NotFound from '../NotFound';
import Landing from '../Landing';

// Admin
import DashboardAdmin from '../admin/DashboardAdmin';

// Pelayanan
import DashboardPelayanan from '../pelayanan/DashboardPelayanan';

// Pendonor
import Utama from '../pendonor/Utama';

const isLogin = false;
const access = 'admin';

const RoutePath = () => {
  return (
    <Routes>
      <Route element={<PublicRoute isLogin={isLogin} access={access} />}>
        <Route path='/' element={<Landing />} />
      </Route>

      <Route element={<AdminRoute isLogin={isLogin} access={access} />}>
        <Route path='/dashboardadmin' element={<DashboardAdmin />} />
      </Route>

      <Route element={<PelayananRoute isLogin={isLogin} access={access} />}>
        <Route path='/dashboardpelayanan' element={<DashboardPelayanan />} />
      </Route>

      <Route element={<PendonorRoute isLogin={isLogin} access={access} />}>
        <Route path='/utama' element={<Utama />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default RoutePath;
