import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const HasilPemeriksaan = () => {
  const [data, setData] = useState();

  const location = useLocation();
  const id = location.state.id_pendaftaran;

  const getData = async (id) => {
    try {
      const res = await axios.get(`https://sidede-api.vercel.app/pemeriksaan?id_pendaftaran=${id}`);
      setData(res.data ? res.data.result[0] : {});
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <div className='flex flex-col gap-5 p-10'>
      <hgroup className='flex flex-col items-center gap-2'>
        <h2>Hasil Pemeriksaan Kesehatan</h2>
        <p>ID Pendaftaran {id}</p>
      </hgroup>

      <div className='mx-auto w-fit lg:w-1/2'>
        <table className='w-full'>
          <tbody className='*:border-none'>
            <tr>
              <td className='w-5/12 font-semibold'>Nama Dokter/Petugas Selek</td>
              <td className='w-1/12'>:</td>
              <td>{data?.nama_petugas}</td>
            </tr>
          </tbody>
        </table>

        <div className='flex flex-col gap-4 md:flex-row'>
          {/* Kolom Kiri */}
          <table className='w-full'>
            <tbody className='*:border-none'>
              <tr>
                <td className='w-5/12 font-semibold'>Tekanan Darah</td>
                <td className='w-1/12'>:</td>
                <td>{data?.tekanan_darah}</td>
              </tr>
              <tr>
                <td className='w-5/12 font-semibold'>Berat Badan</td>
                <td className='w-1/12'>:</td>
                <td>{data?.berat_badan}</td>
              </tr>
              <tr>
                <td className='w-5/12 font-semibold'>Keadaan Umum</td>
                <td className='w-1/12'>:</td>
                <td>{data?.keadaan_umum}</td>
              </tr>
            </tbody>
          </table>

          {/* Kolom Kanan */}
          <table className='w-full'>
            <tbody className='*:border-none'>
              <tr>
                <td className='w-5/12 font-semibold'>Denyut Nadi</td>
                <td className='w-1/12'>:</td>
                <td>{data?.denyut_nadi}</td>
              </tr>
              <tr>
                <td className='w-5/12 font-semibold'>Tinggi Badan</td>
                <td className='w-1/12'>:</td>
                <td>{data?.tinggi_badan}</td>
              </tr>
              <tr>
                <td className='w-5/12 font-semibold'>Suhu</td>
                <td className='w-1/12'>:</td>
                <td>{data?.suhu}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <table className='w-full'>
          <tbody className='*:border-none'>
            <tr>
              <td className='w-5/12 font-semibold'>Riwayat Medis</td>
              <td className='w-1/12'>:</td>
              <td>{data?.riwayat_medis ? data.riwayat_medis : 'Tidak ada'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HasilPemeriksaan;
