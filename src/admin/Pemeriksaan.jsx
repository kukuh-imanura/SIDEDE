import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';

const Pemeriksaan = () => {
  return (
    <div className='p-10 space-y-5'>
      <span className='flex items-center justify-between'>
        <h2>Data Pemeriksaan Kesehatan</h2>
        <Button link={'/admin/pemeriksaan/tambah'} className={'bg-dark text-light'}>
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
              <th>Nama Pendonor</th>
              <th>Donor Ke</th>
              <th>Nama Petugas</th>
              <th>Tekanan Darah</th>
              <th>Denyut Nadi</th>
              <th>Berat</th>
              <th>Tinggi</th>
              <th>Suhu</th>
              <th>Keadaan Umum</th>
              <th>Riwayatt Medis</th>
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
              <td>Asep</td>
              <td>4</td>
              <td>Yanto</td>
              <td>120/80</td>
              <td>80</td>
              <td>44</td>
              <td>144</td>
              <td>34</td>
              <td>Sehat</td>
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

export default Pemeriksaan;
