import axios from 'axios';
import { CardStatic } from '../components/Card';
import { useEffect, useState } from 'react';

const DashboardAdmin = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get('https://sidede-api.vercel.app/helper/count');
      setData(res.data.result);
    } catch (err) {
      console.error(err.message);
      alert(err.response?.data.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='flex flex-wrap justify-center gap-10 p-10'>
      <CardStatic icon={'fas fa-user'} tittle={data?.pendonor || 0} subtitle={'Pendonnor'} />
      <CardStatic icon={'fas fa-lock'} tittle={data?.hak_akses || 0} subtitle={'Hak Akses'} />
      <CardStatic icon={'fas fa-pen'} tittle={data?.pendaftaran || 0} subtitle={'Pendaftaran'} />
      <CardStatic
        icon={'fas fa-check-double'}
        tittle={data?.jawaban_screening || 0}
        subtitle={'Screening'}
      />
      <CardStatic
        icon={'fas fa-stethoscope'}
        tittle={data?.pemeriksaan_kesehatan || 0}
        subtitle={'Pemeriksaan'}
      />
      {/* <CardStatic icon={'fas fa-clock-rotate-left'} tittle={data?.pendonor} subtitle={'Riwayat'} /> */}
      <CardStatic
        icon={'fas fa-truck-medical'}
        tittle={data?.mobile_unit || 0}
        subtitle={'Mobile Unit'}
      />
    </div>
  );
};

export default DashboardAdmin;
