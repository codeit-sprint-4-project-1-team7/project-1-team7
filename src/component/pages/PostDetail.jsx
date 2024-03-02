import { useEffect, useMemo, useState } from "react";
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

  useEffect(() => {
    const getRollinginformation = async () => {
      //test recipientId: 2889
      const response = await getRecipientsApiResponse("2889");
      console.log(response);
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
      const response = await getMessagesApiResponse("2889", messageCount);
      setMessages(response.results);
    };
    getRollinginformation();
    setIsAddMessageCardVisible(!location.pathname.includes("edit"));
  }, [location.pathname]);
  return (
    <>
      <HeaderService
        contextMenuVisibleList={contextMenuVisibleList}
        messageCount={messageCount}
        recentMessages={recentMessages}
        name={name}
        image={image}
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
