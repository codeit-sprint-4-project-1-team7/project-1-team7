import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Button from "../common/button/Button";
import styles from "./PostDetailEdit.module.css";
import {
  deleteMessageApiResponse,
  deleteRecipientApiResponse,
  getMessagesApiResponse,
} from "../../util/api";

// sampleCard
function Card({ sender, relationship, content, createdAt, onButtonClick }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <div className={styles.img} />
          <div className={styles.nameAndBadgeContainer}>
            <div className={styles.nameContainer}>
              <span>From.</span>
              <span>{sender}</span>
            </div>
            <div className={styles.badge}>
              <div className={styles.badgeText}>{relationship}</div>
            </div>
          </div>
          <div className={styles.trashButton}>
            <Button
              type="outlined"
              height="standard"
              icon="delete"
              onClick={onButtonClick}
            />
          </div>
        </div>
        <div className={styles.line} />
      </div>
      <div className={styles.textAreaContainer}>
        <div className={styles.textBox}>{content}</div>
        <span className={styles.date}>{createdAt}</span>
      </div>
    </div>
  );
}

function PostDetailEdit() {
  // sampleId: 2951
  const { postId } = useParams();
  const [messages, setMessages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const fetchMessages = async () => {
    try {
      const { results } = await getMessagesApiResponse(postId);
    setMessages(results);
    } catch (error) {
      setErrorMessage(error?.message);
    }
  };

  const onCardDeleteBtnClick = async (id) => {
    await deleteMessageApiResponse(id);
    setMessages((prevMessage) =>
      prevMessage.filter((message) => message.id !== id)
    );
  };

  const onPaperDeleteBtnClick = async () => {
    await deleteRecipientApiResponse(postId);

    navigate("/list");
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return errorMessage ? (
    <div>{errorMessage}</div>
  ) : (
    <div>
      <div className={styles.cardListContainer}>
        <Button
          type="primary"
          width="92"
          height="standard"
          onClick={onPaperDeleteBtnClick}
        >
          삭제하기
        </Button>
        <div className={styles.cardList}>
          {messages?.map(({ id, sender, relationship, content, createdAt }) => (
            <Card
              key={id}
              sender={sender}
              relationship={relationship}
              content={content}
              createdAt={createdAt}
              onButtonClick={() => onCardDeleteBtnClick(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostDetailEdit;
