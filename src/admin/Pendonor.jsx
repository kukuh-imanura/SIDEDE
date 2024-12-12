import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';

const Pendonor = () => {
  return (
    <div className='p-10 space-y-5'>
      <span className='flex items-center justify-between'>
        <h2>Data Pendonor</h2>
        <Button className={'bg-dark text-light'}>Tambah</Button>
      </span>

      <div className='overflow-x-auto w-full'>
        <table className='table-auto text-nowrap'>
          <thead>
            <tr>
              <th>No</th>
              <th>Action</th>
              <th>NIK</th>
              <th>No. Kartu</th>
              <th>Nama</th>
              <th>Jenis Kelamin</th>
              <th>TTL</th>
              <th>Pekerjaan</th>
              <th>Alamat</th>
              <th>Telpon Rumah</th>
              <th>Alamat Kantor</th>
              <th>Telpon Kantor</th>
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
              <td>1111222233334444</td>
              <td>1234</td>
              <td>Asep</td>
              <td>Laki-laki</td>
              <td>Sumbawa, 4 Desember 2024</td>
              <td>Mahasiswa</td>
              <td>Dusun Panca, Kel. Lopok, Kec. Lopok, Kota Sumbawa</td>
              <td>81234111111</td>
              <td>-</td>
              <td>-</td>
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

export default Pendonor;
