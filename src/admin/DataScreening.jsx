import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataScreening = () => {
  const [pertanyaan, setPertanyaan] = useState([]);
  let counter = 1;

  const [jawaban, setJawaban] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const limit = 5;

  const getPertanyaan = async () => {
    try {
      const res = await axios.get('http://localhost:3000/pertanyaan');
      setPertanyaan(res.data.result);
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  const getJawaban = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/screening?limit=${limit}&page=${page}`);
      setJawaban(res.data.result);
      setPagination(res.data.pagination);
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  useEffect(() => {
    getPertanyaan();
    getJawaban();
  }, [page]);

  const kategori = [
    { range: [1, 4], label: 'Dalam waktu 48 jam terakhir' },
    { range: [5, 5], label: 'Dalam waktu 1 minggu terakhir' },
    { range: [6, 6], label: 'Dalam waktu 6 minggu terakhir' },
    { range: [7, 7], label: 'Dalam waktu 8 minggu terakhir' },
    { range: [8, 10], label: 'Dalam waktu 16 minggu terakhir' },
    { range: [11, 11], label: 'Dalam waktu 12 bulan terakhir' },
    { range: [12, 26], label: 'Dalam waktu 3 tahun' },
    { range: [27, 27], label: 'Tahun 1997 hingga sekarang' },
    { range: [28, 29], label: 'Tahun 1980 hingga sekarang' },
    { range: [30, 31], label: 'Tahun 1980 hingga 1996' },
    { range: [32, Infinity], label: 'Apakah anda pernah' },
  ];

  const mappedData = kategori.map(({ range, label }) => {
    const start = range[0] - 1; // Index array dimulai dari 0
    const end = range[1]; // `slice` tidak menyertakan end, jadi tidak perlu -1
    const dataInRange = pertanyaan.slice(start, end);
    return { label, data: dataInRange };
  });

  const deleteJawaban = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/screening/${id}`);
      alert(res.data.message);
      getJawaban();
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  return (
    <div className='p-10 space-y-5'>
      <span className='flex items-center justify-between'>
        <h2>Data Screening</h2>

        <span className='flex gap-2'>
          {/* <Button link={'/admin/screening/pertanyaan'} className={'border border-dark'}>
            Tambah Pertanyaan
          </Button> */}
          <Button link={'/admin/screening/tambah'} className={'bg-dark text-light'}>
            Tambah Screening
          </Button>
        </span>
      </span>

      <div className='flex w-full overflow-x-auto'>
        <table className='table-auto text-nowrap'>
          <thead>
            <tr>
              <th rowSpan={2}>No</th>
              <th rowSpan={2}>Pertanyaan</th>

              {Object.keys(jawaban).map((v, i) => {
                return (
                  <th key={i} className='border-none'>
                    {v}
                  </th>
                );
              })}
            </tr>

            <tr>
              {Object.keys(jawaban).map((v, i) => {
                return (
                  <td key={i}>
                    <span className='flex gap-1'>
                      {/* <Button
                        className={'border border-dark'}
                        link={'/admin/screening/ubah'}
                        state={{ id: v }}
                      >
                        <FontAwesomeIcon icon={'fas fa-pencil'} />
                      </Button> */}
                      <Button className={'bg-brand text-light'} onclick={() => deleteJawaban(v)}>
                        <FontAwesomeIcon icon={'fas fa-trash-can'} />
                      </Button>
                    </span>
                  </td>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {mappedData.map(({ label, data }, i) => (
              <React.Fragment key={i}>
                <tr>
                  <td colSpan='3' className='font-bold'>
                    {label}
                  </td>
                </tr>
                {data.map((item) => (
                  <tr key={counter}>
                    <td>{counter++}</td>
                    <td>{item.pertanyaan}</td>

                    {Object.keys(jawaban).map((key) => {
                      const jawabanForPertanyaan = jawaban[key]?.find(
                        (ans) => ans.id_pertanyaan === item.id_pertanyaan
                      );

                      return (
                        <td key={key}>
                          {(() => {
                            if (!jawabanForPertanyaan) return '-';
                            return jawabanForPertanyaan.jawaban === 1 ? 'Ya' : 'Tidak';
                          })()}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </React.Fragment>
            ))}
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

export default DataScreening;
