import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const scheduleFilePath = path.join(process.cwd(), 'public', 'schedule.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Перевіряємо існування файлу перед читанням
      if (!fs.existsSync(scheduleFilePath)) {
        res.status(500).json({ error: 'Файл розкладу не знайдено' });
        return;
      }

      const schedule = fs.readFileSync(scheduleFilePath, 'utf8');
      res.status(200).json(JSON.parse(schedule));
    } catch (error) {
      console.error('Помилка при читанні розкладу:', error);
      res.status(500).json({ error: 'Не вдалося отримати розклад' });
    }
  } else if (req.method === 'POST') {
    const { date, time, activity } = req.body;

    try {
      // Перевірка існування файлу перед оновленням
      if (!fs.existsSync(scheduleFilePath)) {
        res.status(500).json({ error: 'Файл розкладу не знайдено' });
        return;
      }

      const schedule = JSON.parse(fs.readFileSync(scheduleFilePath, 'utf8'));

      const updatedSchedule = schedule.map((day: { date: string; schedule: Array<any> }) => {
        if (day.date === date) {
          day.schedule = day.schedule.map((slot: { time: string; activity: string; availableSpots: number }) => {
            if (slot.time === time && slot.activity === activity && slot.availableSpots > 0) {
              return { ...slot, availableSpots: slot.availableSpots - 1 };
            }
            return slot;
          });
        }
        return day;
      });

      // Записуємо оновлений розклад у файл
      fs.writeFileSync(scheduleFilePath, JSON.stringify(updatedSchedule, null, 2));

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Помилка при обробці розкладу:', error);
      res.status(500).json({ error: 'Помилка на сервері' });
    }
  } else {
    res.status(405).json({ error: 'Метод не дозволено' });
  }
}
