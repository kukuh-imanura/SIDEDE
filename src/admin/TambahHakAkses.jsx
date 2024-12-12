import { useForm } from 'react-hook-form';

const TambahHakAkses = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const password = watch('password');

  const tambahHakAkses = (data) => {
    console.log(data);
  };

  return (
    <div className='p-10 flex flex-col gap-5 items-center'>
      <h2>Tambah Data Hak Akses</h2>
      <form onSubmit={handleSubmit(tambahHakAkses)} className='flex flex-col gap-2 items-center'>
        <span className='flex flex-col w-full'>
          <label htmlFor='foto'>Foto</label>
          <input
            id='foto'
            type='file'
            className='file:px-3 file:py-2 file:rounded-md file:cursor-pointer file:border'
            {...register('foto')}
          />

          {errors.foto && <p className='text-brand'>{errors.foto.message}</p>}
        </span>

        <span className='flex flex-col w-full'>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            className='px-3 py-2 rounded-md'
            {...register('username', {
              required: 'username wajib di isi',
            })}
          />
          {errors.username && <p className='text-brand'>{errors.username.message}</p>}
        </span>

        <span className='flex flex-col w-full'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='text'
            className='px-3 py-2 rounded-md'
            {...register('password', {
              required: 'password wajib di isi',
              minLength: { value: 8, message: 'password minimal 8 karakter' },
            })}
          />
          {errors.password && <p className='text-brand'>{errors.password.message}</p>}
        </span>

        <span className='flex flex-col w-full'>
          <label htmlFor='konfPass'>Konfirmasi Password</label>
          <input
            id='konfPass'
            type='text'
            className='px-3 py-2 rounded-md'
            {...register('konfPass', {
              validate: (value) => value === password || 'Passwords tidak sama',
            })}
          />
          {errors.konfPass && <p className='text-brand'>{errors.konfPass.message}</p>}
        </span>

        <span className='w-full'>
          <label htmlFor='hakakses'>Hak Akses</label>
          <select
            name='hakakses'
            id='hakakses'
            className='px-3 py-2 rounded-md w-full'
            {...register('hakakses', { required: 'wajib di isi' })}
          >
            <option value='' hidden>
              Hak Akses
            </option>
            <option value='A'>Staff Administrasi</option>
            <option value='S'>Staff Pelayanan</option>
          </select>
        </span>

        <input
          type='submit'
          className='px-3 py-2 mt-4 rounded bg-dark text-light w-fit cursor-pointer'
        />
      </form>
    </div>
  );
};

export default TambahHakAkses;
