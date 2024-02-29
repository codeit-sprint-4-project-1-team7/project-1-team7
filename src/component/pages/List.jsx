import Button from '../common/button/Button';
import styles from './List.module.css';
import { useNavigate } from 'react-router-dom';

function List() {
  const navigate = useNavigate();
  return (
    <div className={styles.listBackground}>
      <div className={styles.cardListForm}>
        <h1>인기 롤링 페이퍼 🔥</h1>
        <div>card list</div>
      </div>
      <div className={styles.cardListForm}>
        <h1>최근에 만든 롤링 페이퍼 ⭐️️</h1>
        <div>card list</div>
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
