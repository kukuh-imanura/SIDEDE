import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

const DashboardPelayanan = () => {
  const detailRef = useRef();
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState([]);

  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const limit = 5;

  const showDetail = async (v) => {
    try {
      const { nik, ...pendaftaran } = v;

      const pendonorSql = await axios.get(`https://sidede-api.vercel.app/pendonor/${nik}`);
      const pendonor = pendonorSql.data.result[0];

      const data = { ...pendaftaran, ...pendonor };

      setDetail(data);

      detailRef.current.show();
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  const closeDetail = () => {
    detailRef.current.close();
  };

  const getData = async () => {
    try {
      // Fetch data awal
      const res = await axios.get(
        `https://sidede-api.vercel.app/pendaftaran?limit=${limit}&page=${page}&status=P`
      );

      const fetchedData = res.data.result || [];

      // Ambil status untuk setiap id_pendaftaran
      const statusPromises = fetchedData.map(async (item) => {
        const statusRes = await axios.get(
          `https://sidede-api.vercel.app/helper/status?id_pendaftaran=${item.id_pendaftaran}`
        );
        return { ...item, status: statusRes.data.result }; // Gabungkan data awal dengan status
      });

      const dataWithStatus = await Promise.all(statusPromises);

      setData(dataWithStatus); // Update state dengan data yang sudah digabung
      setPagination(res.data.pagination);
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  const formatDate = (date) => {
    if (!date) return;
    const formattedDate = dayjs(date).add(8, 'hour').format('YYYY-MM-DD');
    return formattedDate;
  };

  const setPekerjaan = (pekerjaan) => {
    switch (pekerjaan) {
      case 'TP':
        return 'TNI/ Polri';

      case 'PN':
        return 'Pegawai Negeri/ Swasta';

      case 'PT':
        return 'Petani/ Buruh';

      case 'WS':
        return 'Wiraswasta';

      case 'MH':
        return 'Mahasiswa';

      case 'PG':
        return 'Pedagang';

      default:
        return 'Lain-Lain';
    }
  };

  const setStatus = async (id, { status }) => {
    try {
      let alasan_penolakan = null;

      if (status === 'D') {
        alasan_penolakan = prompt('Alasan penolakan?');
        console.log(alasan_penolakan);
      }

      const data = { status, alasan: alasan_penolakan };

      const res = await axios.patch(`https://sidede-api.vercel.app/pendaftaran/${id}`, data);
      alert(res.data.message);
      window.location.reload();
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <>
      <div className='px-10 py-5 space-y-6'>
        <h2>Pendaftaran</h2>

        <div className='w-full overflow-x-auto'>
          <table className='mx-auto table-auto text-nowrap'>
            <thead>
              <tr>
                <th>No</th>
                <th>Action</th>
                <th>ID Pendaftaran</th>
                <th>NIK</th>
                <th>Waktu</th>
                <th>Lokasi</th>
                <th>Tipe</th>
                <th>Donor Ke</th>
                <th>Tanggal Akhir Donor</th>
              </tr>
            </thead>

            <tbody>
              {data?.map((v, i) => {
                return (
                  <tr key={i}>
                    <td>{(page - 1) * limit + (i + 1)}</td>
                    <td>
                      <span className='flex gap-1'>
                        <Button onclick={() => showDetail(v)} className={'bg-brand text-light'}>
                          <FontAwesomeIcon icon={'fas fa-circle-info'} />
                        </Button>

                        <Button
                          link={`/pelayanan/${v.status.screening ? '' : 'screening'}`}
                          state={{ id: v.id_pendaftaran }}
                          className={`${
                            v.status.screening
                              ? 'border border-dark cursor-not-allowed '
                              : 'bg-brand text-light'
                          }`}
                        >
                          <FontAwesomeIcon icon={'fas fa-check-double'} />
                        </Button>

                        <Button
                          link={`/pelayanan/${v.status.pemeriksaan ? '' : 'pemeriksaan'}`}
                          state={{ id: v.id_pendaftaran }}
                          className={`${
                            v.status.pemeriksaan
                              ? 'border border-dark cursor-not-allowed '
                              : 'bg-brand text-light'
                          }`}
                        >
                          <FontAwesomeIcon icon={'fas fa-stethoscope'} />
                        </Button>
                      </span>
                    </td>
                    <td>{v.id_pendaftaran}</td>
                    <td>{v.nik}</td>
                    <td>{formatDate(v.tgl_donor)}</td>
                    <td>{v.lokasi}</td>
                    <td>{v.tipe}</td>
                    <td>{v.donor_ke}</td>
                    <td>{formatDate(v.tgl_akhir_donor)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <span className='flex justify-center w-full gap-2'>
          <Button onclick={() => setPage(pagination.prev)}>
            <FontAwesomeIcon icon={'fas fa-arrow-left'} />
            &nbsp;Sebelumnya
          </Button>
          <Button onclick={() => setPage(pagination.next)}>
            Berikutnya&nbsp;
            <FontAwesomeIcon icon={'fas fa-arrow-right'} />
          </Button>
        </span>
      </div>

      <dialog
        className='absolute top-0 left-0 flex-col items-center w-full h-screen gap-10 py-10 overflow-y-scroll bg-dark/50 open:flex'
        ref={detailRef}
      >
        <hgroup className='text-center text-light'>
          <h2>Detail</h2>
          <p>ID Pendaftaran : {detail?.id_pendaftaran}</p>
        </hgroup>

        <div className='relative grid w-3/4 grid-cols-2 gap-10 p-10 pt-16 bg-light rounded-xl'>
          <Button onclick={closeDetail} className={'absolute right-6 top-6'}>
            <FontAwesomeIcon icon={'fas fa-xmark'} size='lg' />
          </Button>

          {/* Kolom Kiri */}
          <table className='w-full *:*:border-none'>
            <tbody>
              <tr>
                <td className='font-semibold'>NIK</td>
                <td>:</td>
                <td>{detail?.nik}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Nama Lengkap</td>
                <td>:</td>
                <td>{detail?.nama}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Alamat Rumah</td>
                <td>:</td>
                <td>{detail?.alamat}</td>
              </tr>
              <tr>
                <td className='font-semibold'>No Telp Rumah/Hp</td>
                <td>:</td>
                <td>{detail?.telp_rumah}</td>
              </tr>
            </tbody>
          </table>

          {/* Kolom Kanan */}
          <table className='w-full *:*:border-none'>
            <tbody>
              <tr>
                <td className='font-semibold'>No Kartu Donor</td>
                <td>:</td>
                <td>{detail?.no_kartu}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Jenis Kelamin</td>
                <td>:</td>
                <td>{detail?.jenis_kelamin === 'L' ? 'Laki-laki' : 'Perempuan'}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Kelurahan</td>
                <td>:</td>
                <td>{detail?.kelurahan}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Kecamatan</td>
                <td>:</td>
                <td>{detail?.kecamatan}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Kota</td>
                <td>:</td>
                <td>{detail?.kota}</td>
              </tr>
            </tbody>
          </table>

          {/* Kolom Tengah-Bawah */}
          <table className='col-span-2 w-full *:*:border-none'>
            <tbody>
              <tr>
                <td className='w-5/12 font-semibold'>Alamat Kantor</td>
                <td className='w-1/12'>:</td>
                <td>{detail?.alamat_kantor}</td>
              </tr>
              <tr>
                <td className='w-5/12 font-semibold'>No Telp Kantor/Email</td>
                <td className='w-1/12'>:</td>
                <td>{detail?.email}</td>
              </tr>
              <tr>
                <td className='w-5/12 font-semibold'>Pekerjaan</td>
                <td className='w-1/12'>:</td>
                <td>{setPekerjaan(detail?.pekerjaan)}</td>
              </tr>
              <tr>
                <td className='w-5/12 font-semibold'>Tempat Kelahiran</td>
                <td className='w-1/12'>:</td>
                <td>{detail?.tempat_lahir}</td>
              </tr>
              <tr>
                <td className='w-5/12 font-semibold'>Tgl/ Bln/ Thn Kelahiran</td>
                <td className='w-1/12'>:</td>
                <td>{formatDate(detail?.tgl_lahir)}</td>
              </tr>
              <tr>
                <td className='w-5/12 font-semibold'>Penghargaan yang telah diterima</td>
                <td className='w-1/12'>:</td>
                <td>{detail?.penghargaan ? detail.penghargaan : '-'}</td>
              </tr>
              <tr>
                <td className='w-5/12 font-semibold'>
                  Bersediakah saudara donor pada waktu bulan puasa
                </td>
                <td className='w-1/12'>:</td>
                <td>{detail?.donor_puasa == 1 ? 'Ya' : 'Tidak'}</td>
              </tr>
              <tr>
                <td className='w-5/12 font-semibold'>
                  Bersediakah saudara donor saat dibutuhkan untuk keperluan tertentu (di luar donor
                  rutin)
                </td>
                <td className='w-1/12'>:</td>
                <td>{detail?.donor_sukarela == 1 ? 'Ya' : 'Tidak'}</td>
              </tr>
            </tbody>
          </table>

          {/* Informasi Tambahan */}
          <table className='col-span-2 w-full *:*:border-none'>
            <tbody className='flex'>
              <tr>
                <td className='font-semibold'>Donor yang terakhir tanggal</td>
                <td>:</td>
                <td>{detail?.tgl_akhir_donor ? formatDate(detail.tgl_akhir_donor) : '-'}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Sekarang donor yang ke</td>
                <td>:</td>
                <td>{detail?.donor_ke}</td>
              </tr>
            </tbody>
          </table>

          <div className='flex justify-center col-span-2 gap-4'>
            <Button
              className={'bg-brand text-light'}
              onclick={() => setStatus(detail.id_pendaftaran, { status: 'D' })}
            >
              Tolak
            </Button>
            <Button
              className={'border border-dark'}
              onclick={() => setStatus(detail.id_pendaftaran, { status: 'A' })}
            >
              Terima
            </Button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DashboardPelayanan;
