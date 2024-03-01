import { useEffect, useState } from "react";
import {
  getMessagesApiResponse,
  getRecipientsApiResponse,
} from "../../util/api";
import HeaderService from "../common/header/HeaderService";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Card from "../common/card/Card";

function PostDetail({ contextMenuVisibleList }) {
  const navigation = useNavigate();
  const location = useLocation();
  const { postId } = useParams(); //추후 postId 값을 api 요청으로 사용 예정
  const [topEmojiList, setTopEmojiList] = useState([]);
  const [recentMessages, setRecentMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [messageCount, setMessageCount] = useState(0);
  const [isAddMessageCardVisible, setIsAddMessageCardVisible] = useState(0);

  const getRollinginformation = async () => {
    //test recipientId: 2889
    const response = await getRecipientsApiResponse("2889");
    console.log(response);
    const messageCountResponse = response.messageCount;
    const topReactionResponse = response.topReactions;
    const recentMessagesResponse = response.recentMessages;
    const nameResponse = response.name;

    setMessageCount(messageCountResponse);
    setTopEmojiList(topReactionResponse);
    setRecentMessages(recentMessagesResponse);
    setName(nameResponse);
  };

  const getMessagesOfRecipient = async () => {
    const response = await getMessagesApiResponse("2889");
    setMessages(response.results);
  };

  useEffect(() => {
    getRollinginformation();
    getMessagesOfRecipient();
    setIsAddMessageCardVisible(!location.pathname.includes("edit"));
  }, [location.pathname]);
  return (
    <>
      <HeaderService
        contextMenuVisibleList={contextMenuVisibleList}
        messageCount={messageCount}
        topEmojiList={topEmojiList}
        recentMessages={recentMessages}
        name={name}
      />
      <Card
        isAddMessageCardVisible={isAddMessageCardVisible}
        messages={messages}
      />
    </>
  );
}

export default PostDetail;
