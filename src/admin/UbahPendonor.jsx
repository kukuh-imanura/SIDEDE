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

      const result = await axios.patch(`/api/pendonor/${nik}`, data);

      alert(result.data.message);
      navigate('/admin/pendonor');
    } catch (err) {
      console.log('Error saat mengubah data : ', err.message);
      alert(err.response?.data.message);
    }
  };

  const getData = async () => {
    try {
      const pendonor = await axios.get(`http://localhost:3000/pendonor/${nik}`);
      const data = pendonor.data.result[0];
      setData(data);

      const akses = await axios.get(`http://localhost:3000/hakakses/${data.id_akses}`);
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
    <div className='p-10 flex flex-col gap-5 items-center'>
      <h2>Ubah Data Pendonor</h2>

      <form onSubmit={handleSubmit(ubahPendonor)} className='flex flex-col gap-2 items-center'>
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

            <div className='w-full flex items-center relative'>
              <input
                id='password'
                type={`${isPass ? 'password' : 'text'}`}
                className='px-3 py-2 rounded-md w-full'
                {...register('password', {
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
            <label htmlFor='nkd'>Nomor Kartu Donor</label>
            <input
              id='nkd'
              placeholder={data?.no_kartu}
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('nkd')}
            />
            {errors.nkd && <p className='text-brand'>{errors.nkd.message}</p>}
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
              <input type='radio' value='l' id='idlaki' {...register('jk')} />
              &nbsp;Laki
            </label>

            <label htmlFor='idperempuan'>
              <input type='radio' value='p' id='idperempuan' {...register('jk')} />
              &nbsp;Perempuan
            </label>
          </div>

          {errors.jk && <p className='text-brand'>{errors.jk.message}</p>}
        </div>

        <div className='flex w-full gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='tempatLhr'>Tempat Lahir</label>
            <input
              id='tempatLhr'
              placeholder={data?.tempat_lahir}
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('tempatLhr')}
            />
            {errors.tempatLhr && <p className='text-brand'>{errors.tempatLhr.message}</p>}
          </span>

          <span className='flex flex-col w-full'>
            <label htmlFor='tglLhr'>Tanggal Lahir</label>
            <input
              id='tglLhr'
              type='date'
              className='px-3 py-2 rounded-md'
              {...register('tglLhr')}
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

        <div className='lg:flex w-full gap-6'>
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
              <label htmlFor='telpRmh'>Telpon Rumah</label>
              <input
                id='telpRmh'
                placeholder={data?.telp_rumah}
                type='text'
                className='px-3 py-2 rounded-md'
                {...register('telpRmh')}
              />
              {errors.telpRmh && <p className='text-brand'>{errors.telpRmh.message}</p>}
            </span>
          </div>

          <div className='w-full space-y-2'>
            <span className='flex flex-col w-full'>
              <label htmlFor='almKantor'>Alamat Kantor</label>
              <textarea
                id='almKantor'
                placeholder={data?.alamat_kantor}
                type='text'
                className='px-3 py-2 rounded-md'
                {...register('almKantor')}
              />
              {errors.almKantor && <p className='text-brand'>{errors.almKantor.message}</p>}
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
          className='px-3 py-2 mt-4 rounded bg-dark text-light w-fit cursor-pointer'
        />
      </form>
    </div>
  );
};

export default UbahPendonor;
