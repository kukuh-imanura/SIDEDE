import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';
import { useRef } from 'react';

const DashboardPelayanan = () => {
  const detailRef = useRef();

  const showDetail = () => {
    detailRef.current.show();
  };

  const closeDetail = () => {
    detailRef.current.close();
  };

  return (
    <>
      <div className='px-10 py-5 space-y-6'>
        <h2>Pendaftaran</h2>

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
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1.</td>
                <td>
                  <span className='flex gap-1'>
                    <Button onclick={showDetail} className={'bg-brand text-light'}>
                      <FontAwesomeIcon icon={'fas fa-circle-info'} />
                    </Button>
                    <Button link={'/pelayanan/screening'} className={'border border-dark'}>
                      <FontAwesomeIcon icon={'fas fa-check-double'} />
                    </Button>
                    <Button link={'/pelayanan/pemeriksaan'} className={'border border-dark'}>
                      <FontAwesomeIcon icon={'fas fa-stethoscope'} />
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

      <dialog
        className='w-full h-screen bg-dark/50 open:flex flex-col items-center gap-10 py-10 absolute top-0 left-0 overflow-y-scroll'
        ref={detailRef}
      >
        <hgroup className='text-center text-light'>
          <h2>Detail</h2>
          <p>user 1234</p>
        </hgroup>

        <div className='bg-light rounded-xl w-3/4 p-10 pt-16 grid grid-cols-2 gap-10 relative'>
          <Button onclick={closeDetail} className={'absolute right-6 top-6'}>
            <FontAwesomeIcon icon={'fas fa-xmark'} size='lg' />
          </Button>

          {/* Kolom Kiri */}
          <table className='w-full *:*:border-none'>
            <tbody>
              <tr>
                <td className='font-semibold'>NIK</td>
                <td>:</td>
                <td>1122334412341234</td>
              </tr>
              <tr>
                <td className='font-semibold'>Nama Lengkap</td>
                <td>:</td>
                <td>Asep</td>
              </tr>
              <tr>
                <td className='font-semibold'>Alamat Rumah</td>
                <td>:</td>
                <td>Jl.1234</td>
              </tr>
              <tr>
                <td className='font-semibold'>No Telp Rumah/Hp</td>
                <td>:</td>
                <td>81234111222</td>
              </tr>
            </tbody>
          </table>

          {/* Kolom Kanan */}
          <table className='w-full *:*:border-none'>
            <tbody>
              <tr>
                <td className='font-semibold'>No Kartu Donor</td>
                <td>:</td>
                <td>1122334411223344</td>
              </tr>
              <tr>
                <td className='font-semibold'>Jenis Kelamin</td>
                <td>:</td>
                <td>Laki-Laki</td>
              </tr>
              <tr>
                <td className='font-semibold'>Kelurahan</td>
                <td>:</td>
                <td>Lopok</td>
              </tr>
              <tr>
                <td className='font-semibold'>Kecamatan</td>
                <td>:</td>
                <td>Lopok</td>
              </tr>
              <tr>
                <td className='font-semibold'>Kota</td>
                <td>:</td>
                <td>Sumbawa</td>
              </tr>
            </tbody>
          </table>

          {/* Kolom Tengah-Bawah */}
          <table className='col-span-2 w-full *:*:border-none'>
            <tbody>
              <tr>
                <td className='font-semibold w-5/12'>Alamat Kantor</td>
                <td className='w-1/12'>:</td>
                <td>Jl. Jalan</td>
              </tr>
              <tr>
                <td className='font-semibold w-5/12'>No Telp Kantor/Email</td>
                <td className='w-1/12'>:</td>
                <td>email@gmail.com</td>
              </tr>
              <tr>
                <td className='font-semibold w-5/12'>Pekerjaan</td>
                <td className='w-1/12'>:</td>
                <td>Mahasiswa</td>
              </tr>
              <tr>
                <td className='font-semibold w-5/12'>Tempat Kelahiran</td>
                <td className='w-1/12'>:</td>
                <td>Sumbawa</td>
              </tr>
              <tr>
                <td className='font-semibold w-5/12'>Tgl/ Bln/ Thn Kelahiran</td>
                <td className='w-1/12'>:</td>
                <td>31/12/1999</td>
              </tr>
              <tr>
                <td className='font-semibold w-5/12'>Penghargaan yang telah diterima</td>
                <td className='w-1/12'>:</td>
                <td>25X</td>
              </tr>
              <tr>
                <td className='font-semibold w-5/12'>
                  Bersediakah saudara donor pada waktu bulan puasa
                </td>
                <td className='w-1/12'>:</td>
                <td>Tidak</td>
              </tr>
              <tr>
                <td className='font-semibold w-5/12'>
                  Bersediakah saudara donor saat dibutuhkan untuk keperluan tertentu (di luar donor
                  rutin)
                </td>
                <td className='w-1/12'>:</td>
                <td>Ya</td>
              </tr>
            </tbody>
          </table>

          {/* Informasi Tambahan */}
          <table className='col-span-2 w-full *:*:border-none'>
            <tbody className='flex'>
              <tr>
                <td className='font-semibold'>Donor yang terakhir tanggal</td>
                <td>:</td>
                <td>12 Desember 2024</td>
              </tr>
              <tr>
                <td className='font-semibold'>Sekarang donor yang ke</td>
                <td>:</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </dialog>
    </>
  );
};

export default DashboardPelayanan;
