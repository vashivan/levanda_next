import React from 'react';
import News from '../Components/NewsPage/NewsPage';
import newsData from '../Info/news.json';

const NewsPage = () => {
  return <News news={newsData} />;
};

export default NewsPage;
