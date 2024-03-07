import { useEffect } from 'react';
import { Badge } from '../badge/Badge';
import Button from '../button/Button';
import styles from './Modal.module.css';
import DOMPurify from 'dompurify';
import { fontMappings } from '../textField/selectBox/fontMappings';

export const Modal = ({ item, onClick }) => {
  const profileName = 'From. ';

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
            <img
              className={styles.profileImg}
              src={item.profileImageURL}
              alt="프로필 이미지"
            />
            <div className={styles.profileForm}>
              <div className={styles.profileName}>
                {profileName}
                <span className={styles.profileNameBold}>{item.sender}</span>
              </div>
              <Badge relation={item.relationship}></Badge>
            </div>
          </div>
          <div className={styles.modalDate}>{item.createdAt.slice(0, 10)}</div>
        </div>
        <div className={styles.modalMessageForm}>
          <div
            className={styles.modalMessage}
            style={{ fontFamily: `${fontMappings[item.font]}` }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(item.content),
            }}
          />
        </div>
        <div className={styles.modalButton}>
          <Button type="primary" width="width120" onClick={onClick}>
            확인
          </Button>
        </div>
      </div>
    </div>
  );
};
