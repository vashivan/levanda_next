import React, { useState } from 'react';
import styles from '../../styles/StartPage.module.scss';

type Props = {
  closePage: () => void;
};

const StartPage: React.FC<Props> = ({ closePage }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closePage();
    }, 500);
  };

  return (
    <div className={`${styles.startPage} ${isClosing ? styles.startPageClosing : ''}`}>
      <div className={styles.startPageBackground} />
      <div className={styles.startPageContainer}>
        <img className={styles.startPageContainerLogo} src="logo.PNG" alt="logo" />
        <h1 className={styles.startPageContainerTitle}>Відкрийте свою внутрішню грацію</h1>
        <h3 className={styles.startPageContainerSlogan}>
          Приєднуйтеся до Лаванди в місті Бровари і навчіться мистецтву разом з досвідченими тренерами. Віднайдіть силу, гнучкість та грацію в кожному русі.
        </h3>
        <button className={styles.startPageContainerBtnOff} onClick={handleClose}>
          Дізнатися більше
        </button>
      </div>
    </div>
  );
};

export default StartPage;
