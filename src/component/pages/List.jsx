import Button from '../common/button/Button';
import styles from './List.module.css';
import { useNavigate } from 'react-router-dom';
import CardList from '../common/cardList/CardList';
import { useRef } from 'react';
import { useEffect, useState } from 'react';

import { getRecipientsApiResponse } from '../../util/api';

function List() {
  // cardlist
  const [rollingPaperListOrder, setRollingPaperListOrder] = useState([]);
  const [rollingPaperListPopular, setRollingPaperListPopular] = useState([]);
  const getRollingPaperList = async () => {
    const response = await getRecipientsApiResponse('', 100);
    setRollingPaperListOrder(response.results);
    setRollingPaperListPopular(
      [...response.results].sort((a, b) => b.messageCount - a.messageCount)
    );
  };

  // scroll-button-popular
  const navigate = useNavigate();
  const containerPopularRef = useRef(null);
  const [isAtStartPopular, setIsAtStartPopular] = useState(true);
  const [isAtEndPopular, setIsAtEndPopular] = useState(false);
  // scroll-button-latest
  const containerLatestRef = useRef(null);
  const [isAtStartLatest, setIsAtStartLatest] = useState(true);
  const [isAtEndLatest, setIsAtEndLatest] = useState(false);

  const handleScroll = (direction, category) => {
    let container;
    if (category === 'popular') container = containerPopularRef.current;
    else container = containerLatestRef.current;

    if (container) {
      const scrollAmount = 295;
      console.log(container.scrollLeft);
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(() => {
        checkScrollPosition(category);
      }, 500);
    }
  };
  const checkScrollPosition = (category) => {
    let container;
    if (category === 'popular') container = containerPopularRef.current;
    else container = containerLatestRef.current;

    if (container) {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (category === 'popular') {
        setIsAtStartPopular(container.scrollLeft === 0);
        setIsAtEndPopular(container.scrollLeft >= maxScrollLeft);
        console.log(container.scrollLeft);
      } else {
        setIsAtStartLatest(container.scrollLeft === 0);
        setIsAtEndLatest(container.scrollLeft >= maxScrollLeft);
      }
    }
  };

  useEffect(() => {
    getRollingPaperList();
  }, []);
  useEffect(() => {
    const containerPopular = containerPopularRef.current;
    const containerLatest = containerLatestRef.current;
    if (containerPopular) {
      containerPopular.addEventListener(
        'scroll',
        checkScrollPosition('popular')
      );
      checkScrollPosition('popular');
    }
    if (containerLatest) {
      containerLatest.addEventListener('scroll', checkScrollPosition('latest'));
      checkScrollPosition('latest');
    }
  }, [rollingPaperListPopular, rollingPaperListOrder]);

  return (
    <div className={styles.listBackground}>
      <div className={styles.cardListForm}>
        <h1>인기 롤링 페이퍼 🔥</h1>
        <div ref={containerPopularRef} className={styles.cardListItem}>
          <CardList rollingPaperList={rollingPaperListPopular.slice(0, 8)} />
        </div>
        {!isAtStartPopular && (
          <span className={`${styles.cardButton} ${styles.left}`}>
            <Button
              type="circle"
              icon="leftArrow"
              onClick={() => handleScroll('left', 'popular')}
            />
          </span>
        )}
        {!isAtEndPopular && (
          <span className={`${styles.cardButton} ${styles.right}`}>
            <Button
              type="circle"
              icon="rightArrow"
              onClick={() => handleScroll('right', 'popular')}
            />
          </span>
        )}
      </div>

      <div className={styles.cardListForm}>
        <h1>최근에 만든 롤링 페이퍼 ⭐️️</h1>
        <div ref={containerLatestRef} className={styles.cardListItem}>
          <CardList rollingPaperList={rollingPaperListOrder.slice(0, 8)} />
        </div>
        {!isAtStartLatest && (
          <span className={`${styles.cardButton} ${styles.left}`}>
            <Button
              type="circle"
              icon="leftArrow"
              onClick={() => handleScroll('left', 'latest')}
            />
          </span>
        )}
        {!isAtEndLatest && (
          <span className={`${styles.cardButton} ${styles.right}`}>
            <Button
              type="circle"
              icon="rightArrow"
              onClick={() => handleScroll('right', 'latest')}
            />
          </span>
        )}
      </div>
      <div className={styles.listBottom}>
        <Button
          type="primary"
          width="width280"
          onClick={() => {
            navigate('/post');
          }}
        >
          나도 만들어보기
        </Button>
      </div>
    </div>
  );
}

export default List;
