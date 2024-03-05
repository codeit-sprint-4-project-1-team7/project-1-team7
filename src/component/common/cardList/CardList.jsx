import ProfileImages from "../header/ProfileImages";
import styles from "./CardList.module.css";
import headerServiceStyles from "../header/HeaderService.module.css";
import { EmojiBadge } from "../badge/EmojiBadge";
import { useNavigate } from "react-router-dom";

function CardList({ rollingPaperList }) {
  console.log(rollingPaperList.topReactions);
  const navigation = useNavigate();
  const handleCardListClick = (id) => {
    navigation(`/post/${id}`);
  };
  return (
    <div className={styles.cardListContainer}>
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
              </div>
              <div className={styles.badgeContainer}>
                <div className={styles.line} />
                <div className={styles.badge}>
                  {item.topReactions?.map(({ id, emoji, count }) => (
                    <EmojiBadge key={id} emoji={emoji} count={count} />
                  ))}
                </div>
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
