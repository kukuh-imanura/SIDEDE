import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfilePelayanan = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const ubahHakAkses = (data) => {
    console.log(data);
  };

  return (
    <div className='p-10 flex flex-col items-center gap-5'>
      <div className='flex flex-col items-center justify-center relative'>
        <img className='w-48' src='/profile/man.png' alt='Profile' />

        <span className='absolute bottom-2 right-3 bg-dark rounded-full p-2 shadow-md'>
          <input
            id='foto'
            type='file'
            className='file:px-3 file:py-2 file:rounded-md file:cursor-pointer file:border file:border-dark hidden'
            {...register('foto')}
          />

          <label htmlFor='foto' className='select-none cursor-pointer text-light'>
            <FontAwesomeIcon icon={'fas fa-pencil'} size='xl' />
          </label>
        </span>
      </div>

      <form onSubmit={handleSubmit(ubahHakAkses)} className='flex flex-col gap-2' action=''>
        <span className='flex justify-between items-center gap-2'>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            className='px-3 py-2 rounded-md border border-dark/20'
            type='text'
            placeholder='user'
            {...register('username', { required: 'username wajib di isi' })}
          />
        </span>
        {errors.username && <p className='text-brand'>{errors.username.message}</p>}

        <span className='flex justify-between items-center gap-2'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            className='px-3 py-2 rounded-md border border-dark/20'
            type='text'
            placeholder='********'
            {...register('password', {
              required: 'password wajib di isi',
              minLength: { value: 8, message: ' minimal 8 karakter' },
            })}
          />
        </span>
        {errors.password && <p className='text-brand'>{errors.password.message}</p>}

        <span className='flex gap-2 justify-center mt-4'>
          <Button className={'bg-brand text-light'}>Hapus</Button>

          <input
            type='submit'
            value={'Ubah'}
            className='px-3 py-2 rounded border border-dark cursor-pointer'
          />
        </span>
      </form>
    </div>
  );
};

export default ProfilePelayanan;
