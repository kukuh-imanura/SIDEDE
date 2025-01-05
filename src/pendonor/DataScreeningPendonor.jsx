const ScreeningPendonor = () => {
  return (
    <div className='flex flex-col gap-5 p-10'>
      <hgroup className='flex flex-col items-center gap-2'>
        <h2>Data Screening</h2>
        <p>ID 1234</p>
      </hgroup>

      <div className='flex justify-center w-full overflow-x-auto'>
        <table className='table-auto text-nowrap'>
          <thead>
            <tr>
              <th>Pertanyaan</th>
              <th className='border-none'>Jawaban</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apakah?</td>
              <td className='text-center'>Ya</td>
            </tr>
            <tr>
              <td>Kapan?</td>
              <td className='text-center'>Tidak</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScreeningPendonor;
