import { useLocation, useNavigate, useParams } from "react-router-dom";
import Card from "../common/card/Card";
import CardList from "../common/cardList/CardList";
import Header from "../common/header/Header";
import HeaderService from "../common/header/HeaderService";
import { useEffect, useState } from "react";
import {
  getMessagesApiResponse,
  getRecipientsApiResponse,
} from "../../util/api";

export function Kim({ contextMenuVisibleList }) {
  const location = useLocation();
  const { postId } = useParams(); //추후 postId 값을 api 요청으로 사용 예정
  const [topEmojiList, setTopEmojiList] = useState([]);
  const [recentMessages, setRecentMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [messageCount, setMessageCount] = useState(0);
  const [rollingPaperListOrder, setRollingPaperListOrder] = useState([]);
  const [rollingPaperListPopular, setRollingPaperListPopular] = useState([]);

  const getRollinginformation = async () => {
    //test recipientId: 2889
    const response = await getRecipientsApiResponse("2889");

    const messageCountResponse = response.messageCount;
    const topReactionResponse = response.topReactions;
    const recentMessagesResponse = response.recentMessages;
    const nameResponse = response.name;

    setMessageCount(messageCountResponse);
    setTopEmojiList(topReactionResponse);
    setRecentMessages(recentMessagesResponse);
    setName(nameResponse);
  };

  const getRollingPaperList = async () => {
    const response = await getRecipientsApiResponse("", 100);
    console.log(response);
    setRollingPaperListOrder(response.results);
    setRollingPaperListPopular(
      [...response.results].sort((a, b) => b.messageCount - a.messageCount)
    );
  };

  const getMessagesOfRecipient = async () => {
    const response = await getMessagesApiResponse("2889");
    setMessages(response.results);
  };

  useEffect(() => {
    getRollingPaperList();
    getRollinginformation();
    getMessagesOfRecipient();
  }, []);
  return (
    <>
      <h1>여기에 자유롭게 수정하면서 테스트 해보시면 됩니다!</h1>
      <Header />
      <HeaderService
        contextMenuVisibleList={contextMenuVisibleList}
        messageCount={messageCount}
        topEmojiList={topEmojiList}
        recentMessages={recentMessages}
        name={name}
        postId={"2889"}
      />
      <CardList rollingPaperList={rollingPaperListPopular.slice(0, 8)} />
      <Header />
      <CardList rollingPaperList={rollingPaperListOrder.slice(0, 8)} />
    </>
  );
}
