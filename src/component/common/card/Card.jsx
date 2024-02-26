import styles from "./Card.module.css";
function Card(params) {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardPlus}>
          <div className={styles.cardImg} />
        </div>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.profileContainer}>
          <div className={styles.profile}>
            <div className={styles.img} />
            <div className={styles.nameAndBadgeContainer}>
              <div className={styles.nameContainer}>
                <span>From.</span>
                <span>김동훈</span>
              </div>
              <div className={styles.badge}>
                <div className={styles.badgeText}>동료</div>
              </div>
            </div>
            <div className={styles.trashButton}>휴지통</div>
          </div>
          <div className={styles.line} />
        </div>
        <div className={styles.textAreaContainer}>
          <div className={styles.textBox}>
            코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
            하세요!
          </div>
          <span className={styles.date}>2024.02.26</span>
        </div>
      </div>
    </>
  );
}

export default Card;
