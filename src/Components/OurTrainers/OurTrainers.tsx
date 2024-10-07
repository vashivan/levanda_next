import styles from '../../styles/OurTrainers.module.scss';
import { Trainer } from "../../Utils/Types";
import TrainerCard from "../TrainerCard/TrainerCard";

type Props = {
  trainers: Trainer[]
}

const OurTrainers: React.FC<Props> = ({ trainers }) => {
  return (
    <div className={styles['ourTrainers']}>
      <h1 className={styles['ourTrainers-title']}>Наші тренери</h1>
      {trainers.map((trainer: Trainer) => 
        <TrainerCard key={trainer.id} trainer={trainer} />
      )}
    </div>
  )
}

export default OurTrainers;