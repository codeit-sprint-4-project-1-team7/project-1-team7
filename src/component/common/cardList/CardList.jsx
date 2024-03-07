import ProfileImages from "../header/ProfileImages";
import styles from "./CardList.module.css";
import { EmojiBadge } from "../badge/EmojiBadge";

function CardList({ rollingPaperList, onClick }) {
  return (
    <>
      <div className={styles.cardListContainer}>
        {rollingPaperList?.map(
          ({
            backgroundColor,
            backgroundImageURL,
            id,
            messageCount,
            name,
            reactionCount,
            recentMessages,
            topReactions,
          }) => (
            <div
              key={id}
              className={`${styles.cardContainer} ${
                backgroundImageURL ? styles.fontWhite : ""
              }`}
              onClick={(id) => onClick(id)}
            >
              <div className={styles.backgroundGroup}>
                {backgroundImageURL ? (
                  <img
                    src={backgroundImageURL}
                    alt="배경 화면"
                    className={`${styles.backgroundItem} ${styles.backgroundImage}`}
                  />
                ) : (
                  <div
                    className={`${styles.backgroundItem} ${styles[backgroundColor]}`}
                  />
                )}
              </div>

              <div className={styles.informationContainer}>
                <div className={styles.toName}>To. {name}</div>
                <ProfileImages
                  messageCount={messageCount}
                  recentMessages={recentMessages}
                />
                <div className={styles.writed}>
                  <span>{messageCount}</span>
                  <span>명이 작성했어요!</span>
                </div>
              </div>

              {!!reactionCount && (
                <div className={styles.badge}>
                  {topReactions.map(({ id, emoji, count }) => (
                    <EmojiBadge key={id} emoji={emoji} count={count} />
                  ))}
                </div>
              )}
            </div>
          )
        )}
      </div>
      {!!rollingPaperList.length || (
        <div className={styles.noCard}>롤링 페이퍼가 없어요!</div>
      )}
    </>
  );
}

export default CardList;
