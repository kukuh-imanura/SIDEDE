import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

const Pendaftaran = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const limit = 5;

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://sidede-api.vercel.app/pendaftaran?limit=${limit}&page=${page}`
      );
      setData(res.data.result);
      setPagination(res.data.pagination);
    } catch (err) {
      console.log('Error saat mengambil data : ', err.message);
      alert(err.response?.data.message || 'Terjadi kesalahan pada server');
    }
  };

  const deleteData = async (id) => {
    const isConfirm = confirm('Hapus data ini?');
    if (!isConfirm) return;

    try {
      const res = await axios.delete(`https://sidede-api.vercel.app/pendaftaran/${id}`);
      alert(res.data.message);
      getData();
    } catch (err) {
      console.error(err);
    }
  };

  const formatDate = (date) => {
    const formattedDate = dayjs(date).add(8, 'hour').format('YYYY-MM-DD');
    return formattedDate;
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className='p-10 space-y-5'>
      <span className='flex items-center justify-between'>
        <h2>Data Pendaftaran</h2>
        <Button link={'/admin/pendaftaran/tambah'} className={'bg-dark text-light'}>
          Tambah
        </Button>
      </span>

      <div className='w-full overflow-x-auto'>
        <table className='table-auto text-nowrap'>
          <thead>
            <tr>
              <th>No</th>
              <th>Action</th>
              <th>ID Pendaftaran</th>
              <th>NIK</th>
              <th>Waktu</th>
              <th>Lokasi</th>
              <th>Tipe</th>
              <th>Donor Ke</th>
              <th>Tanggal Akhir Donor</th>
              <th>Status</th>
              <th>Alasan Penolakan</th>
              <th>Donor Puasa</th>
              <th>Donor Sukarela</th>
              <th>Penghargaan</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((v, i) => {
              return (
                <tr key={i}>
                  <td>{(page - 1) * limit + (i + 1)}</td>
                  <td>
                    <span className='flex gap-1'>
                      <Button
                        className={'border border-dark'}
                        link={`/admin/pendaftaran/ubah`}
                        state={{ id: v.id_pendaftaran }}
                      >
                        <FontAwesomeIcon icon={'fas fa-pencil'} />
                      </Button>
                      <Button
                        className={'bg-brand text-light'}
                        onclick={() => deleteData(v.id_pendaftaran)}
                      >
                        <FontAwesomeIcon icon={'fas fa-trash-can'} />
                      </Button>
                    </span>
                  </td>
                  <td>{v.id_pendaftaran}</td>
                  <td>{v.nik}</td>
                  <td>{formatDate(v.tgl_donor)}</td>
                  <td>{v.lokasi}</td>
                  <td>{v.tipe === 'S' ? 'Sukarela' : 'Keluarga'}</td>
                  <td>{v.donor_ke}</td>
                  <td>{formatDate(v.tgl_akhir_donor)}</td>
                  <td>
                    {v.status === 'P' ? 'Diproses' : v.status === 'A' ? 'Diterima' : 'Ditolak'}
                  </td>
                  <td>{v.alasan_penolakan}</td>
                  <td>{v.donor_puasa === 1 ? 'Setuju' : 'Tidak Setuju'}</td>
                  <td>{v.donor_sukarela === 1 ? 'Setuju' : 'Tidak Setuju'}</td>
                  <td>{v.penghargaan}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <span className='flex justify-center w-full gap-2'>
        <Button onclick={() => setPage(pagination.prev)}>
          <FontAwesomeIcon icon={'fas fa-arrow-left'} />
          &nbsp;Sebelumnya
        </Button>
        <Button onclick={() => setPage(pagination.next)}>
          Berikutnya&nbsp;
          <FontAwesomeIcon icon={'fas fa-arrow-right'} />
        </Button>
      </span>
    </div>
  );
};

export default Pendaftaran;
