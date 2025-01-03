import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const TambahMobileUnit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const navigate = useNavigate();

  const tambahMobileUnit = async (data) => {
    try {
      const res = await axios.post('https://sidede-api.vercel.app/mobileunit', data);
      alert(res.data.message);
      navigate('/admin/mobileunit');
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  return (
    <div className='flex flex-col items-center gap-5 p-10'>
      <h2>Tambah Data Mobile Unit</h2>

      <form onSubmit={handleSubmit(tambahMobileUnit)} className='flex flex-col items-center gap-2'>
        <div className='flex gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='lokasi'>Lokasi</label>
            <input
              id='lokasi'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('lokasi', {
                required: 'wajib di isi',
              })}
            />
            {errors.lokasi && <p className='text-brand'>{errors.lokasi.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='jadwal'>Jadwal</label>
            <input
              id='jadwal'
              type='date'
              className='px-3 py-2 rounded-md'
              {...register('jadwal', {
                required: 'wajib di isi',
              })}
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

export default TambahMobileUnit;
