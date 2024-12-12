import { useForm } from 'react-hook-form';

const TambahScreening = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const tambahScreening = (data) => {
    console.log(data);
  };

  return (
    <div className='p-10 flex flex-col gap-5 items-center'>
      <h2>Tambah Data Screening</h2>

      <form
        onSubmit={handleSubmit(tambahScreening)}
        className='flex flex-col gap-2 items-center w-full'
      >
        <span className='flex items-center gap-2'>
          <label htmlFor='idpendaftaran'>ID Pendaftaran</label>
          <input
            id='idpendaftaran'
            type='text'
            className='px-3 py-2 rounded-md'
            {...register('idpendaftaran', {
              required: 'wajib di isi',
            })}
          />
          {errors.idpendaftaran && <p className='text-brand'>{errors.idpendaftaran.message}</p>}
        </span>

        {/* <div className='overflow-x-auto w-full'> */}
        <table className='text-nowrap'>
          <thead>
            <tr>
              <th>Pertanyaan</th>
              <th>Ya</th>
              <th>Tidak</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className={`${errors.q1 && 'text-brand'}`}>Merasa sehat pada hari ini?</td>
              <td className='text-center'>
                <input
                  type='radio'
                  value={true}
                  name='q1'
                  {...register('q1', {
                    required: true,
                  })}
                />
              </td>
              <td className='text-center'>
                <input
                  type='radio'
                  value={false}
                  name='q1'
                  {...register('q1', {
                    required: true,
                  })}
                />
              </td>
            </tr>
          </tbody>
        </table>
        {/* </div> */}

        <input
          type='submit'
          className='px-3 py-2 mt-4 rounded bg-dark text-light w-fit cursor-pointer'
        />
      </form>
    </div>
  );
};

export default TambahScreening;
