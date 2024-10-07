import styles from '../../styles/Intro.module.scss';

const Intro = () => {
  return (
    <div className={styles['intro']}>
      <h1 className={styles['intro-title']}>
        Підвищуйте свою фізичну форму в студії повітряної гімнастики Lavanda
      </h1>
      <h2 className={styles['intro-text']}>
        Приєднуйтесь до нас у студії Lavanda в місті Бровари. Наші досвідчені інструктори навчать вас технікам повітряної гімнастики на шовках, допомагаючи зміцнити силу та покращити гнучкість. Відкрийте для себе радість повітряних мистецтв разом з нами.
      </h2>
      <div className={styles['intro-img']}></div>
    </div>
  );
};

export default Intro;
