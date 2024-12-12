import { useForm } from 'react-hook-form';

const TambahPendaftaran = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const tambahPendaftaran = (data) => {
    console.log(data);
  };

  return (
    <div className='p-10 flex flex-col gap-5 items-center'>
      <h2>Tambah Data Pendaftaran</h2>

      <form onSubmit={handleSubmit(tambahPendaftaran)} className='flex flex-col gap-2 items-center'>
        <span className='flex flex-col w-full'>
          <label htmlFor='nik'>NIK</label>
          <input
            id='nik'
            type='text'
            className='px-3 py-2 rounded-md'
            {...register('nik', {
              required: 'NIK wajib di isi',
            })}
          />
          {errors.nik && <p className='text-brand'>{errors.nik.message}</p>}
        </span>

        <div className='flex gap-6 w-full'>
          <span className='flex flex-col w-full'>
            <label htmlFor='waktu'>Waktu Donor</label>
            <input
              id='waktu'
              type='datetime-local'
              className='px-3 py-2 rounded-md'
              {...register('waktu', {
                required: 'wajib di isi',
              })}
            />
            {errors.waktu && <p className='text-brand'>{errors.waktu.message}</p>}
          </span>

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
        </div>

        <div className='flex gap-6 w-full'>
          <span className='w-full'>
            <label htmlFor='tipe'>Tipe</label>

            <select
              name='tipe'
              id='tipe'
              className='px-3 py-2 rounded-md w-full'
              {...register('tipe', { required: 'wajib di isi' })}
            >
              <option value='' hidden>
                Tipe Donor
              </option>
              <option value='A'>Sukarela</option>
              <option value='S'>Keluarga</option>
            </select>
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='donorke'>Donor Ke</label>
            <input
              id='donorke'
              type='number'
              className='px-3 py-2 rounded-md'
              {...register('donorke', {
                required: 'wajib di isi',
              })}
            />
            {errors.donorke && <p className='text-brand'>{errors.donorke.message}</p>}
          </span>
        </div>

        <span className='flex flex-col w-full'>
          <label htmlFor='akhirdonor'>Tanggal Akhir Donor</label>
          <input
            id='akhirdonor'
            type='date'
            className='px-3 py-2 rounded-md'
            {...register('akhirdonor', {
              required: 'wajib di isi',
            })}
          />
          {errors.akhirdonor && <p className='text-brand'>{errors.akhirdonor.message}</p>}
        </span>

        {/* <div className='flex gap-6 w-full'>
          <span className='w-full'>
            <label htmlFor='status'>Status</label>
            <select
              name='status'
              id='status'
              className='px-3 py-2 rounded-md w-full'
              {...register('status', { required: 'wajib di isi' })}
            >
              <option value='' hidden>
                Status Donor
              </option>
              <option value='P'>Diproses</option>
              <option value='A'>Diterima</option>
              <option value='D'>Ditolak</option>
            </select>
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='alasan'>Alasan Penolakan</label>
            <input
              id='alasan'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('alasan')}
            />
            {errors.alasan && <p className='text-brand'>{errors.alasan.message}</p>}
          </span>
        </div> */}

        <div className='flex flex-col w-full'>
          <p>Penghargaan yang telah di terima</p>

          <div className='flex gap-6'>
            <label htmlFor='10'>
              <input type='radio' name='penghargaan' id='10' {...register('penghargaan')} />
              &nbsp;10X
            </label>

            <label htmlFor='25'>
              <input type='radio' name='penghargaan' id='25' {...register('penghargaan')} />
              &nbsp;25X
            </label>

            <label htmlFor='50'>
              <input type='radio' name='penghargaan' id='50' {...register('penghargaan')} />
              &nbsp;50X
            </label>

            <label htmlFor='75'>
              <input type='radio' name='penghargaan' id='75' {...register('penghargaan')} />
              &nbsp;75X
            </label>

            <label htmlFor='100'>
              <input type='radio' name='penghargaan' id='100' {...register('penghargaan')} />
              &nbsp;100X
            </label>
          </div>
          {errors.penghargaan && <p className='text-brand'>{errors.penghargaan.message}</p>}
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor='donorpuasa'>
            <input type='checkbox' name='donorpuasa' id='donorpuasa' {...register('donorpuasa')} />
            &nbsp;Bersediakah donor saat bulan puasa?
          </label>
          {errors.penghargaan && <p className='text-brand'>{errors.penghargaan.message}</p>}
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor='donorsukarela'>
            <input
              type='checkbox'
              name='donorsukarela'
              id='donorsukarela'
              {...register('donorsukarela')}
            />
            &nbsp;Bersediakah donor saat dibutuhkan? (diluar donor rutin)
          </label>
          {errors.penghargaan && <p className='text-brand'>{errors.penghargaan.message}</p>}
        </div>

        <input
          type='submit'
          className='px-3 py-2 mt-4 rounded bg-dark text-light w-fit cursor-pointer'
        />
      </form>
    </div>
  );
};

export default TambahPendaftaran;
