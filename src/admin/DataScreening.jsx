import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';

const DataScreening = () => {
  return (
    <div className='p-10 space-y-5'>
      <span className='flex items-center justify-between'>
        <h2>Data Screening</h2>

        <span className='flex gap-2'>
          <Button link={'/admin/screening/pertanyaan'} className={'border border-dark'}>
            Tambah Pertanyaan
          </Button>
          <Button link={'/admin/screening/tambah'} className={'bg-dark text-light'}>
            Tambah Screening
          </Button>
        </span>
      </span>

      <div className='overflow-x-auto w-full flex justify-center'>
        <table className='table-auto text-nowrap'>
          <thead>
            <tr>
              <th rowSpan={2}>Pertanyaan</th>
              <th className='border-none'>Ke-3 Asep</th>
              <th className='border-none'>Ke-4 Asep</th>
            </tr>
            <tr>
              <td>
                <span className='flex gap-1'>
                  <Button className={'border border-dark'}>
                    <FontAwesomeIcon icon={'fas fa-pencil'} />
                  </Button>
                  <Button className={'bg-brand text-light'}>
                    <FontAwesomeIcon icon={'fas fa-trash-can'} />
                  </Button>
                </span>
              </td>
              <td>
                <span className='flex gap-1'>
                  <Button className={'border border-dark'}>
                    <FontAwesomeIcon icon={'fas fa-pencil'} />
                  </Button>
                  <Button className={'bg-brand text-light'}>
                    <FontAwesomeIcon icon={'fas fa-trash-can'} />
                  </Button>
                </span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apakah?</td>
              <td>Ya</td>
              <td>Ya</td>
            </tr>
            <tr>
              <td>Kapan?</td>
              <td>Tidak</td>
              <td>Ya</td>
            </tr>
          </tbody>
        </table>
      </div>

      <span className='flex gap-2 w-full justify-center'>
        <Button>
          <FontAwesomeIcon icon={'fas fa-arrow-left'} />
          &nbsp;Sebelumnya
        </Button>
        <Button>
          Berikutnya&nbsp;
          <FontAwesomeIcon icon={'fas fa-arrow-right'} />
        </Button>
      </span>
    </div>
  );
};

export default DataScreening;
