import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';

const HakAkses = () => {
  return (
    <div className='p-10 space-y-5'>
      <span className='flex items-center justify-between'>
        <h2>Data Hak Akses</h2>
        <Button link={'/admin/hakakses/tambah'} className={'bg-dark text-light'}>
          Tambah
        </Button>
      </span>

      <div className='overflow-x-auto w-full'>
        <table className='table-auto text-nowrap mx-auto'>
          <thead>
            <tr>
              <th>No</th>
              <th>Action</th>
              <th>Hak Aksess</th>
              <th>Username</th>
              <th>Password</th>
              <th>Foto</th>
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
              <td>Pendonor</td>
              <td>Asep1234</td>
              <td>23c3w74gr3dw3e7vfgh7tdv72dceir8442f3e8738273778337</td>
              <td>Asep.png</td>
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

export default HakAkses;
