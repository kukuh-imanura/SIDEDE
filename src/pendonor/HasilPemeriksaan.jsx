const HasilPemeriksaan = () => {
  return (
    <div className='p-10 flex flex-col gap-5'>
      <hgroup className='flex flex-col gap-2 items-center'>
        <h2>Hasil Pemeriksaan Kesehatan</h2>
        <p>ID 1234</p>
      </hgroup>

      <div className='w-fit lg:w-1/2 mx-auto'>
        <table className='w-full'>
          <tbody className='*:border-none'>
            <tr>
              <td className='font-semibold w-5/12'>Nama Dokter/Petugas Selek</td>
              <td className='w-1/12'>:</td>
              <td>Yohan</td>
            </tr>
          </tbody>
        </table>

        <div className='flex flex-col md:flex-row gap-4'>
          {/* Kolom Kiri */}
          <table className='w-full'>
            <tbody className='*:border-none'>
              <tr>
                <td className='font-semibold w-5/12'>Tekanan Darah</td>
                <td className='w-1/12'>:</td>
                <td>123</td>
              </tr>
              <tr>
                <td className='font-semibold w-5/12'>Berat Badan</td>
                <td className='w-1/12'>:</td>
                <td>34</td>
              </tr>
              <tr>
                <td className='font-semibold w-5/12'>Keadaan Umum</td>
                <td className='w-1/12'>:</td>
                <td>Sehat</td>
              </tr>
            </tbody>
          </table>

          {/* Kolom Kanan */}
          <table className='w-full'>
            <tbody className='*:border-none'>
              <tr>
                <td className='font-semibold w-5/12'>Denyut Nadi</td>
                <td className='w-1/12'>:</td>
                <td>123</td>
              </tr>
              <tr>
                <td className='font-semibold w-5/12'>Tinggi Badan</td>
                <td className='w-1/12'>:</td>
                <td>189</td>
              </tr>
              <tr>
                <td className='font-semibold w-5/12'>Suhu</td>
                <td className='w-1/12'>:</td>
                <td>34</td>
              </tr>
            </tbody>
          </table>
        </div>

        <table className='w-full'>
          <tbody className='*:border-none'>
            <tr>
              <td className='font-semibold w-5/12'>Riwayat Medis</td>
              <td className='w-1/12'>:</td>
              <td>Tidak ada</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HasilPemeriksaan;
