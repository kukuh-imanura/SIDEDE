import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePelayanan = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const [isPass, setIsPass] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [data, setData] = useState();

  const user = JSON.parse(localStorage.getItem('user'));

  const handleEnable = () => {
    setIsDisabled(false);
  };

  const showPassword = () => {
    setIsPass(!isPass);
  };

  const ubahHakAkses = async (data) => {
    console.log(data);

    try {
      data.foto = await data.foto[0]?.name;
      console.log('data');
      console.log(data);

      const res = await axios.patch(
        `https://sidede-api.vercel.app/hakakses/${user.id_akses}`,
        data
      );
      alert(res.data.message);
      window.location.reload();

      setIsDisabled(true);
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  const getData = async () => {
    try {
      const res = await axios.get(`https://sidede-api.vercel.app/hakakses/${user.id_akses}`);
      setData(res.data.result[0]);
      localStorage.setItem('user', JSON.stringify(res.data.result[0]));
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='flex flex-col items-center gap-5 p-10'>
      <form
        onSubmit={handleSubmit(ubahHakAkses)}
        className='flex flex-col items-center gap-2'
        action=''
      >
        <div className='relative flex flex-col items-center justify-center w-fit'>
          <img className='w-48' src='/profile/user.png' alt='Profile' />

          <span className='absolute p-2 rounded-full shadow-md bottom-2 right-3 bg-dark'>
            <input
              id='foto'
              type='file'
              className='hidden file:px-3 file:py-2 file:rounded-md file:cursor-pointer file:border file:border-dark'
              {...register('foto')}
            />

            <label htmlFor='foto' className='cursor-pointer select-none text-light'>
              <FontAwesomeIcon icon={'fas fa-pencil'} size='xl' />
            </label>
          </span>
        </div>

        <span className='flex items-center justify-between w-full gap-2'>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            className='px-3 py-2 border rounded-md'
            type='text'
            placeholder={data?.username}
            disabled={isDisabled}
            {...register('username')}
          />
        </span>
        {errors.username && <p className='text-brand'>{errors.username.message}</p>}

        <span className='flex items-center justify-between w-full gap-2'>
          <label htmlFor='password'>Password</label>

          <div className='relative flex items-center'>
            <input
              id='password'
              placeholder='****'
              type={`${isPass ? 'password' : 'text'}`}
              className='w-full px-3 py-2 border rounded-md'
              disabled={isDisabled}
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
        </span>
        {errors.password && <p className='text-brand'>{errors.password.message}</p>}

        <span className={`flex gap-2 justify-center mt-4 ${!isDisabled && 'hidden'}`}>
          <Button className={'bg-brand text-light'}>Hapus</Button>
          <Button onclick={handleEnable} className={'border border-dark'}>
            Ubah
          </Button>
        </span>

        <input
          type='submit'
          className={`px-3 py-2 rounded border border-dark cursor-pointer w-fit ${
            isDisabled && 'hidden'
          }`}
        />
      </form>
    </div>
  );
};

export default ProfilePelayanan;
