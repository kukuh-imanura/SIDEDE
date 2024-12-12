import PropTypes from 'prop-types';
import Button from './components/Button';
import { useNavigate } from 'react-router-dom';

const NotFound = ({ text = 'Tidak Ditemukan', className }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col justify-center items-center gap-5 w-full h-screen bg-brand ${className}`}
    >
      <h1 className='text-light'>{text}</h1>
      <Button
        className={'text-light bg-light/20'}
        link={'/'}
        onclick={() => {
          navigate(-1);
        }}
      >
        Kembali
      </Button>
    </div>
  );
};

NotFound.propTypes = {
  className: PropTypes.any,
  text: PropTypes.string,
};

export default NotFound;
