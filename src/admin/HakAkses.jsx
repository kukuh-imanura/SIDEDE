import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';

const HakAkses = () => {
  const [dataAkses, setDataAkses] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const limit = 5;

  const getHakAkses = async () => {
    try {
      const res = await axios.get(
        `https://sidede-api.vercel.app/hakakses?limit=${limit}&page=${page}`
      );

      setPagination(res.data.pagination);
      setDataAkses(res.data.result || []);
    } catch (err) {
      console.log('Error saat mengambil data : ', err.message);
      alert(err.response?.data.message || 'Terjadi kesalahan pada server');
    }
  };

  const deleteHakAkses = async (id) => {
    const isConfirm = confirm('Hapus data ini?');
    if (!isConfirm) return;

    try {
      const res = await axios.delete(`https://sidede-api.vercel.app/hakakses/${id}`);
      alert(res.data.message);
      getHakAkses();
    } catch (err) {
      console.log('Error saat menghapus data : ', err.message);
      alert(err.response?.data.message || 'Terjadi kesalahan pada server');
    }
  };

  useEffect(() => {
    getHakAkses();
  }, [page]);

  return (
    <div className='p-10 space-y-5'>
      <span className='flex items-center justify-between'>
        <h2>Data Hak Akses</h2>
        <Button link={'/admin/hakakses/tambah'} className={'bg-dark text-light'}>
          Tambah
        </Button>
      </span>

      <div className='overflow-x-auto w-full'>
        <table className='table-auto text-nowrap mx-auto'>
          <thead>
            <tr>
              <th>No</th>
              <th>Action</th>
              <th>Username</th>
              <th>Hak Aksess</th>
              <th>Foto</th>
            </tr>
          </thead>

          <tbody>
            {dataAkses?.map((v, i) => {
              return (
                <tr key={i}>
                  <td>{(page - 1) * limit + (i + 1)}</td>
                  <td>
                    <span className='flex gap-1'>
                      <Button
                        link={'/admin/hakakses/ubah'}
                        state={{ id: v.id_akses }}
                        className={'border border-dark'}
                      >
                        <FontAwesomeIcon icon={'fas fa-pencil'} />
                      </Button>
                      <Button
                        onclick={() => deleteHakAkses(v.id_akses)}
                        className={'bg-brand text-light'}
                      >
                        <FontAwesomeIcon icon={'fas fa-trash-can'} />
                      </Button>
                    </span>
                  </td>
                  <td>{v.username}</td>
                  <td>
                    {v.hak_akses === 'A'
                      ? 'Staff Administrasi'
                      : v.hak_akses === 'S'
                      ? 'Staff Pelayanan'
                      : 'Pendonor'}
                  </td>
                  <td>{v.foto ? v.foto : '-'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <span className='flex gap-2 w-full justify-center items-center'>
        <Button onclick={() => setPage(pagination.prev)}>
          <FontAwesomeIcon icon={'fas fa-arrow-left'} />
          &nbsp;Sebelumnya
        </Button>
        <p>{page}</p>
        <Button onclick={() => setPage(pagination.next)}>
          Berikutnya&nbsp;
          <FontAwesomeIcon icon={'fas fa-arrow-right'} />
        </Button>
      </span>
    </div>
  );
};

export default HakAkses;
