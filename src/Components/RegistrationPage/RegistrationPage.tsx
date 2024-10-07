import RegistrationClass from '../RegistrationClass/RegistrationClass';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import styles from '../../styles/RegistrationPage.module.scss';

const RegistrationPage = () => {
  return (
    <div className={styles['registration-page']}>
      <ScrollToTop />
      <RegistrationClass />
    </div>
  );
};

export default RegistrationPage;