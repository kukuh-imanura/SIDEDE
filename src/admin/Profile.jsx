import Button from '../components/Button';

const Profile = () => {
  return (
    <div className='p-10 flex flex-col items-center gap-5'>
      <img className='w-48' src='/profile/man.png' alt='Profile' />
      <form className='flex flex-col gap-2' action=''>
        <span className='flex justify-between items-center gap-2'>
          <label htmlFor='username'>Username : </label>
          <input
            id='username'
            className='px-3 py-2 rounded-md border border-dark/20'
            type='text'
            placeholder='user'
            disabled
          />
        </span>
        <span className='flex justify-between items-center gap-2'>
          <label htmlFor='password'>Password : </label>
          <input
            id='password'
            className='px-3 py-2 rounded-md border border-dark/20'
            type='text'
            placeholder='********'
            disabled
          />
        </span>
      </form>

      <span className='flex gap-2'>
        <Button className={'border border-dark'}>Ubah</Button>
        <Button className={'bg-brand text-light'}>Hapus</Button>
      </span>
    </div>
  );
};

export default Profile;
