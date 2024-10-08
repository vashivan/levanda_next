import React from 'react';
import { NewsItem } from '../../Utils/Types';
import News from '../News/News';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import styles from '../../styles/NewsPage.module.scss';

type Props = {
  news: NewsItem[]
}

const NewsPage: React.FC<Props> = ({ news }) => {
  return (
    <div className={styles['newsPage']}>
      <ScrollToTop />

      <News news={news} />
    </div>
  )
}

export default NewsPage;
