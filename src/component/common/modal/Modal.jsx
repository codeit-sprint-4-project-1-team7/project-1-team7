import { useEffect } from 'react';
import { Badge } from '../badge/Badge';
import Button from '../button/Button';
import styles from './Modal.module.css';

const tempName = '홍성욱';
const tempRelation = '동료';
const tempDate = '임시 날짜';

export const Modal = ({ onClick }) => {
  const profileName = `From. ${tempName}`;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

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
            메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지
            입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다.
            임시 메시지 입니다. 임시 메시지 입니다. 임시 메시지 입니다. 임시
            메시지 입니다.
          </div>
        </div>

        <Button type="primary" width="120px" onClick={onClick}>
          확인
        </Button>
      </div>
    </div>
  );
};
