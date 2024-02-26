import styles from './toast.module.css';

export const Toast = ({ onClick }) => {
  return (
    <div className={styles.toastBackground}>
      <div className={styles.toastForm}>
        <div className={styles.toastCompleted}></div>
        <div className={styles.toastMessage}>URL이 복사 되었습니다.</div>
        <button className={styles.toastClose} onClick={onClick}></button>
      </div>
    </div>
  );
};
