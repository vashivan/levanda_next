import styles from '../../styles/MainPage.module.scss';
import Header from "../Header/Header"
import OurServices from "../OurServices/OurSrvices"
import PhotoSection from '../PhotoSection/PhotoSection';
import OurTrainers from '../OurTrainers/OurTrainers';
import Form from '../Form/Form';
import { Trainer } from '../../Utils/Types';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

type Props = {
  trainers: Trainer[]
}

const MainPage: React.FC<Props> = ({ trainers }) => {
  return (
    <div className={styles['mainPage']}>
      <ScrollToTop />
      <Header />
      <OurServices />
      <PhotoSection />
      <OurTrainers trainers={trainers} />
      <Form />
    </div>
  )
}

export default MainPage;