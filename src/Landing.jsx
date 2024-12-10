// import { ButtonInstall } from './components/btn';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonInstall } from './components/Button';
import { CardProfile } from './components/Card';

const Landing = () => {
  return (
    <>
      <nav className='px-6 py-4 flex justify-between items-center sticky top-0 backdrop-blur-sm'>
        <span className='flex items-center gap-2'>
          <img className='w-12 h-12' src='/icon/icon-192x192.png' alt='Red Cross' />
          <p className='text-3xl font-extrabold'>UTD-PMI</p>
        </span>

        <nav>
          <Button link='#MU'>Mobile Unit</Button>
          <Button link='#About'>Tentang Kami</Button>
          {/* <Button link='#'>Berita</Button> */}
          <Button link='#Contact'>Kontak</Button>

          <span className='space-x-2'>
            <Button className='border-dark border'>Login</Button>
            <Button className='bg-dark text-light'>Daftar</Button>
          </span>
        </nav>
      </nav>

      <section
        id='Hero'
        className='flex flex-col items-center justify-center h-screen -mt-20 gap-4'
      >
        <img
          className='h-full absolute -z-10 contrast-50 blur-sm'
          src='/illustration/Blood donation-pana (1).png'
          alt='Blood Donor'
        />

        <hgroup className='text-center'>
          <h1>SIDEDE</h1>
          <h2>Sistem Informasi Donor Darah</h2>
        </hgroup>

        <ButtonInstall />
      </section>

      <section id='MU' className='pt-20 flex flex-col items-center gap-10'>
        <h2>Mobile Unit</h2>

        <table className='table-auto'>
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
      </section>

      <section id='About' className='h-screen flex items-center px-10'>
        <img
          className='h-4/5'
          src='/illustration/Blood donation-amico (1).png'
          alt='Blood Donation'
        />

        <article className='space-y-3'>
          <h2 className='mb-6'>Tentang Kami</h2>
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

      <section className='px-10 flex gap-10'>
        <article className='space-y-3'>
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

        <article className='space-y-3'>
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

      <section className='pt-20 p-10'>
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

      <footer id='Contact' className='bg-brand/25 p-10'>
        <div className='flex justify-between'>
          <span className='flex gap-2 h-fit items-center'>
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

        <hr className='my-6 border-dark/50' />

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