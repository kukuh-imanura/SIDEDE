// import { ButtonInstall } from './components/btn';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button, { ButtonInstall } from './components/Button';
import { CardProfile } from './components/Card';
import { useRef } from 'react';
// import { useForm } from 'react-hook-form';

const Landing = () => {
  const MobileMenuRef = useRef();

  const toggleMenu = () => {
    const elem = MobileMenuRef.current;
    elem.classList.toggle('hidden');
  };

  return (
    <>
      <nav className='px-6 py-4 flex justify-between items-center sticky top-0 backdrop-blur-sm'>
        <span className='flex items-center gap-2'>
          <img className='w-12 h-12' src='/icon/icon-192x192.png' alt='Red Cross' />
          <h2>UTD-PMI</h2>
        </span>

        <nav className='hidden md:flex items-center'>
          <Button link='#MU'>Mobile Unit</Button>
          <Button link='#About'>Tentang Kami</Button>
          <Button link='#Contact'>Kontak</Button>

          <span className='flex gap-2'>
            <Button link={'/login'} className='bg-brand text-light'>
              Login
            </Button>
          </span>
        </nav>

        <Button className={'md:hidden'} onclick={toggleMenu}>
          <FontAwesomeIcon icon={'fas fa-bars'} size='xl' />
        </Button>

        <div className='w-full h-screen bg-light absolute top-0 left-0 hidden' ref={MobileMenuRef}>
          <div className='px-6 py-4 flex justify-between items-center'>
            <span className='flex items-center gap-2'>
              <img className='w-12 h-12' src='/icon/icon-192x192.png' alt='Red Cross' />
              <h2>UTD-PMI</h2>
            </span>

            <Button className={'md:hidden'} onclick={toggleMenu}>
              <FontAwesomeIcon icon={'fas fa-xmark'} size='xl' />
            </Button>
          </div>

          <nav className='flex flex-col px-6 py-10 gap-2'>
            <Button link={'/daftar'} className='bg-brand text-light text-center'>
              Daftar
            </Button>
            <Button link={'/login'} className='border-dark border mb-6 text-center'>
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
        className='flex flex-col items-center justify-center h-screen -mt-20 gap-4'
      >
        <img
          className='h-full absolute -z-10 grayscale brightness-125 blur-sm object-cover'
          src='/illustration/Blood donation-pana.png'
          alt='Blood Donor'
        />

        <hgroup className='text-center'>
          <h1>SIDEDE</h1>
          <h2>Sistem Informasi Donor Darah</h2>
        </hgroup>

        <ButtonInstall />
      </section>

      <section id='MU' className='py-20 px-10 flex flex-col items-center gap-10'>
        <h2>Mobile Unit</h2>

        <div className='overflow-x-auto w-full flex justify-center'>
          <table className='table-auto text-nowrap'>
            <colgroup>
              <col className='text-center' />
              <col />
              <col />
            </colgroup>

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
                <td>Desa Lab. Jambu</td>
                <td>Senin, 21 Oktober 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id='About' className='flex flex-col lg:flex-row items-center justify-center px-10'>
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

      <section className='px-10 md:flex gap-10'>
        <article className='space-y-3 pt-6'>
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

        <article className='space-y-3 pt-6'>
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
        <h2 className='text-center mb-10'>Tim Kami</h2>

        <div className='flex flex-wrap gap-12 justify-center'>
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
        className='bg-brand/10 p-10 pt-20 lg:pt-10 flex flex-col items-center text-center lg:text-left'
      >
        <div className='flex flex-col lg:flex-row justify-between gap-10 w-full'>
          <span className='flex gap-2 h-fit items-center justify-center'>
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

        <hr className='my-6 border-dark/50 w-full' />

        <a
          className='text-center block'
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
