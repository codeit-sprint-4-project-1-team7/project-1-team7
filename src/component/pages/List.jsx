import Button from '../common/button/Button';
import styles from './List.module.css';
import { useNavigate } from 'react-router-dom';
import CardList from '../common/cardList/CardList';
import { CardlistTest } from './CardlistTest';
import { useRef } from 'react';

function List() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;

    if (container) {
      const scrollAmount = 295;
      const currentScroll = container.scrollLeft;

      if (direction === 'left') {
        container.scrollLeft = currentScroll - scrollAmount;
      } else if (direction === 'right') {
        container.scrollLeft = currentScroll + scrollAmount;
      }
    }
  };

  return (
    <div className={styles.listBackground}>
      <div className={styles.cardListForm}>
        <h1>인기 롤링 페이퍼 🔥</h1>
        <div ref={containerRef} className={styles.cardListItem}>
          <CardlistTest />
        </div>
      </div>
      <button onClick={() => handleScroll('left')}>왼쪽으로 이동</button>
      <button onClick={() => handleScroll('right')}>오른쪽으로 이동</button>
      <div className={styles.cardListForm}>
        <h1>최근에 만든 롤링 페이퍼 ⭐️️</h1>
        <div className={styles.cardListItem}>
          <CardlistTest />
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
