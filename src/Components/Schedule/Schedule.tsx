import scheduleData from '../../../public/schedule.json';
import styles from '../../styles/Schedule.module.scss';

const Schedule = () => {
  const weeklySchedule = scheduleData.slice(0, 5);

  return (
    <div className={styles['schedule']}>
    {weeklySchedule.map(day => (
      <div className={styles['schedule-day']} key={day.date}>
        <h2 className={styles['schedule-day_name']}>{day.name}</h2>
        <ul className={styles['schedule-day_name_list']}>
          {day.schedule.map((session, index) => (
            <li className={styles['schedule-day_name_list_item']} key={index}>
              <span className={styles['schedule-day_name_list_item_time']}>{session.time}</span>
               <span className={styles['schedule-day_name_list_item_activity']}>{session.activity}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  )
}

export default Schedule;
