import { useEffect, useState } from "react";
import commonStyles from "./Header.module.css";
import styles from "./HeaderService.module.css";
import KaKaoShare from "./KaKaoShare";
import ProfileImages from "./ProfileImages";
import { EmojiBadge } from "../badge/EmojiBadge";
import { getReactionsApiResponse } from "../../../util/api";
import EmojiPicker from "emoji-picker-react";

function HeaderService() {
  const [isShareDisplay, setIsShareDisplay] = useState(false);
  const [isEmojiDisplay, setIsEmojiDisplay] = useState(false);
  const [isEmojiApiDisplay, setIsEmojiApiDisplay] = useState(false);
  const tempEmoji = "😍";
  const tempCount = 24;
  const handleShareDisplayClick = () => {
    setIsShareDisplay(!isShareDisplay);
  };
  const handleEmojiDisplayClick = () => {
    setIsEmojiDisplay(!isEmojiDisplay);
  };

  const handleEmojiApiDisplayClick = () => {
    setIsEmojiApiDisplay(!isEmojiApiDisplay);
  };

  const emojiFunc = async () => {
    const response = await getReactionsApiResponse();
    if (!response) return;
  };

  useEffect(() => {
    // emojiFunc();
  });
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
                <div className={styles.badgeContainer}>
                  <EmojiBadge emoji={tempEmoji} count={tempCount} />
                  <EmojiBadge emoji={tempEmoji} count={tempCount} />
                  <EmojiBadge emoji={tempEmoji} count={tempCount} />
                </div>
                <div
                  onClick={handleEmojiDisplayClick}
                  className={styles.dropDownContainer}
                >
                  {isEmojiDisplay && (
                    <div className={styles.emojiContainer}>
                      <EmojiBadge emoji={tempEmoji} count={tempCount} />
                      <EmojiBadge emoji={tempEmoji} count={1} />
                      <EmojiBadge emoji={tempEmoji} count={tempCount} />
                      <EmojiBadge emoji={tempEmoji} count={tempCount} />
                      <EmojiBadge emoji={tempEmoji} count={tempCount} />
                      <EmojiBadge emoji={tempEmoji} count={5} />
                      <EmojiBadge emoji={tempEmoji} count={tempCount} />
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.shareContainer}>
                <div
                  className={styles.addEmojiContainer}
                  onClick={handleEmojiApiDisplayClick}
                >
                  빙그레버튼
                  {isEmojiApiDisplay && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className={styles.emojiApiContainer}
                    >
                      <EmojiPicker />
                    </div>
                  )}
                </div>
                <div className={styles.shareContainerBar} />
                <div
                  className={styles.shareButton}
                  onClick={handleShareDisplayClick}
                >
                  공유버튼
                  {isShareDisplay && (
                    <div className={styles.shareButtonContainer}>
                      <KaKaoShare
                        className={styles.shareButtonElement}
                        name="홍길동"
                      />
                      <div className={styles.shareButtonElement}>URL 공유</div>
                    </div>
                  )}
                </div>
                {/* <Button
                  shape="square"
                  width="100px"
                  height="short"
                  className={styles.shareButton}
                >
                  <div className={styles.shareButtonContainer}>
                    <div className={styles.shareButtonKakaoElement}>
                      카카오톡 공유
                    </div>
                    <div className={styles.shareButtonURLElement}>URL 공유</div>
                  </div>
                </Button> */}
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
