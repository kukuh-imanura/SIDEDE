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
    S: <Outlet />,
    A: <Navigate to='/admin' />,
    D: <Navigate to='/pendonor' />,
  };

  const toggleDropdown = () => {
    const elem = menuRef.current;
    elem.classList.toggle('hidden');
  };

  const logout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('akses');

    alert('Logout Berhasil');

    window.location.href = '/';
  };

  return (
    (
      <>
        <NotFound className={'lg:hidden'} />

        <div className='hidden lg:block'>
          <nav className='sticky top-0 flex items-center justify-between w-full px-6 py-4 bg-light'>
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
                className='absolute right-0 hidden w-full py-2 shadow bg-light rounded-b-md'
              >
                <Button link={'pelayanan/profile'} className={'text-right'}>
                  Account
                </Button>
                <Button className={'text-right'} onclick={() => logout()}>
                  Logout
                </Button>
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
