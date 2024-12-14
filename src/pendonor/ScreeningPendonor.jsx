const ScreeningPendonor = () => {
  return (
    <div className='p-10 flex flex-col gap-5'>
      <hgroup className='flex flex-col gap-2 items-center'>
        <h2>Data Screening</h2>
        <p>ID 1234</p>
      </hgroup>

      <div className='overflow-x-auto w-full flex justify-center'>
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
