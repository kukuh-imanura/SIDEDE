import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const Pendonor = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const limit = 5;

  const getData = async () => {
    try {
      const res = await axios.get(`/api/pendonor?limit=${limit}&page=${page}`);

      setData(res.data.result);
      setPagination(res.data.pagination);
    } catch (err) {
      console.log('Error saat mengambil data : ', err.message);
      alert(err.response?.data.message || 'Terjadi kesalahan pada server');
    }
  };

  const deleteData = async (nik) => {
    const isConfirm = confirm('Hapus data ini?');
    if (!isConfirm) return;

    try {
      const res = await axios.delete(`/api/pendonor/${nik}`);
      alert(res.data.message);
      getData();
    } catch (err) {
      console.log('Error saat mengambil data : ', err.message);
      alert(err.response?.data.message || 'Terjadi kesalahan pada server');
    }
  };

  const formatDate = (date) => {
    const formattedDate = dayjs(date).add(8, 'hour').format('YYYY-MM-DD');
    return formattedDate;
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
  }, [page]);

  return (
    <div className='p-10 space-y-5'>
      <span className='flex items-center justify-between'>
        <h2>Data Pendonor</h2>
        <Button link={'/admin/pendonor/tambah'} className={'bg-dark text-light'}>
          Tambah
        </Button>
      </span>

      <div className='overflow-x-auto w-full'>
        <table className='table-auto text-nowrap'>
          <thead>
            <tr>
              <th>No</th>
              <th>Action</th>
              <th>NIK</th>
              <th>No. Kartu</th>
              <th>Nama</th>
              <th>Jenis Kelamin</th>
              <th>TTL</th>
              <th>Pekerjaan</th>
              <th>Telpon Rumah</th>
              <th>Email/ Telpon Kantor</th>
              <th>Alamat</th>
              <th>Alamat Kantor</th>
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
                        link={'/admin/pendonor/ubah'}
                        state={{ nik: v.nik }}
                      >
                        <FontAwesomeIcon icon={'fas fa-pencil'} />
                      </Button>
                      <Button className={'bg-brand text-light'} onclick={() => deleteData(v.nik)}>
                        <FontAwesomeIcon icon={'fas fa-trash-can'} />
                      </Button>
                    </span>
                  </td>
                  <td>{v.nik}</td>
                  <td>{v.no_kartu}</td>
                  <td>{v.nama}</td>
                  <td>{v.jenis_kelamin === 'L' ? 'Laki-Laki' : 'Perempuan'}</td>
                  <td>{`${v.tempat_lahir}, ${formatDate(v.tgl_lahir)}`}</td>
                  <td>{setPekerjaan(v.pekerjaan)}</td>
                  <td>{v.telp_rumah}</td>
                  <td>{v.email}</td>
                  <td>{`Kec. ${v.kecamatan}, Kel. ${v.kelurahan}, Kota ${v.kota}, ${v.alamat}`}</td>
                  <td>{v.alamat_kantor}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <span className='flex gap-2 w-full justify-center'>
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

export default Pendonor;
