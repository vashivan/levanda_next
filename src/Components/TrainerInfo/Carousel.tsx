import React, { useState } from 'react';
import styles from '../../styles/Carousel.module.scss';

type CarouselProps = {
  images: string[];
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles['carousel']}>
      <button 
        className={`${styles.carousel__button} ${styles['carousel__button--prev']}`}
        onClick={handlePrev}
      >
        &lt;
      </button>
      <div className={styles['carousel__slides']}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles['carousel__slide']}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img
              className={styles['carousel__slide_img']}
              src={image}
              alt={`Slide ${index + 1}`} 
            />
          </div>
        ))}
      </div>
      <button 
        className={`${styles.carousel__button} ${styles['carousel__button--next']}`} onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
