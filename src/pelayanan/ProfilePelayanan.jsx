import { useForm } from 'react-hook-form';
import Button from '../components/Button';

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
      <div className='flex flex-col items-center'>
        <img className='w-48' src='/profile/man.png' alt='Profile' />
        <input
          id='foto'
          type='file'
          className='file:px-3 file:py-2 file:rounded-md file:cursor-pointer file:border'
          {...register('foto')}
        />
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
          <input
            type='submit'
            value={'Ubah'}
            className='px-3 py-2 rounded border border-dark cursor-pointer'
          />
          <Button className={'bg-brand text-light'}>Hapus</Button>
        </span>
      </form>
    </div>
  );
};

export default ProfilePelayanan;
