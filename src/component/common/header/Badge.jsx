import styles from "./Badge.module.css";

function Badge(params) {
  return (
    <div className={styles.badgeContainer}>
      <div className={styles.badge}>배지 1</div>
      <div className={styles.badge}>배지 2</div>
      <div className={styles.badge}>배지 3</div>
    </div>
  );
}

export default Badge;
