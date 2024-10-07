import { Trainer } from "../../Utils/Types";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import TrainerInfo from "../TrainerInfo/TrainerInfo";
import styles from '../../styles/TrainersPage.module.scss'
import trainers from '../../Info/trainers.json';

const TrainersPage = () => {
  return (
    <div className={styles['trainersPage']}>
      <ScrollToTop />
      {trainers.map(trainer => (
        <TrainerInfo key={trainer.id} trainer={trainer} />
      ))}
    </div>
  )
}

export default TrainersPage;