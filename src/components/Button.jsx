import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ButtonInstall = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Cegah browser menampilkan prompt default
      e.preventDefault();

      // Simpan event ke state
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    // Tambahkan event listener
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Tampilkan prompt instalasi
    deferredPrompt.prompt();

    // Tunggu respons pengguna
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === 'accepted') {
      console.log('User accepted the PWA install');
    } else {
      console.log('User dismissed the PWA install');
    }

    // Reset event
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  return (
    <>
      {isInstallable && (
        <button className='px-3 py-2 rounded-md bg-brand text-light' onClick={handleInstallClick}>
          Download
        </button>
      )}
    </>
  );
};

const Button = ({ children, className, link, onclick, state }) => {
  return link?.includes('#') ? (
    <a
      href={link}
      className={`px-3 py-2 rounded-md cursor-pointer block ${className}`}
      onClick={onclick}
    >
      {children}
    </a>
  ) : (
    <Link
      to={link}
      state={state}
      className={`px-3 py-2 rounded-md cursor-pointer block ${className}`}
      onClick={onclick}
    >
      {children}
    </Link>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  link: PropTypes.any,
  onclick: PropTypes.any,
  state: PropTypes.any,
};
