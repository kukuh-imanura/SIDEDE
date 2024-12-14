import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './components/Button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const submitLogin = (data) => {
    console.log(data);
  };

  const [isPass, setIsPass] = useState(true);

  const showPassword = () => {
    setIsPass(!isPass);
  };

  return (
    <>
      <img
        className='h-full w-full absolute -z-10 contrast-50 object-cover'
        src='/illustration/Blood donation-pana.png'
        alt='Blood Donor'
      />

      <div className='bg-dark/50 py-20 flex flex-col items-center justify-center gap-10 top-0 left-0 w-full h-screen'>
        <h1 className='text-light'>Login</h1>

        <form
          className='w-4/5 md:w-1/2 h-fit bg-light rounded-xl p-10 pt-16 flex flex-col items-center gap-6 relative'
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

            <div className='w-full flex items-center relative'>
              <input
                id='password'
                type={`${isPass ? 'password' : 'text'}`}
                className='px-3 py-2 rounded-md w-full'
                {...register('password', {
                  required: 'password wajib di isi',
                })}
              />
              <span
                onClick={showPassword}
                className='p-2 cursor-pointer h-10 w-10 rounded-md absolute right-0 flex items-center justify-center'
              >
                <FontAwesomeIcon icon={`fas ${isPass ? 'fa-eye' : 'fa-eye-slash'}`} />
              </span>
            </div>

            {errors.password && <p className='text-brand'>{errors.password.message}</p>}
          </div>

          <input
            type='submit'
            className='px-3 py-2 rounded bg-dark text-light w-fit cursor-pointer'
          />
        </form>
      </div>
    </>
  );
};

export default Login;
