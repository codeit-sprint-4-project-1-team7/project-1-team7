import Button from "../button/Button";
import styles from "./Card.module.css";
import DOMPurify from "dompurify";
import { fontMappings } from "../textField/selectBox/fontMappings";
import { Badge } from "../badge/Badge";
import ModalPortal from "../modal/ModalPortal";
import { Modal } from "../modal/Modal";
import { FadeLoader } from "react-spinners";
import texts from "./cardCommonTexts";

function Card({
  messagesLoading,
  messages,
  isAddMessageCardVisible,
  image,
  onCardDeleteBtnClick,
  onPaperDeleteBtnClick,
  onCardModalClick,
  onAddMessageButtonClick,
  onPreventRightClick,
  onEditButtonClick,
  onGoBackClick,
  backgroundImageStyle,
  modalItem,
  isModalVisible,
  target,
}) {
  return (
    <>
      <div
        onContextMenu={onPreventRightClick}
        className={`${styles.backGround} ${
          !image?.includes("http") && styles[image]
        }`}
        style={image?.includes("http") ? backgroundImageStyle(image) : {}}
      >
        {isAddMessageCardVisible ? (
          <div className={styles.buttonArea}>
            <Button
              type="primary"
              width="widthAuto"
              height="standard"
              onClick={onEditButtonClick}
            >
              {texts.edit}
            </Button>
          </div>
        ) : (
          <div
            style={{ justifyContent: `space-between` }}
            className={styles.buttonArea}
          >
            <Button
              type="primary"
              width="widthAuto"
              height="standard"
              onClick={onGoBackClick}
            >
              {texts.goBack}
            </Button>
            <Button
              type="remove"
              width="widthAuto"
              height="standard"
              onClick={onPaperDeleteBtnClick}
            >
              {texts.delete}
            </Button>
          </div>
        )}
        <div className={styles.cardBox}>
          <>
            {isAddMessageCardVisible && (
              <div className={styles.cardContainer}>
                <div className={styles.cardPlus}>
                  <Button
                    type="circle"
                    icon="plus"
                    onClick={onAddMessageButtonClick}
                  />
                </div>
              </div>
            )}
            {messages?.map((item) => (
              <div
                onClick={() => onCardModalClick(item)}
                key={item.id}
                className={styles.cardContainer}
              >
                <div className={styles.profileContainer}>
                  <div className={styles.profile}>
                    <div className={styles.profileMain}>
                      <div
                        className={styles.img}
                        style={{
                          backgroundImage: `url(${item.profileImageURL})`,
                        }}
                      />
                      <div className={styles.nameAndBadgeContainer}>
                        <div className={styles.nameContainer}>
                          <span>From. {item.sender}</span>
                        </div>
                        <Badge relation={item.relationship} />
                      </div>
                    </div>
                    {!isAddMessageCardVisible && (
                      <div className={styles.trashButton}>
                        <Button
                          type="outlined"
                          height="standard"
                          icon="delete"
                          onClick={(e) => onCardDeleteBtnClick(e, item.id)}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.line} />
                <div className={styles.textAreaContainer}>
                  <div
                    className={styles.textBox}
                    style={{ fontFamily: `${fontMappings[item.font]}` }}
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item.content),
                    }}
                  />
                  <span className={styles.date}>
                    {item.createdAt.slice(0, 10)}
                  </span>
                </div>
              </div>
            ))}
            <ModalPortal>
              {isModalVisible && (
                <Modal item={modalItem} onClick={onCardModalClick} />
              )}
            </ModalPortal>
          </>
        </div>
        {messagesLoading && (
          <div className={styles.spinnerContainer}>
            <FadeLoader color={texts.color} />
          </div>
        )}
      </div>
      <div ref={target} className={styles.intersectionTarget} />
    </>
  );
}

export default Card;
