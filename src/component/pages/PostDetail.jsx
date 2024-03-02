import { useEffect, useState } from "react";
import {
  getMessagesApiResponse,
  getRecipientsApiResponse,
} from "../../util/api";
import HeaderService from "../common/header/HeaderService";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Card from "../common/card/Card";
import { isImageValid } from "../../util/isImageValid";

function PostDetail({ contextMenuVisibleList }) {
  const navigation = useNavigate();
  const location = useLocation();
  const { postId } = useParams(); //추후 postId 값을 api 요청으로 사용 예정
  const [recentMessages, setRecentMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [messageCount, setMessageCount] = useState(0);
  const [isAddMessageCardVisible, setIsAddMessageCardVisible] = useState(0);
  const [image, setImage] = useState("");
  const [isImojiContainerSmall, setIsImojiContainerSmall] = useState(false);

  useEffect(() => {
    const getRollinginformation = async () => {
      const response = await getRecipientsApiResponse(postId);
      const {
        messageCount,
        recentMessages,
        name,
        backgroundColor,
        backgroundImageURL,
      } = response;

      isImageValid(backgroundImageURL, function (isValid) {
        setImage(isValid ? backgroundImageURL : backgroundColor);
      });

      setMessageCount(messageCount);
      setRecentMessages(recentMessages);
      setName(name);
      getMessagesOfRecipient(messageCount);
    };

    const getMessagesOfRecipient = async (messageCount) => {
      const response = await getMessagesApiResponse(postId, messageCount);
      setMessages(response.results);
    };
    getRollinginformation();
    setIsAddMessageCardVisible(!location.pathname.includes("edit"));
    const handleResize = () => {
      setIsImojiContainerSmall(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname, postId]);
  return (
    <>
      <HeaderService
        contextMenuVisibleList={contextMenuVisibleList}
        messageCount={messageCount}
        recentMessages={recentMessages}
        name={name}
        image={image}
        isImojiContainerSmall={isImojiContainerSmall}
        postId={postId}
      />

      <Card
        isAddMessageCardVisible={isAddMessageCardVisible}
        messages={messages}
        image={image}
      />
    </>
  );
}

export default PostDetail;
