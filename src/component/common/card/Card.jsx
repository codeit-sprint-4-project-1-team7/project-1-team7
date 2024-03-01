import Button from "../button/Button";
import styles from "./Card.module.css";
function Card({ messages, isAddMessageCardVisible }) {
  return (
    <>
      <div className={styles.cardBox}>
        {isAddMessageCardVisible && (
          <div className={styles.cardContainer}>
            <div className={styles.cardPlus}>
              <div className={styles.cardImg} />
            </div>
          </div>
        )}
        {messages?.map((item) => (
          <div key={item.id} className={styles.cardContainer}>
            <div className={styles.profileContainer}>
              <div className={styles.profile}>
                <div
                  className={styles.img}
                  style={{ backgroundImage: `url(${item.profileImageURL})` }}
                />
                <div className={styles.nameAndBadgeContainer}>
                  <div className={styles.nameContainer}>
                    <span>From.</span>
                    <span>{item.sender}</span>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeText}>{item.relationship}</div>
                  </div>
                </div>
                <div className={styles.trashButton}>
                  <Button type="outlined" height="standard" icon="delete" />
                </div>
              </div>
              <div className={styles.line} />
            </div>
            <div className={styles.textAreaContainer}>
              <div
                className={styles.textBox}
                style={{ fontFamily: `${item.font}` }}
              >
                {item.content}
              </div>
              <span className={styles.date}>{item.createdAt.slice(0, 10)}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
