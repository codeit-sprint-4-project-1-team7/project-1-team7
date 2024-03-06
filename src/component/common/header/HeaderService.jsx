import commonStyles from "./Header.module.css";
import styles from "./HeaderService.module.css";
import KaKaoShare from "./KaKaoShare";
import ProfileImages from "./ProfileImages";
import { EmojiBadge } from "../badge/EmojiBadge";
import EmojiPicker from "emoji-picker-react";
import Button from "../button/Button";
import texts from "./headerCommonTexts";
function HeaderService({
  contextMenuVisibleList,
  messageCount,
  recentMessages,
  name,
  image,
  isImojiContainerSmall,
  onEmojiClick,
  onShareUrlClick,
  contextMenuEmojiList,
  pageUrl,
}) {
  return (
    <>
      <div className={commonStyles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.toNameContainer}>
            <span className={styles.toName}>To. {name}</span>
          </div>
          <div className={styles.line} />
          <div className={styles.emojiBadgeContainer}>
            <div className={styles.writedContainer}>
              <ProfileImages
                direction="right"
                messageCount={messageCount}
                recentMessages={recentMessages}
              />
              <div className={styles.writed}>
                <span className={styles.numOfWrited}>{messageCount}</span>
                <span className={styles.writedText}>{texts.writed}</span>
              </div>
            </div>
            <div className={styles.writedBar} />
            <div className={styles.badgeAndShareContainer}>
              <div className={styles.badgeAndDropdownContainer}>
                <div className={styles.badgeContainer}>
                  {contextMenuEmojiList?.slice(0, 3).map((item) => (
                    <EmojiBadge
                      key={item.id}
                      emoji={item.emoji}
                      count={item.count}
                    />
                  ))}
                </div>
                <div id="emojiListButton" className={styles.dropDownContainer}>
                  {contextMenuVisibleList.isEmojiContextMenuVisible && (
                    <div className={styles.emojiContainer}>
                      {isImojiContainerSmall
                        ? contextMenuEmojiList
                            ?.slice(0, 6)
                            .map((item) => (
                              <EmojiBadge
                                key={item.id}
                                emoji={item.emoji}
                                count={item.count}
                              />
                            ))
                        : contextMenuEmojiList?.map((item) => (
                            <EmojiBadge
                              key={item.id}
                              emoji={item.emoji}
                              count={item.count}
                            />
                          ))}
                      {}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.shareContainer}>
                <div className={styles.addEmojiContainer}>
                  <Button
                    id="addEmojiButton"
                    type="outlined"
                    height="short"
                    icon="add"
                  >
                    {texts.add}
                  </Button>
                  {contextMenuVisibleList.isEmojiApiContextMenuVisible && (
                    <div
                      id="emojiPickerContainer"
                      className={styles.emojiApiContainer}
                    >
                      <EmojiPicker
                        searchDisabled={true}
                        skinTonesDisabled={true}
                        onEmojiClick={onEmojiClick}
                      />
                    </div>
                  )}
                </div>
                <div className={styles.shareContainerBar} />
                <div className={styles.shareButton}>
                  <Button
                    id="shareButton"
                    type="outlined"
                    height="short"
                    icon="share"
                  />
                  {contextMenuVisibleList.isShareContextMenuVisible && (
                    <div className={styles.shareButtonContainer}>
                      <KaKaoShare
                        className={styles.shareButtonElement}
                        name={name}
                        image={image}
                        url={pageUrl}
                      />
                      <div
                        onClick={onShareUrlClick}
                        className={styles.shareButtonElement}
                      >
                        {texts.share}
                      </div>
                    </div>
                  )}
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
