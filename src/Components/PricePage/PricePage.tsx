import styles from '../../styles/PricePage.module.scss';
import PricingSection from "../PricingSection/PricingSection"
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const PricePage = () => {
  return (
    <div className={styles['price-page']}>
      <ScrollToTop />
      <PricingSection />
    </div>
  );
};

export default PricePage;