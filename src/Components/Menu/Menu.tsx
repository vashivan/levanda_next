import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Menu.module.scss';

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const Menu: React.FC<Props> = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`${styles['menu']} ${isOpen ? styles['open'] : ''}`}>
      <ul className={styles['navbar-nav']}>
        <li className={styles['nav-item']}>
          <Link href="/" className={styles['menu-nav-link']} onClick={toggleMenu}>
            Головна
          </Link>
        </li>
        <li className={styles['nav-item']}>
          <Link href="/about" className={styles['menu-nav-link']} onClick={toggleMenu}>
            Про нас
          </Link>
        </li>
        <li className={styles['nav-item']}>
          <Link href="/price" className={styles['menu-nav-link']} onClick={toggleMenu}>
            Ціни
          </Link>
        </li>
        <li className={styles['nav-item']}>
          <Link href="/trainersPage" className={styles['menu-nav-link']} onClick={toggleMenu}>
            Наші тренери
          </Link>
        </li>
        <li className={styles['nav-item']}>
          <Link href="/schedulePage" className={styles['menu-nav-link']} onClick={toggleMenu}>
            Розклад занять
          </Link>
        </li>
        <li className={styles['nav-item']}>
          <Link href="/newsPage" className={styles['menu-nav-link']} onClick={toggleMenu}>
            Наші новини
          </Link>
        </li>
        <li className={styles['nav-item']}>
          <Link href="/registrationPage" className={styles['menu-nav-link']} onClick={toggleMenu}>
            Запис на заняття
          </Link>
        </li>
      </ul>
      <button className={styles['menu-button']} onClick={toggleMenu}></button>
    </div>
  );
};

export default Menu;
