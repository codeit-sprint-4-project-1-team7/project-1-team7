import Badge from "./Badge";
import commonStyles from "./Header.module.css";
import styles from "./HeaderService.module.css";
import ProfileImages from "./ProfileImages";

function HeaderService() {
  return (
    <>
      <div className={commonStyles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.toNameContainer}>
            <span className={styles.toName}>To. Ashley Kim</span>
          </div>
          <div className={styles.line} />
          <div className={styles.imojiContainer}>
            <div className={styles.writedContainer}>
              <ProfileImages
                imageContainerStyle={styles.imageContainer}
                imageStyle={styles.image}
                imageTextStyle={styles.imageText}
                direction="right"
              />

              <div className={styles.writed}>
                <span className={styles.numOfWrited}>23</span>
                <span className={styles.writedText}>명이 작성했어요!</span>
              </div>
            </div>
            <div className={styles.writedBar} />
            <div className={styles.badgeAndShareContainer}>
              <div className={styles.badgeAndDropdownContainer}>
                <Badge />

                <div className={styles.dropDownContainer}>dropDown</div>
              </div>
              <div className={styles.shareContainer}>
                <div>빙그레버튼</div>
                <div className={styles.shareContainerBar} />
                <div className={styles.shareButton}>
                  공유버튼
                  <div className={styles.shareButtonContainer}>
                    <div className={styles.shareButtonKakaoElement}>
                      카카오톡 공유
                    </div>
                    <div className={styles.shareButtonURLElement}>URL 공유</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={commonStyles.line} />
    </>
  );
}

export default HeaderService;
