import PropTypes from 'prop-types';
import { Link, Navigate, Outlet } from 'react-router-dom';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const PendonorRoute = ({ isLogin, access }) => {
  const menuRef = useRef();

  const [data, setData] = useState();

  const user = JSON.parse(localStorage.getItem('user'));

  const getData = async () => {
    try {
      if (!user) return;

      const resAkses = await axios.get(`https://sidede-api.vercel.app/hakakses/${user?.id_akses}`);
      const resPendonor = await axios.get(
        `https://sidede-api.vercel.app/pendonor?id_akses=${user?.id_akses}`
      );

      const akses = resAkses.data.result[0] || {};
      const pendonor = resPendonor.data.result[0] || {};
      const result = { ...akses, ...pendonor };

      setData(result);
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.mesage);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!isLogin) {
    return <Navigate to='/' />;
  }

  const redirectMap = {
    D: <Outlet />,
    S: <Navigate to='/pelayanan' />,
    A: <Navigate to='/admin' />,
  };

  const toggleDropdown = () => {
    const elem = menuRef.current;
    elem.classList.toggle('hidden');
  };

  const logout = () => {
    localStorage.removeItem('user');

    alert('Logout Berhasil');

    window.location.href = '/';
  };

  return (
    (
      <div>
        <nav className='sticky top-0 z-10 flex items-center justify-between w-full px-6 py-4 bg-light'>
          <Link to={'/pendonor'}>
            <img className='w-12 h-12' src='/icon/icon-192x192.png' alt='Red Cross' />
          </Link>

          {/* DROPDOWN */}
          <div className='relative'>
            <Button onclick={toggleDropdown} className={'flex items-center gap-2 text-right'}>
              <FontAwesomeIcon icon={'fas fa-chevron-down'} />
              <p>{data?.username || 'User'}</p>
              <img
                className='w-6 h-6-'
                src={`/profile/${data?.jenis_kelamin == 'L' ? 'man' : 'woman'}.png`}
                alt='Profile'
              />
            </Button>

            <menu
              ref={menuRef}
              className='absolute right-0 hidden w-full py-2 shadow bg-light rounded-b-md'
            >
              <Button link={'/pendonor/profile'} className={'text-right'}>
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
    ) || <Navigate to='/' />
  );
};

export default PendonorRoute;

PendonorRoute.propTypes = {
  access: PropTypes.string,
  isLogin: PropTypes.any,
};
