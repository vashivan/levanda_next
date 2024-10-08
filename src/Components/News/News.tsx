import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { NewsItem } from '../../Utils/Types';
import Carousel from '../TrainerInfo/Carousel';
import styles from '../../styles/News.module.scss';

type Props = {
  news: NewsItem[]
}

const News: React.FC<Props> = ({ news }) => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const cutMessage = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  const handleClose = () => setSelectedNews(null);
  const handleShow = (newsItem: NewsItem) => setSelectedNews(newsItem);

  return (
    <div className={styles['news']}>
      {news.map((newsItem: NewsItem) => {
        const { id, title, date, image, message } = newsItem;
        const shortMsg = cutMessage(message, 200);

        return (
          <div key={id} className={styles['news-item']}>
            <h3 className={styles['news-item_title']}>{title}</h3>
            <p className={styles['news-item_date']}>{date}</p>
            <p className={styles['news-item_message']}>{shortMsg}</p>
            <img className={styles['news-item_img']} src={image} alt="діти на конкурсі" />
            <Button className={styles['news-item_button']} onClick={() => handleShow(newsItem)}>Деталі</Button>
          </div>
        )
      })}

      {selectedNews && (
        <Modal
          cclassName={`${styles['news-item_button']} ${selectedNews ? 'modal-show' : ''}`}
          show={selectedNews !== null}
          onHide={handleClose}
        >
          <div className={styles['modal-content']}>
            <Modal.Header>
              <Modal.Title className={styles['modal-content_title']}>{selectedNews.message}</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles['modal-content_body']}>
              {selectedNews.participants.map((participant, index) => (
                <div key={index} className={styles['modal-content_body_participant']}>
                  <h3 className={styles['modal-content_body_participant_title']}>{participant.name}</h3>
                  <p className={styles['modal-content_body_participant_text']}><strong>Номер:</strong> {participant.performance}</p>
                  {participant.outfit && <p><strong>Костюм:</strong> {participant.outfit}</p>}
                  <p className={styles['modal-content_body_participant_text']}><strong>Місце:</strong> {participant.placement}</p>
                  <Carousel images={participant.images || []} />
                </div>
              ))}
            </Modal.Body>
            <Modal.Footer className={styles['modal-footer']}>
              <Button className={styles['modal-button']} onClick={handleClose}>
                Закрити
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default News;
