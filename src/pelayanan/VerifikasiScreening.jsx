import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifikasiScreening = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const navigate = useNavigate();

  const location = useLocation();
  const { id } = location.state || '';

  const [pertanyaan, setPertanyaan] = useState([]);
  let counter = 1;

  const verifikasiScreening = async (data) => {
    try {
      data.id_pendaftaran = id;
      const res = await axios.patch(`https://sidede-api.vercel.app/screening`, data);
      alert(res.data.message);
      navigate('/admin/screening');
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  const getPertanyaan = async () => {
    try {
      const res = await axios.get('https://sidede-api.vercel.app/pertanyaan');
      setPertanyaan(res.data.result);
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  useEffect(() => {
    getPertanyaan();
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
    <div className='flex flex-col items-center gap-5 p-10'>
      <hgroup className='text-center'>
        <h2>Verifikasi Screening</h2>
        <p>ID Pendaftaran : {id}</p>
      </hgroup>

      <form
        onSubmit={handleSubmit(verifikasiScreening)}
        className='flex flex-col items-center w-full gap-2'
      >
        <div className='flex w-full overflow-x-auto'>
          <table className='table-auto text-nowrap'>
            <thead>
              <tr>
                <th>No</th>
                <th>Pertanyaan</th>
                <th>Ya</th>
                <th>Tidak</th>
              </tr>
            </thead>

            <tbody>
              {mappedData.map(({ label, data }, i) => (
                <React.Fragment key={i}>
                  <tr>
                    <td colSpan='2' className='font-bold'>
                      {label}
                    </td>
                  </tr>
                  {data.map((item) => (
                    <tr key={item.id_pertanyaan}>
                      <td>{counter++}</td>
                      <td className={`${errors[`${item.id_pertanyaan}`] && 'bg-brand'}`}>
                        {item.pertanyaan}
                      </td>
                      <td className='text-center'>
                        <input
                          type='radio'
                          value={1}
                          name={`${item.id_pertanyaan}`} // Nama unik berdasarkan ID pertanyaan
                          {...register(`${item.id_pertanyaan}`, {
                            required: true,
                          })}
                        />
                      </td>

                      <td className='text-center'>
                        <input
                          type='radio'
                          value={0}
                          name={`${item.id_pertanyaan}`} // Nama unik berdasarkan ID pertanyaan
                          {...register(`${item.id_pertanyaan}`, {
                            required: true,
                          })}
                        />
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <input
          type='submit'
          className='px-3 py-2 mt-4 rounded cursor-pointer bg-dark text-light w-fit'
        />
      </form>
    </div>
  );
};

export default VerifikasiScreening;
