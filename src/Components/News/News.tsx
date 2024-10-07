import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { NewsItem } from '../../Utils/Types';
import Carousel from '../TrainerInfo/Carousel';
import './News.scss';

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
    <div className="news">
      {news.map((newsItem: NewsItem) => {
        const { id, title, date, image, message } = newsItem;
        const shortMsg = cutMessage(message, 200);

        return (
          <div key={id} className="news-item">
            <h3 className="news-item_title">{title}</h3>
            <p className="news-item_date">{date}</p>
            <p className="news-item_message">{shortMsg}</p>
            <img className="news-item_img" src={image} alt="діти на конкурсі" />
            <Button className="news-item_button" onClick={() => handleShow(newsItem)}>Деталі</Button>
          </div>
        )
      })}

      {selectedNews && (
        <Modal
          className={`modal ${selectedNews ? 'modal-show' : ''}`}
          show={selectedNews !== null}
          onHide={handleClose}
        >
          <div className="modal-content">
            <Modal.Header>
              <Modal.Title className="modal-content_title">{selectedNews.message}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-content_body">
              {selectedNews.participants.map((participant, index) => (
                <div key={index} className="modal-content_body_participant">
                  <h3 className="modal-content_body_participant_title">{participant.name}</h3>
                  <p className="modal-content_body_participant_text"><strong>Номер:</strong> {participant.performance}</p>
                  {participant.outfit && <p><strong>Костюм:</strong> {participant.outfit}</p>}
                  <p className="modal-content_body_participant_text"><strong>Місце:</strong> {participant.placement}</p>
                  <Carousel images={participant.images || []} />
                </div>
              ))}
            </Modal.Body>
            <Modal.Footer className="modal-footer">
              <Button className="modal-button" onClick={handleClose}>
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
