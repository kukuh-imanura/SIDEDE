import PropTypes from 'prop-types';
export const CardProfile = ({ img, name, desc }) => {
  return (
    <div className='flex flex-col items-center'>
      <img
        className='aspect-square w-36'
        src={img ? img : '/public/profile/user.png'}
        alt='Profile'
      />
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
