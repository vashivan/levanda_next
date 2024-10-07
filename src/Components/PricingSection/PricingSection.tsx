import React from 'react';
import styles from '../../styles/PricingSection.module.scss';

const PricingSection: React.FC = () => {
  return (
    <section className={styles.pricingSection}>
      <h2 className={styles.pricingTitle}>Ціни на 2024 рік</h2>
      <div className={styles.pricingContainer}>
        <div className={styles.pricingItem}>
          <h3 className={styles.pricingPlan}>Повітряна гімнастика</h3>
          <p className={styles.pricingAge}>Діти 6-16 років</p>
          <ul className={styles.pricingList}>
            <li>1 заняття - 300 грн</li>
            <li>4 заняття - 900 грн</li>
            <li>8 занять - 1450 грн</li>
          </ul>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.pricingPlan}>Гімнастика + хореографія</h3>
          <p className={styles.pricingAge}>Діти 3-6 років</p>
          <ul className={styles.pricingList}>
            <li>1 заняття - 200 грн</li>
            <li>4 заняття - 700 грн</li>
            <li>8 заняття - 1100 грн</li>
          </ul>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.pricingPlan}>Стретчинг (на полотнах)</h3>
          <p className={styles.pricingAge}>Дорослі</p>
          <ul className={styles.pricingList}>
            <li>1 заняття - 300 грн</li>
            <li>4 заняття - 1000 грн</li>
            <li>8 занять - 1600 грн</li>
          </ul>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.pricingPlan}>Стретчинг</h3>
          <p className={styles.pricingAge}>Дорослі</p>
          <ul className={styles.pricingList}>
            <li>1 заняття - 250 грн</li>
            <li>8 занять - 1500 грн</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
