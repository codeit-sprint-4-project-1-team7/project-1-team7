import styles from './EmojiBadge.module.css';

export const EmojiBadge = ({ id, emoji, count, onClick }) => {
  return (
    <div key={id} className={styles.emojiBackground} onClick={onClick}>
      <span className={styles.emoji}>{emoji}</span>
      <span className={styles.count}>{count}</span>
    </div>
  );
};
