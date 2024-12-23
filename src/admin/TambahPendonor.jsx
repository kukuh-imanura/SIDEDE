import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const TambahPendonor = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const navigate = useNavigate();

  const password = watch('password');
  const [isPass, setIsPass] = useState(true);

  const showPassword = () => {
    setIsPass(!isPass);
  };

  const tambahPendonor = async ({
    foto,
    username,
    password,
    nik,
    no_kartu,
    nama,
    jenis_kelamin,
    tempat_lahir,
    tgl_lahir,
    pekerjaan,
    kecamatan,
    kelurahan,
    kota,
    alamat,
    telp_rumah,
    alamat_kantor,
    email,
  }) => {
    try {
      const foto_name = foto[0]?.name;

      const result = await axios.post('https://sidede-api.vercel.app/pendonor', {
        foto_name,
        username,
        password,
        nik,
        no_kartu,
        nama,
        jenis_kelamin,
        tempat_lahir,
        tgl_lahir,
        pekerjaan,
        kecamatan,
        kelurahan,
        kota,
        alamat,
        telp_rumah,
        alamat_kantor,
        email,
      });

      alert(result.data.message);
      navigate('/admin/pendonor');
    } catch (err) {
      console.log('Error saat menambah data : ', err.message);
      alert(err.response?.data.message);
    }
  };

  return (
    <div className='p-10 flex flex-col gap-5 items-center'>
      <h2>Tambah Data Pendonor</h2>

      <form onSubmit={handleSubmit(tambahPendonor)} className='flex flex-col gap-2 items-center'>
        <div className='flex w-full gap-6'>
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

        <div className='flex w-full gap-6'>
          <div className='flex flex-col w-full'>
            <label htmlFor='password'>Password</label>

            <div className='w-full flex items-center relative'>
              <input
                id='password'
                type={`${isPass ? 'password' : 'text'}`}
                className='px-3 py-2 rounded-md w-full'
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

          <span className='flex flex-col w-full'>
            <label htmlFor='konfPass'>Konfirmasi Password</label>
            <input
              id='konfPass'
              type={`${isPass ? 'password' : 'text'}`}
              className='px-3 py-2 rounded-md'
              {...register('konfPass', {
                validate: (value) => value === password || 'Passwords tidak sama',
              })}
            />
            {errors.konfPass && <p className='text-brand'>{errors.konfPass.message}</p>}
          </span>
        </div>

        <div className='flex w-full gap-6'>
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
            <label htmlFor='no_kartu'>Nomor Kartu Donor</label>
            <input
              id='no_kartu'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('no_kartu', {
                required: 'wajib di isi',
              })}
            />
            {errors.no_kartu && <p className='text-brand'>{errors.no_kartu.message}</p>}
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

          <div className='flex gap-6'>
            <label htmlFor='idlaki'>
              <input
                type='radio'
                value='l'
                id='idlaki'
                {...register('jenis_kelamin', { required: 'wajib di isi' })}
              />
              &nbsp;Laki
            </label>

            <label htmlFor='idperempuan'>
              <input
                type='radio'
                value='p'
                id='idperempuan'
                {...register('jenis_kelamin', { required: 'wajib di isi' })}
              />
              &nbsp;Perempuan
            </label>
          </div>

          {errors.jenis_kelamin && <p className='text-brand'>{errors.jenis_kelamin.message}</p>}
        </div>

        <div className='flex w-full gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='tempat_lahir'>Tempat Lahir</label>
            <input
              id='tempat_lahir'
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('tempat_lahir', {
                required: 'wajib di isi',
              })}
            />
            {errors.tempat_lahir && <p className='text-brand'>{errors.tempat_lahir.message}</p>}
          </span>
          <span className='flex flex-col w-full'>
            <label htmlFor='tgl_lahir'>Tanggal Lahir</label>
            <input
              id='tgl_lahir'
              type='date'
              className='px-3 py-2 rounded-md'
              {...register('tgl_lahir', {
                required: 'wajib di isi',
              })}
            />
            {errors.tgl_lahir && <p className='text-brand'>{errors.tgl_lahir.message}</p>}
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

        <div className='lg:flex w-full gap-6'>
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

        <div className='flex w-full gap-6'>
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
              <label htmlFor='telp_rumah'>Telpon Rumah</label>
              <input
                id='telp_rumah'
                type='text'
                className='px-3 py-2 rounded-md'
                {...register('telp_rumah', {
                  required: 'wajib di isi',
                })}
              />
              {errors.telp_rumah && <p className='text-brand'>{errors.telp_rumah.message}</p>}
            </span>
          </div>

          <div className='w-full space-y-2'>
            <span className='flex flex-col w-full'>
              <label htmlFor='alamat_kantor'>Alamat Kantor</label>
              <textarea
                id='alamat_kantor'
                type='text'
                className='px-3 py-2 rounded-md'
                {...register('alamat_kantor', {
                  required: 'wajib di isi',
                })}
              />
              {errors.alamat_kantor && <p className='text-brand'>{errors.alamat_kantor.message}</p>}
            </span>

            <span className='flex flex-col w-full'>
              <label htmlFor='email'>Email/Telpon Kantor</label>
              <input
                id='email'
                type='text'
                className='px-3 py-2 rounded-md'
                {...register('email', {
                  required: 'wajib di isi',
                })}
              />
              {errors.email && <p className='text-brand'>{errors.email.message}</p>}
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

export default TambahPendonor;
