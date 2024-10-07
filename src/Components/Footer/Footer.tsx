import Link from 'next/link';
import styles from '../../styles/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles['footer']}>
      <nav className={styles['footer-navbar']}>
        <ul className={styles['footer-navbar-list']}>
          <li className={styles['footer-navbar-list-item']}>
            <Link
              className={styles['footer-navbar-list-item-link']} href="/"
            >
              Головна
            </Link>
          </li>
          <li className={styles['footer-navbar-list-item']}>
            <Link
              className={styles['footer-navbar-list-item-link']}
              href="/about"
            >
              Про студію
            </Link>
          </li>
          <li className={styles['footer-navbar-list-item']}>
            <Link
              className={styles['footer-navbar-list-item-link']}
              href="/trainers"
            >
              Наші тренери
            </Link>
          </li>
          <li className={styles['footer-navbar-list-item']}>
            <Link
              className={styles['footer-navbar-list-item-link']}
              href="/schedule"
            >
              Розклад занять
            </Link>
          </li>
          <li className={styles['footer-navbar-list-item']}>
            <Link
              className={styles['footer-navbar-list-item-link']}
              href="/news"
            >
              Наші новини
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles['footer-contact']}>
        <div className={styles['footer-contact__adress']}>
          <h3>Наша адреса:</h3>
          <a href="https://maps.app.goo.gl/AmEnf7zr4LycaX8m7">
            м. Бровари, вул. Соборна 21
          </a>
        </div>

        <div className={styles['footer-contact__phone']}>
          <h3>Телефон:</h3>
          <a href="tel:+380686471557">+38 (068) 647-15-57</a>
        </div>

        <div className={styles['footer-contact__social']}>
          <h3>Соціальні мережі:</h3>
          <div className={styles['footer-contact__social-icons']}>
            <a className={styles['footer-contact__social-icons_instagram']}
              href="https://www.instagram.com/lavanda_studio_2023/">
            </a>
            <a className={styles['footer-contact__social-icons_telegram']}
              href="https://t.me/+kQrH4E0iRMY0ZmJi">
            </a>
            <a className={styles['footer-contact__social-icons_viber']}
              href="https://www.instagram.com/">
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
