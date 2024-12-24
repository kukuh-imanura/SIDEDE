import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

const UbahHakAkses = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const navigate = useNavigate();

  const password = watch('password');
  const [isPass, setIsPass] = useState(true);

  const location = useLocation();
  const { id } = location.state || {};

  const [dataAkses, setDataAkses] = useState();

  const showPassword = () => {
    setIsPass(!isPass);
  };

  const getData = async () => {
    const res = await axios.get(`https://sidede-api.vercel.app/hakakses/${id}`);
    setDataAkses(res.data.result[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  const ubahHakAkses = async (data) => {
    try {
      if (data.password !== data.konfPass) return alert('Password tidak sama');

      data.foto = data.foto[0]?.name;

      // PATCH
      const res = await axios.patch(`https://sidede-api.vercel.app/hakakses/${id}`, data);
      alert(res.data.message);
      navigate('/admin/hakakses');
    } catch (err) {
      console.error('Error saat mengubah data :', err.message);
      alert(err.response?.data.message);
    }
  };

  return (
    <div className='flex flex-col items-center gap-5 p-10'>
      <h2>Ubah Data Hak Akses</h2>
      <form onSubmit={handleSubmit(ubahHakAkses)} className='flex flex-col items-center gap-2'>
        <span className='flex flex-col w-full'>
          <label htmlFor='foto'>Foto</label>
          <input
            id='foto'
            placeholder={dataAkses?.foto}
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
            placeholder={dataAkses?.username}
            type='text'
            className='px-3 py-2 rounded-md'
            {...register('username')}
          />
          {errors.username && <p className='text-brand'>{errors.username.message}</p>}
        </span>

        <div className='flex flex-col w-full'>
          <label htmlFor='password'>Password</label>

          <div className='relative flex items-center w-full'>
            <input
              id='password'
              type={`${isPass ? 'password' : 'text'}`}
              className='w-full px-3 py-2 rounded-md'
              {...register('password', {
                minLength: { value: 8, message: ' minimal 8 karakter' },
              })}
            />
            <span
              onClick={showPassword}
              className='absolute right-0 flex items-center justify-center w-10 h-10 p-2 rounded-md cursor-pointer'
            >
              <FontAwesomeIcon icon={`fas ${isPass ? 'fa-eye' : 'fa-eye-slash'}`} />
            </span>
          </div>

          {errors.password && <p className='text-brand'>{errors.password.message}</p>}
        </div>

        <span className='flex flex-col w-full'>
          <label htmlFor='konfPass'>Konfirmasi Password</label>
          <input
            id='konfPass'
            type={`${isPass ? 'password' : 'text'}`}
            className='px-3 py-2 rounded-md'
            {...register('konfPass', {
              validate: (value) => value === password || 'Passwords tidak sama',
            })}
          />
          {errors.konfPass && <p className='text-brand'>{errors.konfPass.message}</p>}
        </span>

        <span className='w-full'>
          <label htmlFor='hak_akses'>Hak Akses</label>
          <select
            name='hak_akses'
            id='hak_akses'
            className='w-full px-3 py-2 rounded-md'
            {...register('hak_akses')}
          >
            <option value='' hidden>
              {dataAkses?.hak_akses === 'A' ? 'Staff Administrasi' : 'Staff Pelayanan'}
            </option>
            <option value='A'>Staff Administrasi</option>
            <option value='S'>Staff Pelayanan</option>
          </select>
        </span>

        <input
          type='submit'
          className='px-3 py-2 mt-4 rounded cursor-pointer bg-dark text-light w-fit'
        />
      </form>
    </div>
  );
};

export default UbahHakAkses;
