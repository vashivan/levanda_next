import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/ScrollToTop.module.scss';

const ScrollToTop = () => {
  const { pathname } = useRouter(); // Використовуємо useRouter для Next.js
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]); // Реагуємо на зміну шляху

  return (
    <div className={styles['scrollDiv']} ref={topRef}></div>
  );
};

export default ScrollToTop;
