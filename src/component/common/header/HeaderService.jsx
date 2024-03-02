import { useEffect, useState } from "react";
import commonStyles from "./Header.module.css";
import styles from "./HeaderService.module.css";
import KaKaoShare from "./KaKaoShare";
import ProfileImages from "./ProfileImages";
import { EmojiBadge } from "../badge/EmojiBadge";
import {
  getReactionsApiResponse,
  postReactionApiResponse,
} from "../../../util/api";
import EmojiPicker from "emoji-picker-react";
import Button from "../button/Button";
import copy from "copy-to-clipboard";
import { Toast } from "../toast/Toast";
import ModalPortal from "../modal/ModalPortal";

function HeaderService({
  contextMenuVisibleList,
  messageCount,
  recentMessages,
  name,
  image,
  isImojiContainerSmall,
}) {
  console.log(isImojiContainerSmall);
  const [contextMenuEmojiList, setContextMenuEmojiList] = useState([]);

  const [isToastVisible, setIsToastVisible] = useState(false);

  const getEmoji = async () => {
    //test recipientId: 2889
    const response = await getReactionsApiResponse("2889");
    if (!response) return;
    setContextMenuEmojiList(response.results);
    return response.results;
  };

  const postEmoji = async (e) => {
    const obj = { emoji: e.emoji, type: "increase" };
    const response = await postReactionApiResponse(obj, "2889");
    if (!response) return;
    return getEmoji();
  };

  const handleEmojiClick = async (e) => {
    const emojiLists = await postEmoji(e);
    setContextMenuEmojiList(emojiLists);
  };

  const handleShareUrlClick = () => {
    copy(window.location.href);
    setIsToastVisible(!isToastVisible);
  };

  const handleToastCloseClick = () => setIsToastVisible(!isToastVisible);

  useEffect(() => {
    getEmoji();
    const timer = setTimeout(() => {
      if (isToastVisible) setIsToastVisible(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [isToastVisible]);

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
                imageContainerStyle={styles.imageContainer}
                imageStyle={styles.image}
                imageTextStyle={styles.imageText}
                direction="right"
                messageCount={messageCount}
                recentMessages={recentMessages}
              />
              <div className={styles.writed}>
                <span className={styles.numOfWrited}>{messageCount}</span>
                <span className={styles.writedText}>명이 작성했어요!</span>
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
                    추가
                  </Button>
                  {contextMenuVisibleList.isEmojiApiContextMenuVisible && (
                    <div className={styles.emojiApiContainer}>
                      <EmojiPicker
                        searchDisabled={true}
                        skinTonesDisabled={true}
                        onEmojiClick={handleEmojiClick}
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
                      />
                      <div
                        onClick={handleShareUrlClick}
                        className={styles.shareButtonElement}
                      >
                        URL 공유
                      </div>
                    </div>
                  )}
                </div>
                <ModalPortal>
                  {isToastVisible && <Toast onClick={handleToastCloseClick} />}
                </ModalPortal>
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
