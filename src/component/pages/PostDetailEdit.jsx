import { useEffect, useState } from "react";
import Button from "../common/button/Button";
import { useParams } from "react-router";

// sampleAPI
const getSampleMessages = async (id) => {
  const response = await fetch(
    `https://rolling-api.vercel.app/7/recipients/${id}/messages/`
  );

  return response.json();
};

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
  const { postId } = useParams();
  const [messages, setMessages] = useState([]);

  const fetchSampleMessages = async () => {
    const { results } = await getSampleMessages(postId);

    setMessages(results);
  };

  useEffect(() => {
    fetchSampleMessages();
  }, []);

  return (
    <div>
      <h1>PostDetailEdit</h1>
      <div className={styles.cardListContainer}>
        <div className={styles.cardList}>
          {messages.map(({ id, sender, relationship, content, createdAt }) => (
            <Card
              key={id}
              sender={sender}
              relationship={relationship}
              content={content}
              createdAt={createdAt}
              onButtonClick={() => onDeleteButtonClick(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostDetailEdit;
