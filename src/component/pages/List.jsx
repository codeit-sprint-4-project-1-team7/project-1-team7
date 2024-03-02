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

  // scroll-button
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = 295;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      checkScrollPosition();
    }
  };
  const checkScrollPosition = () => {
    const container = containerRef.current;
    if (container) {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      setIsAtStart(container.scrollLeft === 0);
      setIsAtEnd(container.scrollLeft >= maxScrollLeft);
    }
  };

  useEffect(() => {
    getRollingPaperList();
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  return (
    <div className={styles.listBackground}>
      <div className={styles.cardListForm}>
        <h1>인기 롤링 페이퍼 🔥</h1>
        <div ref={containerRef} className={styles.cardListItem}>
          <CardList rollingPaperList={rollingPaperListPopular.slice(0, 8)} />
        </div>
        {!isAtStart && (
          <span className={`${styles.cardButton} ${styles.left}`}>
            <Button
              type="circle"
              icon="leftArrow"
              onClick={() => handleScroll('left')}
            />
          </span>
        )}
        {!isAtEnd && (
          <span className={`${styles.cardButton} ${styles.right}`}>
            <Button
              type="circle"
              icon="rightArrow"
              onClick={() => handleScroll('right')}
            />
          </span>
        )}
      </div>

      <div className={styles.cardListForm}>
        <h1>최근에 만든 롤링 페이퍼 ⭐️️</h1>
        <div className={styles.cardListItem}>
          <CardList rollingPaperList={rollingPaperListOrder.slice(0, 8)} />
        </div>
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
