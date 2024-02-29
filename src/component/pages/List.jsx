import Button from '../common/button/Button';
import styles from './List.module.css';
function List() {
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
      <div>
        <Button type="primary">나도 만들어보기</Button>
      </div>
    </div>
  );
}

export default List;
