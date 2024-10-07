import { NewsItem } from '../../Utils/Types';
import News from '../News/News';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import './NewsPage.scss';

type Props = {
  news: NewsItem[]
}

const NewsPage: React.FC<Props> = ({ news }) => {
  return (
    <div className="newsPage">
      <ScrollToTop />
      <News news={news}/>
    </div>
  )
}

export default NewsPage;
