import PropTypes from 'prop-types';
import { Link, Navigate, Outlet } from 'react-router-dom';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';

const PendonorRoute = ({ isLogin, access }) => {
  const menuRef = useRef();

  if (!isLogin) {
    return <Navigate to='/' />;
  }

  const redirectMap = {
    pendonor: <Outlet />,
    pelayanan: <Navigate to='/pelayanan' />,
    admin: <Navigate to='/admin' />,
  };

  const toggleDropdown = () => {
    const elem = menuRef.current;
    elem.classList.toggle('hidden');
  };

  return (
    (
      <div>
        <nav className='px-6 py-4 w-full flex justify-between items-center sticky top-0 backdrop-blur'>
          <Link to={'/pendonor'}>
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
              <Button link={'/pendonor/profile'} className={'text-right'}>
                Account
              </Button>
              <Button className={'text-right'}>Logout</Button>
            </menu>
          </div>
        </nav>

        {redirectMap[access]}
      </div>
    ) || <Navigate to='/' />
  );
};

export default PendonorRoute;

PendonorRoute.propTypes = {
  access: PropTypes.string,
  isLogin: PropTypes.any,
};
