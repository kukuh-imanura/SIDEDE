import { useForm } from 'react-hook-form';
import Button from './components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Daftar = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const password = watch('password');

  const submitDaftar = (data) => {
    console.log(data);
  };

  return (
    <div className='flex flex-col items-center gap-10 py-20 bg-dark/50 h-screen overflow-y-scroll'>
      <h1 className='text-light'>Daftar</h1>

      <form
        onSubmit={handleSubmit(submitDaftar)}
        className='bg-light rounded-xl w-4/5 p-10 pt-16 flex flex-col items-center gap-2 relative'
      >
        <Button className={'self-end absolute top-6'}>
          <FontAwesomeIcon icon='fas fa-xmark' size='xl' />
        </Button>

        <h2 className='pb-2 pt-4'>Hak Akses</h2>

        <div className='flex flex-col md:flex-row w-full gap-2 md:gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='foto'>Foto</label>
            <input
              id='foto'
              type='file'
              className='file:px-3 file:py-2 file:rounded-md file:cursor-pointer file:border'
              {...register('foto')}
            />

            {errors.foto && <p className='text-brand'>{errors.foto.message}</p>}
          </span>

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
        </div>

        <div className='flex flex-col md:flex-row w-full gap-2 md:gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('password', {
                required: 'password wajib di isi',
                minLength: { value: 8, message: 'password minimal 8 karakter' },
              })}
            />
            {errors.password && <p className='text-brand'>{errors.password.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='konfPass'>Konfirmasi Password</label>
            <input
              id='konfPass'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('konfPass', {
                validate: (value) => value === password || 'Passwords tidak sama',
              })}
            />
            {errors.konfPass && <p className='text-brand'>{errors.konfPass.message}</p>}
          </span>
        </div>

        <h2 className='pb-2 pt-4'>Data Diri</h2>

        <div className='flex flex-col md:flex-row w-full gap-2 md:gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='nik'>NIK</label>
            <input
              id='nik'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('nik', {
                required: 'NIK wajib di isi',
                minLength: { value: 16, message: 'NIK harus 16 karakter' },
              })}
            />
            {errors.nik && <p className='text-brand'>{errors.nik.message}</p>}
          </span>
          <span className='flex flex-col w-full'>
            <label htmlFor='nkd'>Nomor Kartu Donor</label>
            <input
              id='nkd'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('nkd', {
                required: 'wajib di isi',
              })}
            />
            {errors.nkd && <p className='text-brand'>{errors.nkd.message}</p>}
          </span>
        </div>

        <span className='flex flex-col w-full'>
          <label htmlFor='nama'>Nama</label>
          <input
            id='nama'
            type='text'
            className='px-3 py-2 rounded-md'
            {...register('nama', {
              required: 'nama wajib di isi',
            })}
          />
          {errors.nama && <p className='text-brand'>{errors.nama.message}</p>}
        </span>

        <div className='flex flex-col w-full'>
          <p>Jenis Kelamin</p>

          <div className='flex gap-2 md:gap-6'>
            <label htmlFor='idlaki'>
              <input
                type='radio'
                value='l'
                id='idlaki'
                {...register('jk', { required: 'jk wajib di isi' })}
              />
              &nbsp;Laki
            </label>

            <label htmlFor='idperempuan'>
              <input
                type='radio'
                value='p'
                id='idperempuan'
                {...register('jk', { required: 'jk wajib di isi' })}
              />
              &nbsp;Perempuan
            </label>
          </div>

          {errors.jk && <p className='text-brand'>{errors.jk.message}</p>}
        </div>

        <div className='flex flex-col md:flex-row w-full gap-2 md:gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='tempatLhr'>Tempat Lahir</label>
            <input
              id='tempatLhr'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('tempatLhr', {
                required: 'wajib di isi',
              })}
            />
            {errors.tempatLhr && <p className='text-brand'>{errors.tempatLhr.message}</p>}
          </span>
          <span className='flex flex-col w-full'>
            <label htmlFor='tglLhr'>Tanggal Lahir</label>
            <input
              id='tglLhr'
              type='date'
              className='px-3 py-2 rounded-md'
              {...register('tglLhr', {
                required: 'wajib di isi',
              })}
            />
            {errors.tglLhr && <p className='text-brand'>{errors.tglLhr.message}</p>}
          </span>
        </div>

        <span className='w-full'>
          <label htmlFor='pekerjaan'>Pekerjaan</label>
          <select
            name='pekerjaan'
            id='pekerjaan'
            className='px-3 py-2 rounded-md w-full'
            {...register('pekerjaan', { required: 'pekerjaan wajib di isi' })}
          >
            <option value='' disabled hidden>
              Pekerjaan
            </option>
            <option value='TP'>TNI / Polri</option>
            <option value='PN'>Pegawai Negri</option>
            <option value='PT'>Petani</option>
            <option value='WS'>Wiraswasta</option>
            <option value='MH'>Mahasiswa</option>
            <option value='PG'>Pedagang</option>
            <option value='LL'>Lainnya</option>
          </select>
        </span>

        <div className='lg:flex w-full gap-2 md:gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='kecamatan'>Kecamatan</label>
            <input
              id='kecamatan'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('kecamatan', {
                required: 'kecamatan wajib di isi',
              })}
            />
            {errors.kecamatan && <p className='text-brand'>{errors.kecamatan.message}</p>}
          </span>
          <span className='flex flex-col w-full'>
            <label htmlFor='kelurahan'>Kelurahan</label>
            <input
              id='kelurahan'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('kelurahan', {
                required: 'kelurahan wajib di isi',
              })}
            />
            {errors.kelurahan && <p className='text-brand'>{errors.kelurahan.message}</p>}
          </span>
          <span className='flex flex-col w-full'>
            <label htmlFor='kota'>Kota</label>
            <input
              id='kota'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('kota', {
                required: 'kota wajib di isi',
              })}
            />
            {errors.kota && <p className='text-brand'>{errors.kota.message}</p>}
          </span>
        </div>

        <div className='flex flex-col md:flex-row w-full gap-2 md:gap-6'>
          <div className='w-full space-y-2'>
            <span className='flex flex-col w-full'>
              <label htmlFor='alamat'>Alamat</label>
              <textarea
                id='alamat'
                type='text'
                className='px-3 py-2 rounded-md'
                {...register('alamat', {
                  required: 'alamat wajib di isi',
                })}
              />
              {errors.alamat && <p className='text-brand'>{errors.alamat.message}</p>}
            </span>

            <span className='flex flex-col w-full'>
              <label htmlFor='telpRmh'>Telpon Rumah</label>
              <input
                id='telpRmh'
                type='text'
                className='px-3 py-2 rounded-md'
                {...register('telpRmh', {
                  required: 'wajib di isi',
                })}
              />
              {errors.telpRmh && <p className='text-brand'>{errors.telpRmh.message}</p>}
            </span>
          </div>

          <div className='w-full space-y-2'>
            <span className='flex flex-col w-full'>
              <label htmlFor='almKantor'>Alamat Kantor</label>
              <textarea
                id='almKantor'
                type='text'
                className='px-3 py-2 rounded-md'
                {...register('almKantor', {
                  required: 'wajib di isi',
                })}
              />
              {errors.almKantor && <p className='text-brand'>{errors.almKantor.message}</p>}
            </span>

            <span className='flex flex-col w-full'>
              <label htmlFor='telpKntr'>Telpon Kantor</label>
              <input
                id='telpKntr'
                type='text'
                className='px-3 py-2 rounded-md'
                {...register('telpKntr', {
                  required: 'wajib di isi',
                })}
              />
              {errors.telpKntr && <p className='text-brand'>{errors.telpKntr.message}</p>}
            </span>
          </div>
        </div>

        <input
          type='submit'
          className='px-3 py-2 mt-4 rounded bg-dark text-light w-fit cursor-pointer'
        />
      </form>
    </div>
  );
};

export default Daftar;
