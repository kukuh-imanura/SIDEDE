import { Route, Routes } from 'react-router-dom';

// Route
import PublicRoute from './PublicRoutes';
import AdminRoute from './AdminRoute';
import PelayananRoute from './PelayananRoute';
import PendonorRoute from './PendonorRoute';

// Public
import NotFound from '../NotFound';
import Landing from '../Landing';
import Login from '../Login';
import Daftar from '../Daftar';

// Admin
import DashboardAdmin from '../admin/DashboardAdmin';

import Profile from '../admin/Profile';
import HakAkses from '../admin/HakAkses';
import TambahHakAkses from '../admin/TambahHakAkses';
import UbahHakAkses from '../admin/UbahHakAkses';

import Pendonor from '../admin/Pendonor';
import TambahPendonor from '../admin/TambahPendonor';
import UbahPendonor from '../admin/UbahPendonor';

import Pendaftaran from '../admin/Pendaftaran';
import TambahPendaftaran from '../admin/TambahPendaftaran';

import DataScreening from '../admin/DataScreening';
import TambahScreening from '../admin/TambahScreening';
import TambahPertanyaan from '../admin/TambahPertanyaan';

import Pemeriksaan from '../admin/Pemeriksaan';
import TambahDataPemeriksaan from '../admin/TambahDataPemeriksaan';

import Riwayat from '../admin/Riwayat';

import MobileUnit from '../admin/MobileUnit';
import TambahMobileUnit from '../admin/TambahMobileUnit';

// Pelayanan
import DashboardPelayanan from '../pelayanan/DashboardPelayanan';
import VerifikasiScreening from '../pelayanan/VerifikasiScreening';
import TambahPemeriksaan from '../pelayanan/TambahPemeriksaan';
import ProfilePelayanan from '../pelayanan/ProfilePelayanan';

// Pendonor
import Utama from '../pendonor/Utama';
import ProfilePendonor from '../pendonor/ProfilePendonor';
import DonorDarah from '../pendonor/DonorDarah';
import Screening from '../pendonor/Screening';
import ScreeningPendonor from '../pendonor/ScreeningPendonor';
import HasilPemeriksaan from '../pendonor/HasilPemeriksaan';

const isLogin = true;
const access = 'admin';

const RoutePath = () => {
  return (
    <Routes>
      <Route element={<PublicRoute isLogin={isLogin} access={access} />}>
        <Route path='/' element={<Landing />} />
        <Route path='/daftar' element={<Daftar />} />
        <Route path='/login' element={<Login />} />
      </Route>

      <Route element={<AdminRoute isLogin={isLogin} access={access} />}>
        <Route path='/admin' element={<DashboardAdmin />} />

        <Route path='/admin/profile' element={<Profile />} />
        <Route path='/admin/hakakses' element={<HakAkses />} />
        <Route path='/admin/hakakses/tambah' element={<TambahHakAkses />} />
        <Route path='/admin/hakakses/ubah' element={<UbahHakAkses />} />

        <Route path='/admin/pendonor' element={<Pendonor />} />
        <Route path='/admin/pendonor/tambah' element={<TambahPendonor />} />
        <Route path='/admin/pendonor/ubah' element={<UbahPendonor />} />

        <Route path='/admin/pendaftaran' element={<Pendaftaran />} />
        <Route path='/admin/pendaftaran/tambah' element={<TambahPendaftaran />} />

        <Route path='/admin/screening' element={<DataScreening />} />
        <Route path='/admin/screening/pertanyaan' element={<TambahPertanyaan />} />
        <Route path='/admin/screening/tambah' element={<TambahScreening />} />

        <Route path='/admin/pemeriksaan' element={<Pemeriksaan />} />
        <Route path='/admin/pemeriksaan/tambah' element={<TambahDataPemeriksaan />} />

        <Route path='/admin/riwayat' element={<Riwayat />} />

        <Route path='/admin/mobileunit' element={<MobileUnit />} />
        <Route path='/admin/mobileunit/tambah' element={<TambahMobileUnit />} />
      </Route>

      <Route element={<PelayananRoute isLogin={isLogin} access={access} />}>
        <Route path='/pelayanan' element={<DashboardPelayanan />} />
        <Route path='/pelayanan/screening' element={<VerifikasiScreening />} />
        <Route path='/pelayanan/pemeriksaan' element={<TambahPemeriksaan />} />
        <Route path='/pelayanan/profile' element={<ProfilePelayanan />} />
      </Route>

      <Route element={<PendonorRoute isLogin={isLogin} access={access} />}>
        <Route path='/pendonor' element={<Utama />} />
        <Route path='/pendonor/profile' element={<ProfilePendonor />} />
        <Route path='/pendonor/donor' element={<DonorDarah />} />
        <Route path='/pendonor/screening' element={<Screening />} />
        <Route path='/pendonor/datascreening' element={<ScreeningPendonor />} />
        <Route path='/pendonor/pemeriksaan' element={<HasilPemeriksaan />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default RoutePath;
