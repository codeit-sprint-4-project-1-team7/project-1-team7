import { Badge } from '../badge/Badge';
import PrimaryBtn from '../button/PrimaryBtn';
import styles from './Modal.module.css';

const tempName = '홍성욱';
const tempRelation = '동료';
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
              <Badge relation={tempRelation}></Badge>
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

        <PrimaryBtn width="120px" height="standard" onClick={onClick}>
          확인
        </PrimaryBtn>
      </div>
    </div>
  );
};
