// import { ButtonInstall } from './components/btn';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button, { ButtonInstall } from './components/Button';
import { CardProfile } from './components/Card';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
// import { useForm } from 'react-hook-form';

const Landing = () => {
  const MobileMenuRef = useRef();
  const [data, setData] = useState([]);
  const limit = 7;

  const toggleMenu = () => {
    const elem = MobileMenuRef.current;
    elem.classList.toggle('hidden');
  };

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://sidede-api.vercel.app/mobileunit?limit=${limit}&filter=new`
      );
      setData(res.data.result || []);
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
  }, []);

  return (
    <>
      <nav className='sticky top-0 flex items-center justify-between px-6 py-4 backdrop-blur-sm'>
        <span className='flex items-center gap-2'>
          <img className='w-12 h-12' src='/icon/icon-192x192.png' alt='Red Cross' />
          <h2>UTD-PMI</h2>
        </span>

        <nav className='items-center hidden md:flex'>
          <Button link='#MU'>Mobile Unit</Button>
          <Button link='#About'>Tentang Kami</Button>
          <Button link='#Contact'>Kontak</Button>

          <span className='flex gap-2'>
            <Button link={'/login'} className='border border-dark'>
              Login
            </Button>
            <Button link={'/daftar'} className='text-center bg-brand text-light'>
              Daftar
            </Button>
          </span>
        </nav>

        <Button className={'md:hidden'} onclick={toggleMenu}>
          <FontAwesomeIcon icon={'fas fa-bars'} size='xl' />
        </Button>

        <div className='absolute top-0 left-0 hidden w-full h-screen bg-light' ref={MobileMenuRef}>
          <div className='flex items-center justify-between px-6 py-4'>
            <span className='flex items-center gap-2'>
              <img className='w-12 h-12' src='/icon/icon-192x192.png' alt='Red Cross' />
              <h2>UTD-PMI</h2>
            </span>

            <Button onclick={toggleMenu}>
              <FontAwesomeIcon icon={'fas fa-xmark'} size='xl' />
            </Button>
          </div>

          <nav className='flex flex-col gap-2 px-6 py-10'>
            <Button link={'/daftar'} className='text-center bg-brand text-light'>
              Daftar
            </Button>
            <Button link={'/login'} className='mb-6 text-center border border-dark'>
              Login
            </Button>

            <Button link='#MU' onclick={toggleMenu}>
              Mobile Unit
            </Button>
            <Button link='#About' onclick={toggleMenu}>
              Tentang Kami
            </Button>
            <Button link='#Contact' onclick={toggleMenu}>
              Kontak
            </Button>
          </nav>
        </div>
      </nav>

      <section
        id='Hero'
        className='flex flex-col items-center justify-center h-screen gap-4 -mt-20'
      >
        <img
          className='absolute object-cover h-full -z-10 grayscale brightness-125 blur-sm'
          src='/illustration/Blood donation-pana.png'
          alt='Blood Donor'
        />

        <hgroup className='text-center'>
          <h1>SIDEDE</h1>
          <h2>Sistem Informasi Donor Darah</h2>
        </hgroup>

        <ButtonInstall />
      </section>

      <section id='MU' className='flex flex-col items-center gap-10 px-10 py-20'>
        <h2>Mobile Unit</h2>

        <div className='flex justify-center w-full overflow-x-auto'>
          <table className='table-auto text-nowrap'>
            <thead>
              <tr>
                <th>No</th>
                <th>Waktu</th>
                <th>Lokasi</th>
              </tr>
            </thead>

            <tbody>
              {data && data.length > 0 ? (
                data.map((v, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{formatDate(v.jadwal)}</td>
                    <td>{v.lokasi}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} style={{ textAlign: 'center' }}>
                    Tidak ada data terbaru
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section id='About' className='flex flex-col items-center justify-center px-10 lg:flex-row'>
        <img
          className='object-cover sm:w-96'
          src='/illustration/Blood donation-amico (1).png'
          alt='Blood Donation'
        />

        <article className='space-y-3'>
          <h2 className='mb-6 text-center lg:text-left'>Tentang Kami</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nostrum temporibus commodi
            unde perspiciatis eos in aliquid eum pariatur error cum sint, eligendi quia incidunt
            magni autem, aut blanditiis vitae.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dolore odio animi, labore
            dolorem amet, neque ullam natus delectus eaque recusandae accusantium adipisci assumenda
            voluptatem. Quos voluptatem nostrum velit deleniti!
          </p>
        </article>
      </section>

      <section className='gap-10 px-10 md:flex'>
        <article className='pt-6 space-y-3'>
          <h2 className='mb-6 text-center'>Visi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum neque incidunt,
            necessitatibus laboriosam excepturi reiciendis deleniti mollitia maxime voluptatem,
            atque quibusdam quod eum alias tempore libero qui laborum porro consectetur!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores dolorem tempora sed
            perspiciatis delectus deserunt reiciendis laudantium culpa, magnam voluptatum est
            exercitationem quisquam praesentium facere tempore repudiandae aperiam pariatur? Omnis.
          </p>
        </article>

        <article className='pt-6 space-y-3'>
          <h2 className='mb-6 text-center'>Misi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum neque incidunt,
            necessitatibus laboriosam excepturi reiciendis deleniti mollitia maxime voluptatem,
            atque quibusdam quod eum alias tempore libero qui laborum porro consectetur!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores dolorem tempora sed
            perspiciatis delectus deserunt reiciendis laudantium culpa, magnam voluptatum est
            exercitationem quisquam praesentium facere tempore repudiandae aperiam pariatur? Omnis.
          </p>
        </article>
      </section>

      <section className='p-10'>
        <h2 className='mb-10 text-center'>Tim Kami</h2>

        <div className='flex flex-wrap justify-center gap-12'>
          <CardProfile img='/profile/man.png' name='Ade Ikhsan Jaya S.Ap' desc='Kabid P2D2S' />
          <CardProfile img='/profile/woman.png' name='Nama' desc='jabatan' />
          <CardProfile />
          <CardProfile />
          <CardProfile />
          <CardProfile />
          <CardProfile />
        </div>
      </section>

      <footer
        id='Contact'
        className='flex flex-col items-center p-10 pt-20 text-center bg-brand/10 lg:pt-10 lg:text-left'
      >
        <div className='flex flex-col justify-between w-full gap-10 lg:flex-row'>
          <span className='flex items-center justify-center gap-2 h-fit'>
            <img className='w-12 h-12' src='/icon/icon-192x192.png' alt='Red Cross' />
            <p className='text-3xl font-extrabold'>UTD-PMI</p>
          </span>

          <div className='flex flex-col'>
            <b className='mb-3'>Social</b>
            <a href='https://www.facebook.com/'>
              <FontAwesomeIcon icon={'fab fa-facebook'} />
              &nbsp;Facebook
            </a>
            <a href='https://www.instagram.com/'>
              <FontAwesomeIcon icon={'fab fa-instagram'} />
              &nbsp;Instagram
            </a>
            <a href='https://www.twitter.com/'>
              <FontAwesomeIcon icon={'fab fa-x-twitter'} />
              &nbsp;Twitter
            </a>
          </div>

          <div className='flex flex-col'>
            <b className='mb-3'>More</b>
            <a href='/privacy-policy'>Privacy Policy</a>
            <a href='/terms-of-service'>Terms of Service</a>
            <a href='/contact'>Contact Us</a>
          </div>

          <div className='flex flex-col'>
            <b className='mb-3'>Attribution</b>
            <p>
              Icon & Sticker by
              <a href='https://www.flaticon.com/'> Flaticon</a>
            </p>
            <p>
              Illustration by
              <a href='https://storyset.com/'> Storyset</a>
            </p>
          </div>
        </div>

        <hr className='w-full my-6 border-dark/50' />

        <a
          className='block text-center'
          href='http://github.com/kukuh-imanura'
          target='_blank'
          rel='noopener noreferrer'
        >
          © Copyright 2024 Kukuh Imanura
        </a>
      </footer>
    </>
  );
};

export default Landing;
