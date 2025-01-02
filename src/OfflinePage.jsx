import PropTypes from 'prop-types';
import Button from './components/Button';

const OfflinePage = () => {
  return (
    <div className={`flex flex-col justify-center items-center gap-5 w-full h-screen bg-brand`}>
      <h1 className='text-ligt'>Sepertinya anda sedang offline</h1>
      <Button
        className={'text-light bg-light/20'}
        link={'/'}
        onclick={() => {
          window.location.reload();
        }}
      >
        Refresh
      </Button>
    </div>
  );
};

OfflinePage.propTypes = {
  className: PropTypes.any,
  text: PropTypes.string,
};

export default OfflinePage;
