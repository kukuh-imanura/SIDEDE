import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

const UbahMobileUnit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });
  const [data, setData] = useState();

  const navigate = useNavigate();

  const location = useLocation();
  const { id } = location.state || {};

  const getData = async () => {
    try {
      const res = await axios.get(`https://sidede-api.vercel.app/mobileunit/${id}`);
      setData(res.data.result[0]);
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  const ubahMobileUnit = async (data) => {
    try {
      const res = await axios.patch(`https://sidede-api.vercel.app/mobileunit/${id}`, data);
      alert(res.data.message);
      navigate('/admin/mobileunit');
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
      <h2>Ubah Data Mobile Unit</h2>

      <form onSubmit={handleSubmit(ubahMobileUnit)} className='flex flex-col items-center gap-2'>
        <div className='flex gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='lokasi'>Lokasi</label>
            <input
              id='lokasi'
              label={data.lokasi}
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('lokasi')}
            />
            {errors.lokasi && <p className='text-brand'>{errors.lokasi.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='jadwal'>Jadwal</label>
            <input
              id='jadwal'
              type='date'
              className='px-3 py-2 rounded-md'
              {...register('jadwal')}
            />
            {errors.jadwal && <p className='text-brand'>{errors.jadwal.message}</p>}
          </span>
        </div>

        <input
          type='submit'
          className='px-3 py-2 mt-4 rounded cursor-pointer bg-dark text-light w-fit'
        />
      </form>
    </div>
  );
};

export default UbahMobileUnit;
