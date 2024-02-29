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
function Card({
  sender,
  profileImageURL,
  relationship,
  content,
  createdAt,
  onButtonClick,
}) {
  return (
    <li className={styles.cardContainer}>
      <header className={styles.profileContainer}>
        <div className={styles.profile}>
          <img src={profileImageURL} alt="프로필 사진" className={styles.img} />
          <div className={styles.nameAndBadgeContainer}>
            <div className={styles.nameContainer}>
              <span>From.</span>
              <span className={styles.name}>{sender}</span>
            </div>
            <span className={styles.badge}>{relationship}</span>
          </div>
        </div>
        <Button
          type="outlined"
          height="standard"
          icon="delete"
          onClick={onButtonClick}
        />
      </header>
      <div className={styles.textAreaContainer}>
        <div className={styles.textBox}>{content}</div>
        <span className={styles.date}>{createdAt}</span>
      </div>
    </li>
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
          {messages?.map(
            ({
              id,
              sender,
              profileImageURL,
              relationship,
              content,
              createdAt,
            }) => (
              <Card
                key={id}
                sender={sender}
                profileImageURL={profileImageURL}
                relationship={relationship}
                content={content}
                createdAt={createdAt}
                onButtonClick={() => onCardDeleteBtnClick(id)}
              />
            )
          )}
      </div>
    </div>
  );
}

export default PostDetailEdit;
