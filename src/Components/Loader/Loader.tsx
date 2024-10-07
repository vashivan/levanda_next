import styles from '../../styles/Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['loader']}>
        <span className={styles['loader-text']}>Завантаження...</span>
        <span className={styles['load']}></span>
      </div>
    </div>
  );
};

export default Loader;