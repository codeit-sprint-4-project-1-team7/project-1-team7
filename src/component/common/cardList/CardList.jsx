import ProfileImages from "../header/ProfileImages";
import styles from "./CardList.module.css";
import headerServiceStyles from "../header/HeaderService.module.css";
import Badge from "../header/Badge";
function CardList({ lists }) {
  return (
    <div className={styles.cardListContainer}>
      {/* {lists ? (
        lists.map((item) => (
          <div className={styles.cardContainer}>
            <div className={styles.contentsContainer}>
              <div className={styles.informationContainer}>
                <div>To.Sowon</div>
                <div>
                  <ProfileImages />
                </div>
                <div>To.Sowon</div>
              </div>
              <div></div>
            </div>
          </div>
        ))
      ) : (
        <div>롤링 페이퍼가 없어요!</div>
      )} */}
      <div className={styles.cardContainer}>
        <div className={styles.contentsContainer}>
          <div className={styles.informationContainer}>
            <div className={styles.toName}>To.Sowon</div>
            <ProfileImages
              imageContainerStyle={headerServiceStyles.imageContainer}
              imageStyle={headerServiceStyles.image}
              imageTextStyle={styles.imageText}
              direction="left"
            />
            <div
              className={headerServiceStyles.writed}
              style={{
                fontSize: `16px`,
                lineHeight: `26px`,
                letterSpacing: `-0.16px`,
              }}
            >
              <span className={headerServiceStyles.numOfWrited}>23</span>
              <span className={headerServiceStyles.writedText}>
                명이 작성했어요!
              </span>
            </div>
          </div>
          <div className={styles.badgeContainer}>
            <div className={styles.line} />
            <Badge />
          </div>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.contentsContainer}>
          <div className={styles.informationContainer}>
            <div className={styles.toName}>To.Sowon</div>
            <ProfileImages
              imageContainerStyle={headerServiceStyles.imageContainer}
              imageStyle={headerServiceStyles.image}
              imageTextStyle={styles.imageText}
              direction="left"
            />
            <div
              className={headerServiceStyles.writed}
              style={{
                fontSize: `16px`,
                lineHeight: `26px`,
                letterSpacing: `-0.16px`,
              }}
            >
              <span className={headerServiceStyles.numOfWrited}>23</span>
              <span className={headerServiceStyles.writedText}>
                명이 작성했어요!
              </span>
            </div>
          </div>
          <div className={styles.badgeContainer}>
            <div className={styles.line} />
            <Badge />
          </div>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.contentsContainer}>
          <div className={styles.informationContainer}>
            <div className={styles.toName}>To.Sowon</div>
            <ProfileImages
              imageContainerStyle={headerServiceStyles.imageContainer}
              imageStyle={headerServiceStyles.image}
              imageTextStyle={styles.imageText}
              direction="left"
            />
            <div
              className={headerServiceStyles.writed}
              style={{
                fontSize: `16px`,
                lineHeight: `26px`,
                letterSpacing: `-0.16px`,
              }}
            >
              <span className={headerServiceStyles.numOfWrited}>23</span>
              <span className={headerServiceStyles.writedText}>
                명이 작성했어요!
              </span>
            </div>
          </div>
          <div className={styles.badgeContainer}>
            <div className={styles.line} />
            <Badge />
          </div>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.contentsContainer}>
          <div className={styles.informationContainer}>
            <div className={styles.toName}>To.Sowon</div>
            <ProfileImages
              imageContainerStyle={headerServiceStyles.imageContainer}
              imageStyle={headerServiceStyles.image}
              imageTextStyle={styles.imageText}
              direction="left"
            />
            <div
              className={headerServiceStyles.writed}
              style={{
                fontSize: `16px`,
                lineHeight: `26px`,
                letterSpacing: `-0.16px`,
              }}
            >
              <span className={headerServiceStyles.numOfWrited}>23</span>
              <span className={headerServiceStyles.writedText}>
                명이 작성했어요!
              </span>
            </div>
          </div>
          <div className={styles.badgeContainer}>
            <div className={styles.line} />
            <Badge />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
