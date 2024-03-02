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
    console.log(response);
    setRollingPaperListOrder(response.results);
    setRollingPaperListPopular(
      [...response.results].sort((a, b) => b.messageCount - a.messageCount)
    );
  };

  // scroll-button-popular
  const navigate = useNavigate();
  const containerPopularRef = useRef(null);
  const containerLatestRef = useRef(null);
  const [isAtStartPopular, setIsAtStartPopular] = useState(true);
  const [isAtEndPopular, setIsAtEndPopular] = useState(false);
  //
  const [isAtStartLatest, setIsAtStartLatest] = useState(true);
  const [isAtEndLatest, setIsAtEndLatest] = useState(false);

  const handleScrollPopular = (direction) => {
    const containerPopular = containerPopularRef.current;
    if (containerPopular) {
      const scrollAmount = 295;
      containerPopular.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      checkScrollPositionPopular();
    }
  };
  const checkScrollPositionPopular = () => {
    const containerPopular = containerPopularRef.current;
    if (containerPopular) {
      const maxScrollLeft =
        containerPopular.scrollWidth - containerPopular.clientWidth;
      setIsAtStartPopular(containerPopular.scrollLeft === 0);
      setIsAtEndPopular(containerPopular.scrollLeft >= maxScrollLeft);
    }
  };
  const handleScrollLatest = (direction) => {
    const containerLatest = containerLatestRef.current;
    if (containerLatest) {
      const scrollAmount = 295;
      containerLatest.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      checkScrollPositionLatest();
    }
  };
  const checkScrollPositionLatest = () => {
    const containerLatest = containerLatestRef.current;
    if (containerLatest) {
      const maxScrollLeft =
        containerLatest.scrollWidth - containerLatest.clientWidth;
      setIsAtStartLatest(containerLatest.scrollLeft === 0);
      setIsAtEndLatest(containerLatest.scrollLeft >= maxScrollLeft);
    }
  };

  useEffect(() => {
    getRollingPaperList();

    const containerPopular = containerPopularRef.current;
    const containerLatest = containerLatestRef.current;
    if (containerPopular) {
      containerPopular.addEventListener('scroll', checkScrollPositionPopular);
      checkScrollPositionPopular();
    }
    if (containerLatest) {
      containerLatest.addEventListener('scroll', checkScrollPositionLatest);
      checkScrollPositionLatest();
    }
    return () => {
      if (containerPopular) {
        containerPopular.removeEventListener(
          'scroll',
          checkScrollPositionPopular
        );
      }
      if (containerLatest) {
        containerLatest.removeEventListener(
          'scroll',
          checkScrollPositionLatest
        );
      }
    };
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
              onClick={() => handleScrollPopular('left')}
            />
          </span>
        )}
        {!isAtEndPopular && (
          <span className={`${styles.cardButton} ${styles.right}`}>
            <Button
              type="circle"
              icon="rightArrow"
              onClick={() => handleScrollPopular('right')}
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
              onClick={() => handleScrollLatest('left')}
            />
          </span>
        )}
        {!isAtEndLatest && (
          <span className={`${styles.cardButton} ${styles.right}`}>
            <Button
              type="circle"
              icon="rightArrow"
              onClick={() => handleScrollLatest('right')}
            />
          </span>
        )}
      </div>
      <div className={styles.listBottom}>
        <Button
          type="primary"
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
