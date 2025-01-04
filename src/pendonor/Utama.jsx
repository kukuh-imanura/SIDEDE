import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const Utama = () => {
  const [mobileUnit, setMobileUnit] = useState([]);
  const [pendaftaran, setPendaftaran] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 7;

  const user = JSON.parse(localStorage.getItem('user'));
  const id_akses = user.id_akses;

  const getMobileUnit = async () => {
    try {
      const res = await axios.get(
        `https://sidede-api.vercel.app/mobileunit?limit=${limit}&filter=new`
      );
      setMobileUnit(res.data.result || []);
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  const getPendaftaran = async () => {
    try {
      const pendonorRes = await axios.get(
        `https://sidede-api.vercel.app/pendonor?id_akses=${id_akses}`
      );
      const nik = pendonorRes.data.result[0].nik;

      const res = await axios.get(
        `https://sidede-api.vercel.app/pendaftaran?limit=${limit}&page=${page}&nik=${nik}`
      );
      setPendaftaran(res.data.result || []);
      setPagination(res.data.pagination || {});
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  useEffect(() => {
    getMobileUnit();
    getPendaftaran();
  }, []);

  const formatDate = (date) => {
    const formattedDate = dayjs(date).add(8, 'hour').format('YYYY-MM-DD');
    return formattedDate;
  };

  return (
    <div className='flex flex-col items-center gap-5 p-10'>
      <span className='flex flex-col items-center gap-2 text-center'>
        <h2>Data Riwayat Donor</h2>
        <Button link={'/pendonor/donor'} className={'bg-dark text-light w-fit'}>
          Donor
        </Button>
      </span>

      <div className='w-full overflow-x-auto'>
        <table className='mx-auto table-auto text-nowrap'>
          <thead>
            <tr>
              <th>No</th>
              <th>Action</th>
              <th>Status</th>
              <th>ID Pendaftaran</th>
              <th>Donor Ke</th>
              <th>Waktu</th>
              <th>Lokasi</th>
              <th>Tipe</th>
              <th>Tanggal Kembali</th>
            </tr>
          </thead>

          <tbody>
            {pendaftaran?.map((v, i) => {
              return (
                <tr key={i}>
                  <td>{(page - 1) * limit + (i + 1)}</td>
                  <td>
                    <span className='flex gap-1'>
                      <Button link={'/pendonor/datascreening'} className={'border border-dark'}>
                        <FontAwesomeIcon icon={'fas fa-check-double'} />
                      </Button>
                      <Button link={'/pendonor/pemeriksaan'} className={'border border-dark'}>
                        <FontAwesomeIcon icon={'fas fa-stethoscope'} />
                      </Button>
                    </span>
                  </td>
                  <td>{v.status == 'P' ? 'Diproses' : v.status == 'A' ? 'Diterima' : 'Ditolak'}</td>
                  <td>{v.id_pendaftaran}</td>
                  <td>{v.donor_ke}</td>
                  <td>{formatDate(v.tgl_donor)}</td>
                  <td>{v.lokasi}</td>
                  <td>{v.tipe == 'S' ? 'Sukarela' : 'Keluarga'}</td>
                  <td>{dayjs(v.tgl_donor).add(2, 'month').format('YYYY-MM-DD')}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <span className='flex justify-center w-full gap-2'>
        <Button onclick={() => setPage(pagination?.prev)}>
          <FontAwesomeIcon icon={'fas fa-arrow-left'} />
          &nbsp;Sebelumnya
        </Button>
        <Button onclick={() => setPage(pagination?.next)}>
          Berikutnya&nbsp;
          <FontAwesomeIcon icon={'fas fa-arrow-right'} />
        </Button>
      </span>

      <hr className='w-full my-10 border-dark' />

      <h2>Jadwal Mobile Unit</h2>

      <div className='flex justify-center w-full overflow-x-auto'>
        <table className='table-auto text-nowrap'>
          <thead>
            <tr>
              <th>No</th>
              <th>Waktu</th>
              <th>Lokasi</th>
            </tr>
          </thead>

          <tbody>
            {mobileUnit && mobileUnit.length > 0 ? (
              mobileUnit.map((v, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{formatDate(v.jadwal)}</td>
                  <td>{v.lokasi}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} style={{ textAlign: 'center' }}>
                  Tidak ada data terbaru
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Utama;
