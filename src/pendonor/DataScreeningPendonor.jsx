import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScreeningPendonor = () => {
  const location = useLocation();
  const id_pendaftaran = location.state.id_pendaftaran;

  const [pertanyaan, setPertanyaan] = useState([]);
  let counter = 1;

  const [jawaban, setJawaban] = useState([]);

  const getPertanyaan = async () => {
    try {
      const res = await axios.get('https://sidede-api.vercel.app/pertanyaan');
      setPertanyaan(res.data.result);
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  const getJawaban = async () => {
    try {
      const res = await axios.get(
        `https://sidede-api.vercel.app/screening?id_pendaftaran=${id_pendaftaran}`
      );
      setJawaban(res.data.result);
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  useEffect(() => {
    getPertanyaan();
    getJawaban();
  }, []);

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

  return (
    <div className='flex flex-col gap-5 p-10'>
      <hgroup className='flex flex-col items-center gap-2'>
        <h2>Data Screening</h2>
        <p>ID Pendaftaran {id_pendaftaran}</p>
      </hgroup>

      <div className='flex w-full overflow-x-auto'>
        <table className='table-auto text-nowrap h-fit'>
          <thead>
            <tr>
              <th>No</th>
              <th>Pertanyaan</th>
              <th>Jawaban</th>
              <th>Verifikasi</th>
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
                  <tr key={item.id_pertanyaan}>
                    <td>{counter++}</td>
                    <td>{item.pertanyaan}</td>

                    {jawaban &&
                      Object.keys(jawaban).map((key) => {
                        const jawabanForPertanyaan = jawaban[key]?.find(
                          (ans) => ans.id_pertanyaan === item.id_pertanyaan
                        );

                        return (
                          <React.Fragment key={`${key}-${item.id_pertanyaan}`}>
                            <td>
                              {(() => {
                                if (!jawabanForPertanyaan) return '-';
                                return jawabanForPertanyaan.jawaban === 1 ? 'Ya' : 'Tidak';
                              })()}
                            </td>
                            <td>
                              {(() => {
                                if (!jawabanForPertanyaan) return '-';
                                return jawabanForPertanyaan.verifikasi === 1
                                  ? 'Ya'
                                  : jawabanForPertanyaan.verifikasi === 0
                                  ? 'Tidak'
                                  : '';
                              })()}
                            </td>
                          </React.Fragment>
                        );
                      })}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScreeningPendonor;
