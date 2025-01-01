import { CardStatic } from '../components/Card';

const DashboardAdmin = () => {
  return (
    <div className='flex flex-wrap justify-center gap-10 p-10'>
      <CardStatic icon={'fas fa-user'} tittle={'34'} subtitle={'Pendonnor'} />
      <CardStatic icon={'fas fa-lock'} tittle={'34'} subtitle={'Hak Akses'} />
      <CardStatic icon={'fas fa-pen'} tittle={'34'} subtitle={'Pendaftaran'} />
      <CardStatic icon={'fas fa-check-double'} tittle={'34'} subtitle={'Screening'} />
      <CardStatic icon={'fas fa-stethoscope'} tittle={'34'} subtitle={'Pemeriksaan'} />
      {/* <CardStatic icon={'fas fa-clock-rotate-left'} tittle={'34'} subtitle={'Riwayat'} /> */}
      <CardStatic icon={'fas fa-truck-medical'} tittle={'34'} subtitle={'Mobile Unit'} />
    </div>
  );
};

export default DashboardAdmin;
