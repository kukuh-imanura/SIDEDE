import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const TambahPendaftaran = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const navigate = useNavigate();

  const tambahPendaftaran = async (data) => {
    try {
      const res = await axios.post('https://sidede-api.vercel.app/pendaftaran', data);
      alert(res.data.message);
      navigate('/admin/pendaftaran');
    } catch (err) {
      console.error('Error saat menambah data : ', err.message);
      alert(err.response?.data.message);
    }
  };

  return (
    <div className='flex flex-col items-center gap-5 p-10'>
      <h2>Tambah Data Pendaftaran</h2>

      <form onSubmit={handleSubmit(tambahPendaftaran)} className='flex flex-col items-center gap-2'>
        <span className='flex flex-col w-full'>
          <label htmlFor='nik'>NIK</label>
          <input
            id='nik'
            type='text'
            className='px-3 py-2 rounded-md'
            {...register('nik', {
              required: 'NIK wajib di isi',
              minLength: { value: 16, message: ' NIK harus 16 karakter' },
            })}
          />
          {errors.nik && <p className='text-brand'>{errors.nik.message}</p>}
        </span>

        <div className='flex w-full gap-6'>
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

        <div className='flex w-full gap-6'>
          <span className='w-full'>
            <label htmlFor='tipe'>Tipe</label>

            <select
              name='tipe'
              id='tipe'
              className='w-full px-3 py-2 rounded-md'
              {...register('tipe', { required: 'wajib di isi' })}
            >
              <option value='' hidden>
                Tipe Donor
              </option>
              <option value='S'>Sukarela</option>
              <option value='K'>Keluarga</option>
            </select>
          </span>
        </div>

        <div className='flex flex-col w-full'>
          <p>Penghargaan yang telah di terima</p>

          <div className='flex gap-6'>
            <label htmlFor='10'>
              <input
                type='radio'
                value={'10'}
                name='penghargaan'
                id='10'
                {...register('penghargaan')}
              />
              &nbsp;10X
            </label>

            <label htmlFor='25'>
              <input
                type='radio'
                value={'25'}
                name='penghargaan'
                id='25'
                {...register('penghargaan')}
              />
              &nbsp;25X
            </label>

            <label htmlFor='50'>
              <input
                type='radio'
                value={'50'}
                name='penghargaan'
                id='50'
                {...register('penghargaan')}
              />
              &nbsp;50X
            </label>

            <label htmlFor='75'>
              <input
                type='radio'
                value={'75'}
                name='penghargaan'
                id='75'
                {...register('penghargaan')}
              />
              &nbsp;75X
            </label>

            <label htmlFor='100'>
              <input
                type='radio'
                value={'100'}
                name='penghargaan'
                id='100'
                {...register('penghargaan')}
              />
              &nbsp;100X
            </label>
          </div>
          {errors.penghargaan && <p className='text-brand'>{errors.penghargaan.message}</p>}
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor='donor_puasa'>
            <input
              type='checkbox'
              name='donor_puasa'
              id='donor_puasa'
              {...register('donor_puasa')}
            />
            &nbsp;Bersediakah donor saat bulan puasa?
          </label>
          {errors.donor_puasa && <p className='text-brand'>{errors.donor_puasa.message}</p>}
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor='donor_sukarela'>
            <input
              type='checkbox'
              name='donor_sukarela'
              id='donor_sukarela'
              {...register('donor_sukarela')}
            />
            &nbsp;Bersediakah donor saat dibutuhkan? (diluar donor rutin)
          </label>
          {errors.donor_sukarela && <p className='text-brand'>{errors.donor_sukarela.message}</p>}
        </div>

        <input
          type='submit'
          className='px-3 py-2 mt-4 rounded cursor-pointer bg-dark text-light w-fit'
        />
      </form>
    </div>
  );
};

export default TambahPendaftaran;
