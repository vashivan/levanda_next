import React, { useState, useEffect } from 'react';
import styles from '../../styles/RegistrationClass.module.scss';
import axios from 'axios';
import MiniLoader from '../MiniLoader/MiniLoader';

type ScheduleSlot = {
  time: string;
  activity: string;
  availableSpots: number;
};

const RegistrationClass: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [availableTimes, setAvailableTimes] = useState<ScheduleSlot[]>([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [isTimeSelected, setIsTimeSelected] = useState(false);
  const [activityInfo, setActivityInfo] = useState<string | undefined>('');
  const [formData, setFormData] = useState({
    day: '',
    activity: '',
    time: '',
    name: '',
    contact: ''
  });
  const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    if (selectedDate) {
      fetchScheduleForDate(selectedDate);
    }
  }, [selectedDate]);

  const fetchScheduleForDate = async (date: string) => {
    try {
      const response = await axios.get('/api/updateSchedule');
      const schedule = response.data;

      const selectedDay = schedule.find((day: { date: string }) => day.date === date);
      if (selectedDay) {
        setAvailableTimes(selectedDay.schedule);
      } else {
        setAvailableTimes([]);
      }
    } catch (error) {
      console.error('Помилка при отриманні розкладу:', error);
      setMessage({ text: 'Не вдалося завантажити розклад. Спробуйте пізніше.', type: 'error' });
    }
  };

  const getDayOfWeek = (date: Date) => {
    const days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];
    return days[date.getDay()];
  };

  const generateNextFiveDays = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 5; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      dates.push(nextDate);
    }
    return dates;
  };

  const handleDateChange = (date: Date) => {
    const selected = date.toISOString().split('T')[0];
    setSelectedDate(selected);

    const dayOfWeek = getDayOfWeek(date);
    setFormData((prev) => ({
      ...prev,
      day: dayOfWeek
    }));
  };

  const handleTimeChange = (time: string, activity: string) => {
    setSelectedTime(time);
    setActivityInfo(activity);
    setIsTimeSelected(true);
    setFormData((prev) => ({
      ...prev,
      time,
      activity
    }));
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      day: '',
      activity: '',
      time: '',
      name: '',
      contact: ''
    });
    setAvailableTimes([]);
    setSelectedDate('');
    setSelectedTime('');
    setActivityInfo('');
    setIsTimeSelected(false);
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const lavandaData = {
      service_id: 'service_4qzmcqt',
      template_id: 'template_v03sarb',
      user_id: 'JO5EenBZtLwYS-_-V',
      template_params: {
        name: formData.name,
        day: formData.day,
        date: selectedDate,
        time: formData.time,
        activity: formData.activity,
        contact: formData.contact,
      }
    };

    try {
      await axios.post('https://api.emailjs.com/api/v1.0/email/send', lavandaData);

      const response = await axios.post('/api/updateSchedule', {
        date: selectedDate,
        time: formData.time,
        activity: formData.activity,
      });

      if (!response.data.success) {
        throw new Error('Не вдалося оновити розклад');
      }

      await fetchScheduleForDate(selectedDate);

      setMessage({ text: 'Ви успішно зареєструвались!', type: 'success' });
      resetForm();
    } catch (error) {
      console.error('Error occurred during registration:', error);

      const err = error as Error;
      setMessage({ text: 'Йой, сталася помилка: ' + err.message, type: 'error' });
    } finally {
      setTimeout(() => {
        setMessage(null);
      }, 3000);
      setIsLoading(false);
    }
  };

  return (
    <div className={styles['registration-form']}>
      {message && (
        <div className={`${styles['registration-form_notification']} ${message.type === 'success' ? styles['success'] : styles['error']}`}>
          {message.text}
        </div>
      )}

      <h1 className={styles['registration-form_title']}>Запис на заняття</h1>

      <form className={styles['registration-form_form']} onSubmit={handleOnSubmit}>
        <p>Оберіть, будь ласка, день:</p>
        <div className={styles['date-buttons']}>
          {generateNextFiveDays().map((date, index) => (
            <button
              key={index}
              type="button"
              className={`
                ${styles['date-button']} 
                ${selectedDate === date.toISOString().split('T')[0] ? styles['active'] : ''}
              `}
              onClick={() => handleDateChange(date)}
            >
              {date.toLocaleDateString('uk-UA')}
            </button>
          ))}
        </div>

        {availableTimes.length > 0 && (
          <>
            <label htmlFor="time">
              {!selectedTime && <p>Виберіть час заняття:</p>}
            </label>
            {!isTimeSelected && availableTimes.map((slot, index) => (
              <button
                key={index}
                type="button"
                className={styles['registration-form_form_timebutton']}
                onClick={() => handleTimeChange(slot.time, slot.activity)}
              >
                {slot.time} - {slot.activity} (Вільно: {slot.availableSpots})
              </button>
            ))}

            {selectedTime && (
              <div className={styles['registration-form_form_info']}>
                <p><strong>Заняття:</strong> {activityInfo}</p>
                <p><strong>Час:</strong> {selectedTime}</p>
                <p><strong>Дата:</strong> {selectedDate}</p>
                <p><strong>День:</strong> {formData.day}</p>
              </div>
            )}

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ім'я*"
              className={styles['registration-form_form_input']}
              onChange={handleFormChange}
              required
            />

            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="Номер телефону*"
              className={styles['registration-form_form_input']}
              onChange={handleFormChange}
              required
            />

            <button
              className={styles['registration-form_form_btn']}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <MiniLoader /> : 'Записатися'}
            </button>

            <button
              type="button"
              className={styles['registration-form_form_btn']}
              onClick={resetForm}
            >
              Скасувати
            </button>
          </>
        )}

        {selectedDate && availableTimes.length === 0 && (
          <p className={styles['registration-form_form_info']}>
            На жаль, в цей день немає занять, спробуйте обрати інший день
          </p>
        )}
      </form>

      <div className={styles['instruction']}>
        <h2>Інструкція для запису на заняття:</h2>
        <ul>
          <li>
            <strong>Вибір дати:</strong>
            <p>- Відкрийте форму запису на заняття.</p>
            <p>- Виберіть бажану дату у календарі, який з’явиться на екрані.</p>
          </li>
          <li>
            <strong>Вибір часу та заняття:</strong>
            <p>- Після вибору дати, з'явиться список доступних занять та часу.</p>
            <p>- Оберіть зручний для вас час та заняття, натиснувши на відповідну кнопку.</p>
          </li>
          <li>
            <strong>Заповнення персональної інформації:</strong>
            <p>- У формі, що відкриється після вибору заняття, введіть ваше ім'я та контактну інформацію (телефон або email).</p>
            <p>- Переконайтесь, що всі поля заповнені правильно.</p>
          </li>
          <li>
            <strong>Підтвердження запису:</strong>
            <p>- Перегляньте введену інформацію та натисніть кнопку "Записатися".</p>
            <p>- Після цього ви отримаєте підтвердження вашого запису.</p>
          </li>
          <li>
            <strong>Важливо:</strong>
            <p>- Якщо ви записалися на заняття, але не з'явилися, заняття вважається відвіданим.</p>
            <p>- В цьому випадку заняття буде списано з вашого абонемента без можливості відшкодування.</p>
            <p>- З натисканням кнопки "Записатися" Ви погоджуєтесь із правилами запису на заняття і внутрішніми правилами студії "Lavanda".</p>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default RegistrationClass;
