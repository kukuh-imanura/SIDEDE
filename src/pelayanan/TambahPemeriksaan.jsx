import { useForm } from 'react-hook-form';

const TambahPemeriksaan = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const tambahPemeriksaan = (data) => {
    console.log(data);
  };

  return (
    <div className='p-10 flex flex-col gap-5 items-center'>
      <hgroup className='text-center'>
        <h2>Tambah Data Pemeriksaan Kesehatan</h2>
        <p>asep 1234</p>
      </hgroup>

      <form onSubmit={handleSubmit(tambahPemeriksaan)} className='flex flex-col gap-2 items-center'>
        <span className='flex flex-col w-full'>
          <label htmlFor='petugas'>Nama Petugas</label>
          <input
            id='petugas'
            type='text'
            className='px-3 py-2 rounded-md'
            {...register('petugas', {
              required: 'wajib di isi',
            })}
          />
          {errors.petugas && <p className='text-brand'>{errors.petugas.message}</p>}
        </span>

        <div className='flex gap-6 w-full'>
          <span className='flex flex-col w-full'>
            <label htmlFor='tensi'>Tekanan Darah</label>
            <input
              id='tensi'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('tensi', {
                required: 'wajib di isi',
              })}
            />
            {errors.tensi && <p className='text-brand'>{errors.tensi.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='nadi'>Denyut Nadi</label>
            <input
              id='nadi'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('nadi', {
                required: 'wajib di isi',
              })}
            />
            {errors.nadi && <p className='text-brand'>{errors.nadi.message}</p>}
          </span>
        </div>

        <div className='flex gap-6 w-full'>
          <span className='flex flex-col w-full'>
            <label htmlFor='berat'>Berat Badan</label>
            <input
              id='berat'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('berat', {
                required: 'wajib di isi',
              })}
            />
            {errors.berat && <p className='text-brand'>{errors.berat.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='tinggi'>Tinggi Badan</label>
            <input
              id='tinggi'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('tinggi', {
                required: 'wajib di isi',
              })}
            />
            {errors.tinggi && <p className='text-brand'>{errors.tinggi.message}</p>}
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
          <label htmlFor='keadaan'>Keadaan Umum</label>
          <textarea
            id='keadaan'
            type='text'
            className='px-3 py-2 rounded-md'
            {...register('keadaan', {
              required: 'wajib di isi',
            })}
          />
          {errors.keadaan && <p className='text-brand'>{errors.keadaan.message}</p>}
        </span>

        <span className='flex flex-col w-full'>
          <label htmlFor='riwayat'>Riwayat Medis</label>
          <textarea
            id='riwayat'
            type='text'
            className='px-3 py-2 rounded-md'
            {...register('riwayat', {
              required: 'wajib di isi',
            })}
          />
          {errors.riwayat && <p className='text-brand'>{errors.riwayat.message}</p>}
        </span>

        <input
          type='submit'
          className='px-3 py-2 mt-4 rounded bg-dark text-light w-fit cursor-pointer'
        />
      </form>
    </div>
  );
};

export default TambahPemeriksaan;
