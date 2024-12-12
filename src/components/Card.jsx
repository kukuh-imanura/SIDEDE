import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
export const CardProfile = ({ img, name, desc }) => {
  return (
    <div className='flex flex-col items-center'>
      <img className='aspect-square w-36' src={img ? img : '/profile/user.png'} alt='Profile' />
      <b>{name ? name : 'Nama'}</b>
      <p>{desc ? desc : 'Deskripsi'}</p>
    </div>
  );
};

CardProfile.propTypes = {
  desc: PropTypes.any,
  img: PropTypes.any,
  name: PropTypes.any,
};

export const CardStatic = ({ icon, tittle, subtitle }) => {
  return (
    <div className='p-6 rounded-md h-40 border border-dark flex flex-col items-center justify-center gap-1 aspect-square'>
      <FontAwesomeIcon icon={icon} size='2x' />
      <h2>{tittle}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

CardStatic.propTypes = {
  icon: PropTypes.any,
  subtitle: PropTypes.any,
  tittle: PropTypes.any,
};
