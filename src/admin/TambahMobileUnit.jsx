import { useForm } from 'react-hook-form';

const TambahMobileUnit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const tambahMobileUnit = (data) => {
    console.log(data);
  };

  return (
    <div className='p-10 flex flex-col gap-5 items-center'>
      <h2>Tambah Data Mobile Unit</h2>

      <form onSubmit={handleSubmit(tambahMobileUnit)} className='flex flex-col gap-2 items-center'>
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
            <label htmlFor='waktu'>Waktu</label>
            <input
              id='waktu'
              type='date'
              className='px-3 py-2 rounded-md'
              {...register('waktu', {
                required: 'wajib di isi',
              })}
            />
            {errors.waktu && <p className='text-brand'>{errors.waktu.message}</p>}
          </span>
        </div>

        <input
          type='submit'
          className='px-3 py-2 mt-4 rounded bg-dark text-light w-fit cursor-pointer'
        />
      </form>
    </div>
  );
};

export default TambahMobileUnit;
