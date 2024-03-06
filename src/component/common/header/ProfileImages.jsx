import styles from "./ProfileImages.module.css";
import texts from "./headerCommonTexts";

function ProfileImages({ direction, messageCount, recentMessages }) {
  return (
    <>
      <div className={`${styles.profileGroup} ${styles[direction]}`}>
        {recentMessages.map(({ id, profileImageURL }) => (
          <img
            key={id}
            className={styles.profileImg}
            src={profileImageURL}
            alt={texts.profileImageAlt}
          />
        ))}
        {messageCount > 3 && (
          <span id="imageText" className={styles.profileCount}>
            +{+messageCount - 3}
          </span>
        )}
      </div>
    </>
  );
}

export default ProfileImages;
