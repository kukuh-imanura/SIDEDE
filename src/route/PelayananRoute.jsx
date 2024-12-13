import PropTypes from 'prop-types';
import { Link, Navigate, Outlet } from 'react-router-dom';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import NotFound from '../NotFound';

const PelayananRoute = ({ isLogin, access }) => {
  const menuRef = useRef();

  if (!isLogin) {
    return <Navigate to='/' />;
  }

  const redirectMap = {
    pelayanan: <Outlet />,
    admin: <Navigate to='/admin' />,
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

        <div className='hidden lg:block'>
          <nav className='px-6 py-4 w-full flex justify-between items-center sticky top-0 backdrop-blur'>
            <Link to={'/pelayanan'}>
              <img className='w-12 h-12' src='/icon/icon-192x192.png' alt='Red Cross' />
            </Link>

            {/* DROPDOWN */}
            <div className='relative'>
              <Button onclick={toggleDropdown} className={'flex items-center gap-2 text-right'}>
                <FontAwesomeIcon icon={'fas fa-chevron-down'} />
                <p>User</p>
                <img className='w-6 h-6-' src='/profile/man.png' alt='Profile' />
              </Button>

              <menu
                ref={menuRef}
                className='absolute w-full right-0 bg-light rounded-b-md shadow py-2 hidden'
              >
                <Button link={'pelayanan/profile'} className={'text-right'}>
                  Account
                </Button>
                <Button className={'text-right'}>Logout</Button>
              </menu>
            </div>
          </nav>

          {redirectMap[access]}
        </div>
      </>
    ) || <Navigate to='/' />
  );
};

export default PelayananRoute;

PelayananRoute.propTypes = {
  access: PropTypes.string,
  isLogin: PropTypes.any,
};
