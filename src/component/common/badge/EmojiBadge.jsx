import styles from './EmojiBadge.module.css';

export const EmojiBadge = ({ emoji, count }) => {
  return (
    <div className={styles.emojiBackground}>
      <span className={styles.emoji}>{emoji}</span>
      <span className={styles.count}>{count}</span>
    </div>
  );
};
