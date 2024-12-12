import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';

const Riwayat = () => {
  return (
    <div className='p-10 space-y-5'>
      <span className='flex items-center justify-between'>
        <h2>Data Riwayat Donor</h2>
        <Button className={'bg-dark text-light'}>Tambah</Button>
      </span>

      <div className='overflow-x-auto w-full flex justify-center'>
        <table className='table-auto text-nowrap'>
          <thead>
            <tr>
              <th>No</th>
              <th>Action</th>
              <th>Nama</th>
              <th>Donor Ke</th>
              <th>Tanggal Kembali</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1.</td>
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
              <td>Asep</td>
              <td>4</td>
              <td>4 Februari 2025</td>
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

export default Riwayat;
