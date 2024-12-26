import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

const UbahDataPemeriksaan = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const navigate = useNavigate();

  const location = useLocation();
  const { id } = location.state || {};

  const [data, setData] = useState();

  const ubahPemeriksaan = async (data) => {
    try {
      const res = await axios.patch(`https://sidede-api.vercel.app/pemeriksaan/${id}`, data);
      alert(res.data.message);
      navigate('/admin/pemeriksaan');
    } catch (err) {
      console.error(err);
      alert(err.response?.data.message);
    }
  };

  const getData = async (id) => {
    try {
      const res = await axios.get(`https://sidede-api.vercel.app/pemeriksaan/${id}`);
      setData(res.data.result[0]);
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <div className='flex flex-col items-center gap-5 p-10'>
      <h2>Tambah Data Pemeriksaan Kesehatan</h2>

      <form onSubmit={handleSubmit(ubahPemeriksaan)} className='flex flex-col items-center gap-2'>
        <div className='flex w-full gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='id_pendaftaran'>ID Pendaftaran</label>
            <input
              id='id_pendaftaran'
              placeholder={data?.id_pendaftaran}
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('id_pendaftaran')}
            />
            {errors.id_pendaftaran && <p className='text-brand'>{errors.id_pendaftaran.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='nama_petugas'>Nama Petugas</label>
            <input
              id='nama_petugas'
              placeholder={data?.nama_petugas}
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('nama_petugas')}
            />
            {errors.nama_petugas && <p className='text-brand'>{errors.nama_petugas.message}</p>}
          </span>
        </div>

        <div className='flex w-full gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='tekanan_darah'>Tekanan Darah</label>
            <input
              id='tekanan_darah'
              placeholder={data?.tekanan_darah}
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('tekanan_darah')}
            />
            {errors.tekanan_darah && <p className='text-brand'>{errors.tekanan_darah.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='denyut_nadi'>Denyut Nadi</label>
            <input
              id='denyut_nadi'
              placeholder={data?.denyut_nadi}
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('denyut_nadi')}
            />
            {errors.denyut_nadi && <p className='text-brand'>{errors.denyut_nadi.message}</p>}
          </span>
        </div>

        <div className='flex w-full gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='berat_badan'>Berat Badan</label>
            <input
              id='berat_badan'
              placeholder={data?.berat_badan}
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('berat_badan')}
            />
            {errors.berat_badan && <p className='text-brand'>{errors.berat_badan.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='tinggi_badan'>Tinggi Badan</label>
            <input
              id='tinggi_badan'
              placeholder={data?.tinggi_badan}
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('tinggi_badan')}
            />
            {errors.tinggi_badan && <p className='text-brand'>{errors.tinggi_badan.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='suhu'>Suhu Badan</label>
            <input
              id='suhu'
              placeholder={data?.suhu}
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('suhu')}
            />
            {errors.suhu && <p className='text-brand'>{errors.suhu.message}</p>}
          </span>
        </div>

        <span className='flex flex-col w-full'>
          <label htmlFor='keadaan_umum'>Keadaan Umum</label>
          <textarea
            id='keadaan_umum'
            placeholder={data?.keadaan_umum}
            type='text'
            className='px-3 py-2 rounded-md'
            {...register('keadaan_umum')}
          />
          {errors.keadaan_umum && <p className='text-brand'>{errors.keadaan_umum.message}</p>}
        </span>

        <span className='flex flex-col w-full'>
          <label htmlFor='riwayat_medis'>Riwayat Medis</label>
          <textarea
            id='riwayat_medis'
            placeholder={data?.riwayat_medis}
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

export default UbahDataPemeriksaan;
