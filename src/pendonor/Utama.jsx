import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';

const Utama = () => {
  return (
    <div className='p-10 flex flex-col gap-5 items-center'>
      <span className='text-center flex flex-col items-center gap-2'>
        <h2>Data Riwayat Donor</h2>
        <Button link={'/pendonor/donor'} className={'bg-dark text-light w-fit'}>
          Donor
        </Button>
      </span>

      <div className='overflow-x-auto w-full'>
        <table className='table-auto text-nowrap'>
          <thead>
            <tr>
              <th>No</th>
              <th>Action</th>
              <th>Status</th>
              <th>ID Pendaftaran</th>
              <th>Donor Ke</th>
              <th>Waktu</th>
              <th>Lokasi</th>
              <th>Tipe</th>
              <th>Tanggal Kembali</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1.</td>
              <td>
                <span className='flex gap-1'>
                  <Button link={'/pendonor/datascreening'} className={'border border-dark'}>
                    <FontAwesomeIcon icon={'fas fa-check-double'} />
                  </Button>
                  <Button link={'/pendonor/pemeriksaan'} className={'border border-dark'}>
                    <FontAwesomeIcon icon={'fas fa-stethoscope'} />
                  </Button>
                </span>
              </td>
              <td>Diproses</td>
              <td>1234</td>
              <td>4</td>
              <td>08:00, 4 Desember 2024</td>
              <td>Kantor UTD-PMI</td>
              <td>Sukarela</td>
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

      <hr className='border-dark w-full my-10' />

      <h2>Jadwal Mobile Unit</h2>

      <div className='w-full overflow-auto'>
        <table className='table-auto text-nowrap mx-auto'>
          <thead>
            <tr>
              <th>No</th>
              <th>Lokasi</th>
              <th>Waktu</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1.</td>
              <td>Desa Lopok</td>
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

export default Utama;
