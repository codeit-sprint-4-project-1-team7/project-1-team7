import styles from './modal.module.css';

const tempName = '홍성욱';
const tempBadge = '임시 배지';
const tempDate = '임시 날짜';

export const Modal = ({ onClick }) => {
  const profileName = `From. ${tempName}`;
  return (
    <div className={styles.modalBackground} onClick={onClick}>
      <div
        className={styles.modalContents}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.modalHeader}>
          <div className={styles.modalProfile}>
            <div className={styles.profileImg} alt="임시 프로필 이미지"></div>
            <div className={styles.profileForm}>
              <div className={styles.profileName}>{profileName}</div>
              <div>{tempBadge}</div>
            </div>
          </div>
          <div className={styles.modalDate}>{tempDate}</div>
        </div>
        <div className={styles.modalMessageForm}>
          <div className={styles.modalMessage}>
            임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시
            메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지
            입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다.
            임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시
            메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지
            입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다.
            임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시
            메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지
            입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다.
            임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시
            메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지
            입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다.
            임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시
            메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지
            입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다.
            임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시
            메시지 입니다.
          </div>
        </div>
        <button onClick={onClick}>확인</button>
      </div>
    </div>
  );
};
