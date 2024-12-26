import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Pemeriksaan = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const limit = 5;

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://sidede-api.vercel.app/pemeriksaan?limit=${limit}&page=${page}`
      );
      setData(res.data.result);
      setPagination(res.data.pagination);
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  const deleteData = async (id) => {
    try {
      const res = await axios.delete(`https://sidede-api.vercel.app/pemeriksaan/${id}`);
      alert(res.data.message);
      getData();
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className='p-10 space-y-5'>
      <span className='flex items-center justify-between'>
        <h2>Data Pemeriksaan Kesehatan</h2>
        <Button link={'/admin/pemeriksaan/tambah'} className={'bg-dark text-light'}>
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
              <th>Nama Petugas</th>
              <th>Tekanan Darah</th>
              <th>Denyut Nadi</th>
              <th>Berat</th>
              <th>Tinggi</th>
              <th>Suhu</th>
              <th>Keadaan Umum</th>
              <th>Riwayatt Medis</th>
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
                        link={'/admin/pemeriksaan/ubah'}
                        state={{ id: v.id_pk }}
                      >
                        <FontAwesomeIcon icon={'fas fa-pencil'} />
                      </Button>
                      <Button className={'bg-brand text-light'} onclick={() => deleteData(v.id_pk)}>
                        <FontAwesomeIcon icon={'fas fa-trash-can'} />
                      </Button>
                    </span>
                  </td>
                  <td>{v.id_pendaftaran}</td>
                  <td>{v.nama_petugas}</td>
                  <td>{v.tekanan_darah}</td>
                  <td>{v.denyut_nadi}</td>
                  <td>{v.berat_badan}</td>
                  <td>{v.tinggi_badan}</td>
                  <td>{v.suhu}</td>
                  <td>{v.keadaan_umum}</td>
                  <td>{v.riwayat_medis}</td>
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

export default Pemeriksaan;
