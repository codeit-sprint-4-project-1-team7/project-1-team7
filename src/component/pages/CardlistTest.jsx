import ProfileImages from '../common/header/Header';
import styles from '../common/cardList/CardList.module.css';
import headerServiceStyles from '../common/header/HeaderService';
import { EmojiBadge } from '../common/badge/EmojiBadge';

export function CardlistTest() {
  const tempEmoji = '😍';
  const tempCount = 24;
  return (
    <div className={styles.cardListContainer}>
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
            <EmojiBadge emoji={tempEmoji} count={tempCount} />
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
              <span className={headerServiceStyles.numOfWrited}>24</span>
              <span className={headerServiceStyles.writedText}>
                명이 작성했어요!
              </span>
            </div>
          </div>
          <div className={styles.badgeContainer}>
            <div className={styles.line} />
            <EmojiBadge emoji={tempEmoji} count={tempCount} />
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
              <span className={headerServiceStyles.numOfWrited}>25</span>
              <span className={headerServiceStyles.writedText}>
                명이 작성했어요!
              </span>
            </div>
          </div>
          <div className={styles.badgeContainer}>
            <div className={styles.line} />
            <EmojiBadge emoji={tempEmoji} count={tempCount} />
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
              <span className={headerServiceStyles.numOfWrited}>26</span>
              <span className={headerServiceStyles.writedText}>
                명이 작성했어요!
              </span>
            </div>
          </div>
          <div className={styles.badgeContainer}>
            <div className={styles.line} />
            <EmojiBadge emoji={tempEmoji} count={tempCount} />
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
              <span className={headerServiceStyles.numOfWrited}>27</span>
              <span className={headerServiceStyles.writedText}>
                명이 작성했어요!
              </span>
            </div>
          </div>
          <div className={styles.badgeContainer}>
            <div className={styles.line} />
            <EmojiBadge emoji={tempEmoji} count={tempCount} />
          </div>
        </div>
      </div>
    </div>
  );
}
