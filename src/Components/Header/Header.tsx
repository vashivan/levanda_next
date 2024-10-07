import styles from '../../styles/Header.module.scss';
import Intro from '../Intro/Intro';

const Header = () => {
  return (
    <div className={styles.header}>
      <Intro />
    </div>
  )
}

export default Header;