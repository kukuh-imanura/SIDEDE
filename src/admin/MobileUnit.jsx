import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

const MobileUnit = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const limit = 5;

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://sidede-api.vercel.app/mobileunit?limit=${limit}&page=${page}`
      );
      setData(res.data.result || []);
      setPagination(res.data.pagination);
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  const deleteData = async (id) => {
    try {
      const res = await axios.delete(`https://sidede-api.vercel.app/mobileunit/${id}`);
      alert(res.data.message);
      getData();
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  const formatDate = (date) => {
    const formattedDate = dayjs(date).add(8, 'hour').format('YYYY-MM-DD');
    return formattedDate;
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className='p-10 space-y-5'>
      <span className='flex items-center justify-between'>
        <h2>Data Mobile Unit</h2>
        <Button link={'/admin/mobileunit/tambah'} className={'bg-dark text-light'}>
          Tambah
        </Button>
      </span>

      <div className='flex justify-center w-full overflow-x-auto'>
        <table className='table-auto text-nowrap'>
          <thead>
            <tr>
              <th>No</th>
              <th>Action</th>
              <th>Waktu</th>
              <th>Lokasi</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((v, i) => {
              return (
                <tr key={i}>
                  <td>{(page - 1) * limit + (i + 1)}</td>
                  <td>
                    <span className='flex gap-1'>
                      <Button
                        className={'border border-dark'}
                        link={'/admin/mobileunit/ubah'}
                        state={{ id: v.id_mu }}
                      >
                        <FontAwesomeIcon icon={'fas fa-pencil'} />
                      </Button>
                      <Button className={'bg-brand text-light'} onclick={() => deleteData(v.id_mu)}>
                        <FontAwesomeIcon icon={'fas fa-trash-can'} />
                      </Button>
                    </span>
                  </td>
                  <td>{formatDate(v.jadwal)}</td>
                  <td>{v.lokasi}</td>
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
  );
};

export default MobileUnit;
