import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

const TambahPemeriksaan = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const location = useLocation();
  const id = location.state.id || '';
  const navigate = useNavigate();

  const tambahPemeriksaan = async (data) => {
    try {
      data.id_pendaftaran = id;
      const res = await axios.post('https://sidede-api.vercel.app/pemeriksaan', data);
      alert(res.data.message);
      navigate('/admin/pemeriksaan');
    } catch (err) {
      console.error(err);
      alert(err.response?.data.message);
    }
  };

  return (
    <div className='flex flex-col items-center gap-5 p-10'>
      <hgroup className='text-center'>
        <h2>Tambah Data Pemeriksaan Kesehatan</h2>
        <p>ID Pemeriksaan : {id}</p>
      </hgroup>

      <form onSubmit={handleSubmit(tambahPemeriksaan)} className='flex flex-col items-center gap-2'>
        <div className='flex w-full gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='nama_petugas'>Nama Petugas</label>
            <input
              id='nama_petugas'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('nama_petugas', {
                required: 'wajib di isi',
              })}
            />
            {errors.nama_petugas && <p className='text-brand'>{errors.nama_petugas.message}</p>}
          </span>
        </div>

        <div className='flex w-full gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='tekanan_darah'>Tekanan Darah</label>
            <input
              id='tekanan_darah'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('tekanan_darah', {
                required: 'wajib di isi',
              })}
            />
            {errors.tekanan_darah && <p className='text-brand'>{errors.tekanan_darah.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='denyut_nadi'>Denyut Nadi</label>
            <input
              id='denyut_nadi'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('denyut_nadi', {
                required: 'wajib di isi',
              })}
            />
            {errors.denyut_nadi && <p className='text-brand'>{errors.denyut_nadi.message}</p>}
          </span>
        </div>

        <div className='flex w-full gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='berat_badan'>Berat Badan</label>
            <input
              id='berat_badan'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('berat_badan', {
                required: 'wajib di isi',
              })}
            />
            {errors.berat_badan && <p className='text-brand'>{errors.berat_badan.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='tinggi_badan'>Tinggi Badan</label>
            <input
              id='tinggi_badan'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('tinggi_badan', {
                required: 'wajib di isi',
              })}
            />
            {errors.tinggi_badan && <p className='text-brand'>{errors.tinggi_badan.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='suhu'>Suhu Badan</label>
            <input
              id='suhu'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('suhu', {
                required: 'wajib di isi',
              })}
            />
            {errors.suhu && <p className='text-brand'>{errors.suhu.message}</p>}
          </span>
        </div>

        <span className='flex flex-col w-full'>
          <label htmlFor='keadaan_umum'>Keadaan Umum</label>
          <textarea
            id='keadaan_umum'
            type='text'
            className='px-3 py-2 rounded-md'
            {...register('keadaan_umum', {
              required: 'wajib di isi',
            })}
          />
          {errors.keadaan_umum && <p className='text-brand'>{errors.keadaan_umum.message}</p>}
        </span>

        <span className='flex flex-col w-full'>
          <label htmlFor='riwayat_medis'>Riwayat Medis</label>
          <textarea
            id='riwayat_medis'
            type='text'
            className='px-3 py-2 rounded-md'
            {...register('riwayat_medis')}
          />
          {errors.riwayat_medis && <p className='text-brand'>{errors.riwayat_medis.message}</p>}
        </span>

        <input
          type='submit'
          className='px-3 py-2 mt-4 rounded cursor-pointer bg-dark text-light w-fit'
        />
      </form>
    </div>
  );
};

export default TambahPemeriksaan;
