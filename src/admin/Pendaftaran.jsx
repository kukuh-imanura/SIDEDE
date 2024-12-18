import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';

const Pendaftaran = () => {
  return (
    <div className='p-10 space-y-5'>
      <span className='flex items-center justify-between'>
        <h2>Data Pendaftaran</h2>
        <Button link={'/admin/pendaftaran/tambah'} className={'bg-dark text-light'}>
          Tambah
        </Button>
      </span>

      <div className='overflow-x-auto w-full'>
        <table className='table-auto text-nowrap'>
          <thead>
            <tr>
              <th>No</th>
              <th>Action</th>
              <th>ID Pendaftaran</th>
              <th>NIK</th>
              <th>Nama</th>
              <th>Waktu</th>
              <th>Lokasi</th>
              <th>Tipe</th>
              <th>Donor Ke</th>
              <th>Tanggal Akhir Donor</th>
              <th>Status</th>
              <th>Alasan Penolakan</th>
              <th>Donor Puasa</th>
              <th>Donor Sukarela</th>
              <th>Penghargaan</th>
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
              <td>1234</td>
              <td>1234111222333444</td>
              <td>Asep</td>
              <td>08:00, 4 Desember 2024</td>
              <td>Kantor UTD-PMI</td>
              <td>Sukarela</td>
              <td>4</td>
              <td>4 Oktober 2024</td>
              <td>Diproses</td>
              <td>-</td>
              <td>Tidak</td>
              <td>Tidak</td>
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

export default Pendaftaran;
