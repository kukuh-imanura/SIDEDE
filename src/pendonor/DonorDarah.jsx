import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import dayjs from 'dayjs';

const DonorDarah = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  const [isDisabled, setIsDisabled] = useState(true);

  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

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

  const daftarDonor = async (data) => {
    try {
      const { lokasi, tipe, penghargaan, donor_puasa, donor_sukarela, ...pendonor } = data;
      const pendaftaran = { nik, lokasi, tipe, penghargaan, donor_puasa, donor_sukarela };

      if (
        Object.values(pendonor).every(
          (value) => value !== undefined && value !== null && value !== ''
        )
      ) {
        pendonor.foto = pendonor.foto && pendonor.foto[0]?.name;
        const resultPendonor = await axios.patch(
          `https://sidede-api.vercel.app/pendonor/${nik}`,
          pendonor
        );
        alert(resultPendonor.data.message);
      }

      const resultPendaftaran = await axios.post(
        `https://sidede-api.vercel.app/pendaftaran`,
        pendaftaran
      );
      alert(resultPendaftaran.data.message);

      const id_pendaftaran = resultPendaftaran.data.result.insertId;

      navigate('/pendonor/screening', { state: { id_pendaftaran } });
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

  return (
    <div className='flex flex-col gap-10 p-10'>
      <hgroup>
        <h2 className='text-center'>Pendaftaran Donor Darah</h2>
        <h2 className='text-center'>(Data Diri)</h2>
      </hgroup>

      <form onSubmit={handleSubmit(daftarDonor)} className='flex flex-col items-center gap-2'>
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

        <h2 className='my-10 text-center'>(Detail Pendaftaran)</h2>

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

        <div className={`flex gap-2 mt-5 w-full h-fit justify-center items-center`}>
          <Button onclick={toggleDisabled} className={'border border-dark h-fit'}>
            Ubah data diri
          </Button>

          <input
            type='submit'
            value={'Next'}
            className='px-3 py-2 rounded cursor-pointer bg-dark text-light'
          />
        </div>
      </form>
    </div>
  );
};

export default DonorDarah;
