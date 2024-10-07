// import RegistrationClass from "../RegistrationClass/RegistrationClass";
import Schedule from "../Schedule/Schedule";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import styles from '../../styles/SchedulePage.module.scss';

const SchedulePage = () => {
  return (
    <div className={styles['schedulePage']}>
      <ScrollToTop />
      <h1 className={styles['schedulePage_title']}>Розклад вересень 2024</h1>
      <Schedule />
      {/* <RegistrationClass /> */}
    </div>
  )
}

export default SchedulePage;