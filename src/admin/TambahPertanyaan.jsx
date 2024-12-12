import { useForm } from 'react-hook-form';

const TambahPertanyaan = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const tambahPertanyaan = (data) => {
    console.log(data);
  };

  return (
    <div className='p-10 flex flex-col gap-5 items-center'>
      <h2>Tambah Pertanyaan Screening</h2>

      <form
        onSubmit={handleSubmit(tambahPertanyaan)}
        className='flex flex-col gap-2 items-center w-full'
      >
        <span className='flex flex-col w-full'>
          <label htmlFor='pertanyaan'>Pertanyaan</label>
          <textarea
            id='pertanyaan'
            type='text'
            className='px-3 py-2 rounded-md'
            {...register('pertanyaan', {
              required: 'wajib di isi',
            })}
          />
          {errors.pertanyaan && <p className='text-brand'>{errors.pertanyaan.message}</p>}
        </span>

        <input
          type='submit'
          className='px-3 py-2 mt-4 rounded bg-dark text-light w-fit cursor-pointer'
        />
      </form>
    </div>
  );
};

export default TambahPertanyaan;
