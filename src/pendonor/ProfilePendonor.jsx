import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

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

  const user = JSON.parse(localStorage.getItem('user'));

  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const resAkses = await axios.get(`https://sidede-api.vercel.app/hakakses/${user?.id_akses}`);
      const resPendonor = await axios.get(
        `https://sidede-api.vercel.app/pendonor?id_akses=${user?.id_akses}`
      );

      const pendonor = resPendonor.data.result[0];
      const akses = resAkses.data.result[0];

      // console.log(pendonor);

      const result = { ...pendonor, ...akses };

      setData(result);
    } catch (err) {
      console.log('Error saat mengambil data : ', err.message);
      alert(err.response?.data.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const nik = data?.nik;

  const ubahProfile = async (data) => {
    try {
      data.foto = data.foto && data.foto[0]?.name;

      const result = await axios.patch(`https://sidede-api.vercel.app/pendonor/${nik}`, data);

      alert(result.data.message);
      setIsDisabled(true);
      window.location.reload();
    } catch (err) {
      console.log('Error saat mengubah data : ', err.message);
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

  const formatDate = (date) => {
    if (!date) return;
    const formattedDate = dayjs(date).add(8, 'hour').format('YYYY-MM-DD');
    return formattedDate;
  };

  const deleteData = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete('https://sidede-api.vercel.app/hakakses');
      alert(res.data.result);
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  return (
    <div className='p-10'>
      <form onSubmit={handleSubmit(ubahProfile)} className='flex flex-col items-center gap-2'>
        <div className='relative flex flex-col items-center justify-center'>
          <img className='w-48' src='/profile/man.png' alt='Profile' />

          <span className='absolute p-2 rounded-full shadow-md bottom-2 right-3 bg-dark'>
            <input
              disabled={isDisabled}
              id='foto'
              type='file'
              className='hidden file:px-3 file:py-2 file:rounded-md file:cursor-pointer file:border file:border-dark'
              {...register('foto')}
            />

            <label htmlFor='foto' className='cursor-pointer select-none text-light'>
              <FontAwesomeIcon icon={'fas fa-pencil'} size='xl' />
            </label>
          </span>
        </div>

        <h2 className='my-5 text-center'>Hak Akses</h2>

        <div className='flex flex-col w-full gap-2 md:flex-row md:gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='username'>Username</label>
            <input
              disabled={isDisabled}
              placeholder={data?.username}
              id='username'
              type='text'
              className='px-3 py-2 border rounded-md'
              {...register('username')}
            />
            {errors.username && <p className='text-brand'>{errors.username.message}</p>}
          </span>

          <div className='flex flex-col w-full'>
            <label htmlFor='password'>Password</label>

            <div className='relative flex items-center w-full'>
              <input
                disabled={isDisabled}
                placeholder={'********'}
                id='password'
                type={`${isPass ? 'password' : 'text'}`}
                className='w-full px-3 py-2 border rounded-md'
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
        </div>

        <h2 className='my-5 text-center'>Data Diri</h2>

        <div className='flex flex-col w-full gap-2 md:flex-row md:gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='nik'>NIK</label>
            <input
              disabled={isDisabled}
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
              disabled={isDisabled}
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
            disabled={isDisabled}
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

          <input
            disabled
            placeholder={data?.jenis_kelamin == 'L' ? 'Laki-laki' : 'Perempuan'}
            type='text'
            className={isDisabled ? 'px-3 py-2 rounded-md' : 'hidden'}
            {...register('nama')}
          />

          <div className={isDisabled ? 'hidden' : 'flex gap-6'}>
            <label htmlFor='idlaki'>
              <input
                type='radio'
                value='l'
                id='idlaki'
                disabled={isDisabled}
                {...register('jenis_kelamin')}
              />
              &nbsp;Laki
            </label>

            <label htmlFor='idperempuan'>
              <input
                type='radio'
                value='p'
                id='idperempuan'
                disabled={isDisabled}
                {...register('jenis_kelamin')}
              />
              &nbsp;Perempuan
            </label>
          </div>

          {errors.jenis_kelamin && <p className='text-brand'>{errors.jenis_kelamin.message}</p>}
        </div>

        <div className='flex flex-col w-full gap-2 md:flex-row md:gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='tempat_lahir'>Tempat Lahir</label>
            <input
              disabled={isDisabled}
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
              disabled={isDisabled}
              id='tgl_lahir'
              placeholder={formatDate(data?.tgl_lahir)}
              type={isDisabled ? 'text' : 'date'}
              className={'px-3 py-2 rounded-md w-full bg-white disabled:bg-light'}
              {...register('tgl_lahir')}
            />
            {errors.tgl_lahir && <p className='text-brand'>{errors.tgl_lahir.message}</p>}
          </span>
        </div>

        <span className='w-full'>
          <label htmlFor='pekerjaan'>Pekerjaan</label>
          <select
            disabled={isDisabled}
            name='pekerjaan'
            id='pekerjaan'
            className='w-full px-3 py-2 bg-white rounded-md disabled:bg-light'
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

        <div className='flex flex-col w-full gap-2 lg:flex-row md:gap-6'>
          <span className='flex flex-col w-full'>
            <label htmlFor='kecamatan'>Kecamatan</label>
            <input
              disabled={isDisabled}
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
              disabled={isDisabled}
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
              disabled={isDisabled}
              id='kota'
              placeholder={data?.kota}
              type='text'
              className='px-3 py-2 rounded-md'
              {...register('kota')}
            />
            {errors.kota && <p className='text-brand'>{errors.kota.message}</p>}
          </span>
        </div>

        <div className='flex flex-col w-full gap-2 md:flex-row md:gap-6'>
          <div className='w-full space-y-2'>
            <span className='flex flex-col w-full'>
              <label htmlFor='alamat'>Alamat</label>
              <textarea
                disabled={isDisabled}
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
                disabled={isDisabled}
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
                disabled={isDisabled}
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
                disabled={isDisabled}
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
          className={`px-3 py-2 rounded border border-dark w-fit cursor-pointer mt-5 ${
            isDisabled && 'hidden'
          }`}
        />

        <div className={`flex gap-2 mt-5 ${!isDisabled && 'hidden'}`}>
          <Button className={'bg-brand text-light'} onclick={() => deleteData(data.id_akses)}>
            Hapus
          </Button>
          <Button onclick={handleEnable} className={'border border-dark'}>
            Ubah
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePendonor;
