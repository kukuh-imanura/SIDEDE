import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

const UbahPendonor = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const password = watch('password');
  const [isPass, setIsPass] = useState(true);

  const showPassword = () => {
    setIsPass(!isPass);
  };

  const navigate = useNavigate();

  const location = useLocation();
  const { nik } = location.state || {};

  const [data, setData] = useState({});

  const ubahPendonor = async (data) => {
    try {
      data.foto = data.foto[0]?.name;

      const result = await axios.patch(`https://sidede-api.vercel.app/pendonor/${nik}`, data);

      alert(result.data.message);
      navigate('/admin/pendonor');
    } catch (err) {
      console.log('Error saat mengubah data : ', err.message);
      alert(err.response?.data.message);
    }
  };

  const getData = async () => {
    try {
      const pendonor = await axios.get(`https://sidede-api.vercel.app/pendonor/${nik}`);
      const data = pendonor.data.result[0];
      setData(data);

      const akses = await axios.get(`https://sidede-api.vercel.app/hakakses/${data.id_akses}`);
      setData((prev) => ({
        ...prev,
        ...akses.data.result[0],
      }));
    } catch (err) {
      console.log('Error saat menambah data : ', err.message);
      alert(err.response?.data.message);
    }
  };

  const setPekerjaan = (pekerjaan) => {
    switch (pekerjaan) {
      case 'TP':
        return 'TNI/ Polri';

      case 'PN':
        return 'Pegawai Negeri/ Swasta';

      case 'PT':
        return 'Petani/ Buruh';

      case 'WS':
        return 'Wiraswasta';

      case 'MH':
        return 'Mahasiswa';

      case 'PG':
        return 'Pedagang';

      default:
        return 'Lain-Lain';
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='flex flex-col items-center gap-5 p-10'>
      <h2>Ubah Data Pendonor</h2>

      <form onSubmit={handleSubmit(ubahPendonor)} className='flex flex-col items-center gap-2'>
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
              placeholder={data?.username}
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('username')}
            />
            {errors.username && <p className='text-brand'>{errors.username.message}</p>}
          </span>
        </div>

        <div className='flex w-full gap-6'>
          <div className='flex flex-col w-full'>
            <label htmlFor='password'>Password</label>

            <div className='relative flex items-center w-full'>
              <input
                id='password'
                type={`${isPass ? 'password' : 'text'}`}
                className='w-full px-3 py-2 rounded-md'
                {...register('password', {
                  minLength: { value: 8, message: ' minimal 8 karakter' },
                })}
              />
              <span
                onClick={showPassword}
                className='absolute right-0 flex items-center justify-center w-10 h-10 p-2 rounded-md cursor-pointer'
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
              placeholder={data?.nik}
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('nik', {
                minLength: { value: 16, message: 'NIK harus 16 karakter' },
              })}
            />
            {errors.nik && <p className='text-brand'>{errors.nik.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='no_kartu'>Nomor Kartu Donor</label>
            <input
              id='no_kartu'
              placeholder={data?.no_kartu}
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('no_kartu')}
            />
            {errors.no_kartu && <p className='text-brand'>{errors.no_kartu.message}</p>}
          </span>
        </div>

        <span className='flex flex-col w-full'>
          <label htmlFor='nama'>Nama</label>
          <input
            id='nama'
            placeholder={data?.nama}
            type='text'
            className='px-3 py-2 rounded-md'
            {...register('nama')}
          />
          {errors.nama && <p className='text-brand'>{errors.nama.message}</p>}
        </span>

        <div className='flex flex-col w-full'>
          <p>Jenis Kelamin</p>

          <div className='flex gap-6'>
            <label htmlFor='idlaki'>
              <input type='radio' value='L' id='idlaki' {...register('jenis_kelamin')} />
              &nbsp;Laki
            </label>

            <label htmlFor='idperempuan'>
              <input type='radio' value='P' id='idperempuan' {...register('jenis_kelamin')} />
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
              placeholder={data?.tempat_lahir}
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('tempat_lahir')}
            />
            {errors.tempat_lahir && <p className='text-brand'>{errors.tempat_lahir.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='tgl_lahir'>Tanggal Lahir</label>
            <input
              id='tgl_lahir'
              type='date'
              className='px-3 py-2 rounded-md'
              {...register('tgl_lahir')}
            />
            {errors.tgl_lahir && <p className='text-brand'>{errors.tgl_lahir.message}</p>}
          </span>
        </div>

        <span className='w-full'>
          <label htmlFor='pekerjaan'>Pekerjaan</label>
          <select
            name='pekerjaan'
            id='pekerjaan'
            className='w-full px-3 py-2 rounded-md'
            {...register('pekerjaan')}
          >
            <option value='' hidden>
              {setPekerjaan(data?.pekerjaan)}
            </option>
            <option value='TP'>TNI/ Polri</option>
            <option value='PN'>Pegawai Negeri/ Swasta</option>
            <option value='PT'>Petani/ Buruh</option>
            <option value='WS'>Wiraswasta</option>
            <option value='MH'>Mahasiswa</option>
            <option value='PG'>Pedagang</option>
            <option value='LL'>Lainnya</option>
          </select>
        </span>

        <div className='w-full gap-6 lg:flex'>
          <span className='flex flex-col w-full'>
            <label htmlFor='kecamatan'>Kecamatan</label>
            <input
              id='kecamatan'
              placeholder={data?.kecamatan}
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('kecamatan')}
            />
            {errors.kecamatan && <p className='text-brand'>{errors.kecamatan.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='kelurahan'>Kelurahan</label>
            <input
              id='kelurahan'
              placeholder={data?.kelurahan}
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('kelurahan')}
            />
            {errors.kelurahan && <p className='text-brand'>{errors.kelurahan.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='kota'>Kota</label>
            <input
              id='kota'
              placeholder={data?.kota}
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('kota')}
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
                placeholder={data?.alamat}
                type='text'
                className='px-3 py-2 rounded-md'
                {...register('alamat')}
              />
              {errors.alamat && <p className='text-brand'>{errors.alamat.message}</p>}
            </span>

            <span className='flex flex-col w-full'>
              <label htmlFor='telp_rumah'>Telpon Rumah</label>
              <input
                id='telp_rumah'
                placeholder={data?.telp_rumah}
                type='text'
                className='px-3 py-2 rounded-md'
                {...register('telp_rumah')}
              />
              {errors.telp_rumah && <p className='text-brand'>{errors.telp_rumah.message}</p>}
            </span>
          </div>

          <div className='w-full space-y-2'>
            <span className='flex flex-col w-full'>
              <label htmlFor='alamat_kantor'>Alamat Kantor</label>
              <textarea
                id='alamat_kantor'
                placeholder={data?.alamat_kantor}
                type='text'
                className='px-3 py-2 rounded-md'
                {...register('alamat_kantor')}
              />
              {errors.alamat_kantor && <p className='text-brand'>{errors.alamat_kantor.message}</p>}
            </span>

            <span className='flex flex-col w-full'>
              <label htmlFor='email'>Email/Telpon Kantor</label>
              <input
                id='email'
                placeholder={data?.email}
                type='text'
                className='px-3 py-2 rounded-md'
                {...register('email')}
              />
              {errors.email && <p className='text-brand'>{errors.email.message}</p>}
            </span>
          </div>
        </div>

        <input
          type='submit'
          className='px-3 py-2 mt-4 rounded cursor-pointer bg-dark text-light w-fit'
        />
      </form>
    </div>
  );
};

export default UbahPendonor;
