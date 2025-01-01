import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './components/Button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const submitLogin = async (data) => {
    try {
      const res = await axios.post('http://localhost:3000/auth', data);
      const akses = res.data.result.hak_akses;

      localStorage.setItem('id', res.data.result.id_akses);
      localStorage.setItem('akses', akses);

      alert(res.data.message);

      window.location.href = '/';
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  const [isPass, setIsPass] = useState(true);

  const showPassword = () => {
    setIsPass(!isPass);
  };

  return (
    <>
      <img
        className='absolute object-cover w-full h-full -z-10 contrast-50'
        src='/illustration/Blood donation-pana.png'
        alt='Blood Donor'
      />

      <div className='top-0 left-0 flex flex-col items-center justify-center w-full h-screen gap-10 py-20 bg-dark/50'>
        <h1 className='text-light'>Login</h1>

        <form
          className='relative flex flex-col items-center w-4/5 gap-6 p-10 pt-16 md:w-1/2 h-fit bg-light rounded-xl'
          onSubmit={handleSubmit(submitLogin)}
        >
          <Button link={'/'} className={'self-end absolute top-6'}>
            <FontAwesomeIcon icon='fas fa-xmark' size='xl' />
          </Button>

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

          <div className='flex flex-col w-full'>
            <label htmlFor='password'>Password</label>

            <div className='relative flex items-center w-full'>
              <input
                id='password'
                type={`${isPass ? 'password' : 'text'}`}
                className='w-full px-3 py-2 rounded-md'
                {...register('password', {
                  required: 'password wajib di isi',
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

          <input
            type='submit'
            className='px-3 py-2 rounded cursor-pointer bg-dark text-light w-fit'
          />
        </form>
      </div>
    </>
  );
};

export default Login;
