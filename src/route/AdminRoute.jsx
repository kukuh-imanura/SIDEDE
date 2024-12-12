import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import Button from '../components/Button';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NotFound from '../NotFound';

const AdminRoute = ({ isLogin, access }) => {
  const menuRef = useRef();

  if (!isLogin) {
    return <Navigate to='/' />;
  }

  const redirectMap = {
    admin: <Outlet />,
    pelayanan: <Navigate to='/pelayanan' />,
    pendonor: <Navigate to='/pendonor' />,
  };

  const toggleDropdown = () => {
    const elem = menuRef.current;
    elem.classList.toggle('hidden');
  };

  return (
    (
      <>
        <NotFound className={'lg:hidden'} />
        <div className='hidden lg:flex h-screen'>
          <aside className='border-r border-dark/10 h-full py-10 px-5 w-72'>
            <span className='flex gap-2 items-center w-full justify-center'>
              <img className='w-12 h-12' src='/public/icon/icon-192x192.png' alt='Red Cross' />
              {/* <h2 className='text-nowrap'>UTD-PMI</h2> */}
            </span>

            <hr className='my-4 border-dark/10' />

            <nav className='flex flex-col'>
              <Button link={'/admin'}>Dashboard</Button>

              <b className='mt-2'>Data</b>
              <Button link={'/admin/pendonor'}>Pendonor</Button>
              <Button link={'/admin/hakakses'}>Hak Akses</Button>
              <Button link={'/admin/pendaftaran'}>Pendaftaran</Button>
              <Button link={'/admin/screening'}>Screening</Button>
              <Button link={'/admin/pemeriksaan'}>Pemeriksaan Kesehatan</Button>
              <Button link={'/admin/riwayat'}>Riwayat Donor Darah</Button>
              <Button link={'/admin/mobileunit'}>Mobile unit</Button>
            </nav>
          </aside>

          <main className='w-full overflow-y-scroll'>
            <nav className='px-6 py-4 w-full flex justify-between items-center sticky top-0 backdrop-blur'>
              <h2></h2>

              {/* DROPDOWN */}
              <div className='relative'>
                <Button onclick={toggleDropdown} className={'flex items-center gap-2 text-right'}>
                  <FontAwesomeIcon icon={'fas fa-chevron-down'} />
                  <p>User</p>
                  <img className='w-6 h-6-' src='/public/profile/man.png' alt='Profile' />
                </Button>

                <menu
                  ref={menuRef}
                  className='absolute w-full right-0 bg-light rounded-b-md shadow py-2 hidden'
                >
                  <Button link={'admin/profile'} className={'text-right'}>
                    Account
                  </Button>
                  <Button className={'text-right'}>Logout</Button>
                </menu>
              </div>
            </nav>

            {redirectMap[access]}
          </main>
        </div>
      </>
    ) || <Navigate to='/' />
  );

  // return <>{redirectMap[access]}</> || <Navigate to='/' />;
};

export default AdminRoute;

AdminRoute.propTypes = {
  access: PropTypes.string,
  isLogin: PropTypes.any,
};
