import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const ProfilePendonor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const [isPass, setIsPass] = useState(true);

  const [isDisabled, setIsDisabled] = useState(true);

  const handleEnable = () => {
    setIsDisabled(false);
  };

  const showPassword = () => {
    setIsPass(!isPass);
  };

  const ubahProfile = (data) => {
    console.log(data);
    setIsDisabled(true);
  };
  return (
    <div className='p-10'>
      <form onSubmit={handleSubmit(ubahProfile)} className='flex flex-col gap-2 items-center'>
        <div className='flex flex-col items-center justify-center relative'>
          <img className='w-48' src='/profile/man.png' alt='Profile' />

          <span className='absolute bottom-2 right-3 bg-dark rounded-full p-2 shadow-md'>
            <input
              disabled={isDisabled}
              id='foto'
              type='file'
              className='file:px-3 file:py-2 file:rounded-md file:cursor-pointer file:border file:border-dark hidden'
              {...register('foto')}
            />

            <label htmlFor='foto' className='select-none cursor-pointer text-light'>
              <FontAwesomeIcon icon={'fas fa-pencil'} size='xl' />
            </label>
          </span>
        </div>

        <h2 className='my-5 text-center'>Hak Akses</h2>

        <div className='flex flex-col md:flex-row w-full gap-2 md:gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='username'>Username</label>
            <input
              disabled={isDisabled}
              id='username'
              type='text'
              className='px-3 py-2 rounded-md border'
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
                disabled={isDisabled}
                id='password'
                type={`${isPass ? 'password' : 'text'}`}
                className='px-3 py-2 rounded-md w-full border'
                {...register('password', {
                  required: 'password wajib di isi',
                  minLength: { value: 8, message: ' minimal 8 karakter' },
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
        </div>

        <h2 className='my-5 text-center'>Data Diri</h2>

        <div className='flex flex-col md:flex-row w-full gap-2 md:gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='nik'>NIK</label>
            <input
              disabled={isDisabled}
              id='nik'
              type='text'
              className='px-3 py-2 rounded-md border'
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
              disabled={isDisabled}
              id='nkd'
              type='text'
              className='px-3 py-2 rounded-md border'
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
            disabled={isDisabled}
            id='nama'
            type='text'
            className='px-3 py-2 rounded-md border'
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
                disabled={isDisabled}
                type='radio'
                value='l'
                id='idlaki'
                {...register('jk', { required: 'jk wajib di isi' })}
              />
              &nbsp;Laki
            </label>

            <label htmlFor='idperempuan'>
              <input
                disabled={isDisabled}
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
              disabled={isDisabled}
              id='tempatLhr'
              type='text'
              className='px-3 py-2 rounded-md border'
              {...register('tempatLhr', {
                required: 'wajib di isi',
              })}
            />
            {errors.tempatLhr && <p className='text-brand'>{errors.tempatLhr.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='tglLhr'>Tanggal Lahir</label>
            <input
              disabled={isDisabled}
              id='tglLhr'
              type='date'
              className='px-3 py-2 rounded-md w-full bg-white disabled:bg-light border'
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
            disabled={isDisabled}
            name='pekerjaan'
            id='pekerjaan'
            className='px-3 py-2 rounded-md w-full bg-white disabled:bg-light border'
            {...register('pekerjaan', { required: 'pekerjaan wajib di isi' })}
          >
            <option value='' hidden>
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

        <div className='flex flex-col lg:flex-row w-full gap-2 md:gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='kecamatan'>Kecamatan</label>
            <input
              disabled={isDisabled}
              id='kecamatan'
              type='text'
              className='px-3 py-2 rounded-md border'
              {...register('kecamatan', {
                required: 'kecamatan wajib di isi',
              })}
            />
            {errors.kecamatan && <p className='text-brand'>{errors.kecamatan.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='kelurahan'>Kelurahan</label>
            <input
              disabled={isDisabled}
              id='kelurahan'
              type='text'
              className='px-3 py-2 rounded-md border'
              {...register('kelurahan', {
                required: 'kelurahan wajib di isi',
              })}
            />
            {errors.kelurahan && <p className='text-brand'>{errors.kelurahan.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='kota'>Kota</label>
            <input
              disabled={isDisabled}
              id='kota'
              type='text'
              className='px-3 py-2 rounded-md border'
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
                disabled={isDisabled}
                id='alamat'
                type='text'
                className='px-3 py-2 rounded-md border'
                {...register('alamat', {
                  required: 'alamat wajib di isi',
                })}
              />
              {errors.alamat && <p className='text-brand'>{errors.alamat.message}</p>}
            </span>

            <span className='flex flex-col w-full'>
              <label htmlFor='telpRmh'>Telpon Rumah</label>
              <input
                disabled={isDisabled}
                id='telpRmh'
                type='text'
                className='px-3 py-2 rounded-md border'
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
                disabled={isDisabled}
                id='almKantor'
                type='text'
                className='px-3 py-2 rounded-md border'
                {...register('almKantor', {
                  required: 'wajib di isi',
                })}
              />
              {errors.almKantor && <p className='text-brand'>{errors.almKantor.message}</p>}
            </span>

            <span className='flex flex-col w-full'>
              <label htmlFor='telpKntr'>Telpon Kantor</label>
              <input
                disabled={isDisabled}
                id='telpKntr'
                type='text'
                className='px-3 py-2 rounded-md border'
                {...register('telpKntr', {
                  required: 'wajib di isi',
                })}
              />
              {errors.telpKntr && <p className='text-brand'>{errors.telpKntr.message}</p>}
            </span>
          </div>
        </div>

        <div className={`flex gap-2 mt-5 ${!isDisabled && 'hidden'}`}>
          <Button className={'bg-brand text-light'}>Hapus</Button>
          <Button onclick={handleEnable} className={'border border-dark'}>
            Ubah
          </Button>
        </div>

        <input
          type='submit'
          className={`px-3 py-2 rounded border border-dark w-fit cursor-pointer mt-5 ${
            isDisabled && 'hidden'
          }`}
        />
      </form>
    </div>
  );
};

export default ProfilePendonor;
