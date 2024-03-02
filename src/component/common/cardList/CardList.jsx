import ProfileImages from "../header/ProfileImages";
import styles from "./CardList.module.css";
import headerServiceStyles from "../header/HeaderService.module.css";
import { EmojiBadge } from "../badge/EmojiBadge";
import { useNavigate } from "react-router-dom";

function CardList({ rollingPaperList, onClick }) {
  const navigation = useNavigate();
  const handleCardListClick = (id) => {
    console.log(`Card clicked: ${id}`);
    navigation(`/post/${id}`);
  };
  return (
    <div className={styles.cardListContainer}>
      {rollingPaperList ? (
        rollingPaperList.map((item) => (
          <div
            onClick={() => handleCardListClick(item.id)}
            key={item.id}
            className={styles.cardContainer}
            style={
              item.backgroundImageURL === null
                ? { backgroundColor: `${item.backgroundColor}` }
                : { backgroundImage: `url(${item.backgroundImageURL})` }
            }
          >
            <div className={styles.contentsContainer}>
              <div className={styles.informationContainer}>
                <div className={styles.toName}>To.{item.name}</div>
                <ProfileImages
                  imageContainerStyle={headerServiceStyles.imageContainer}
                  imageStyle={headerServiceStyles.image}
                  imageTextStyle={styles.imageText}
                  direction="left"
                  messageCount={item.messageCount}
                  recentMessages={item.recentMessages}
                />
                <div
                  className={headerServiceStyles.writed}
                  style={{
                    fontSize: `16px`,
                    lineHeight: `26px`,
                    letterSpacing: `-0.16px`,
                  }}
                >
                  <span className={headerServiceStyles.numOfWrited}>
                    {item.messageCount}
                  </span>
                  <span className={headerServiceStyles.writedText}>
                    명이 작성했어요!
                  </span>
                </div>
              </div>
              <div className={styles.badgeContainer}>
                <div className={styles.line} />
                {rollingPaperList.topReactions?.map(({ id, emoji, count }) => (
                  <EmojiBadge key={id} emoji={emoji} count={count} />
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>롤링 페이퍼가 없어요!</div>
      )}
    </div>
  );
}

export default CardList;
