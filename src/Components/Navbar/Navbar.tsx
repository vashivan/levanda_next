import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';
import Menu from '../Menu/Menu';
import styles from '../../styles/Navbar.module.scss';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <img className={styles.navbarImg} src="/logo.PNG" alt="logo" />
      </Link>
      <ul className={styles.navbarList}>
        <li className={styles.navbarListItem}>
          <Link href="/about">Про студію</Link>
        </li>
        <li className={styles.navbarListItem}>
          <Link href="/price">Ціни</Link>
        </li>
        <li className={styles.navbarListItem}>
          <Link href="/schedulePage">Розклад занять</Link>
        </li>
        <li className={styles.navbarListItem}>
          <Link href="/trainersPage">Наші тренери</Link>
        </li>
        <li className={styles.navbarListItem}>
          <Link href="/newsPage">Наші новини</Link>
        </li>
        <li className={styles.navbarListItem}>
          <Link href="/registrationPage">Запис на заняття</Link>
        </li>
      </ul>
      <button
        className={styles.navbarMenuBtn}
        onClick={toggleMenu}
      >
        {/* Icon or text for menu button */}
      </button>

      <div ref={menuRef} className={`${styles['menu']} ${isOpen ? styles['open'] : ''}`}>
        <CSSTransition
          in={isOpen}
          timeout={500}
          unmountOnExit
          nodeRef={menuRef}
        >
          <Menu toggleMenu={toggleMenu} isOpen={isOpen} />
        </CSSTransition>
      </div>
    </nav>
  );
};

export default Navbar;
