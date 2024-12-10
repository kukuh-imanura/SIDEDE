import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

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
        <button className='bg-brand text-light px-3 py-2 rounded' onClick={handleInstallClick}>
          Download
        </button>
      )}
    </>
  );
};

export const Button = ({ children, className, link }) => {
  return (
    <>
      <a href={link} className={`px-3 py-2 rounded ${className}`}>
        {children}
      </a>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  link: PropTypes.any,
};
