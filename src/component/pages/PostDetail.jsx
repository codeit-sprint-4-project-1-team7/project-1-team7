import { useCallback, useEffect, useState } from "react";
import {
  deleteMessageApiResponse,
  deleteRecipientApiResponse,
  getMessagesApiResponse,
  getRecipientsApiResponse,
} from "../../util/api";
import HeaderService from "../common/header/HeaderService";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Card from "../common/card/Card";
import { isImageValid } from "../../util/isImageValid";

function PostDetail({ contextMenuVisibleList }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { postId } = useParams();
  const [recentMessages, setRecentMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [messageCount, setMessageCount] = useState(0);
  const [isAddMessageCardVisible, setIsAddMessageCardVisible] = useState(0);
  const [image, setImage] = useState("");
  const [isImojiContainerSmall, setIsImojiContainerSmall] = useState(false);
  const [messageNextOffset, setMessageNextOffset] = useState(0);
  const [next, setNext] = useState("");
  const [messagesLoading, setMessagesLoading] = useState(false);
  const handleCardDeleteBtnClick = async (e, id) => {
    e.stopPropagation();

    await deleteMessageApiResponse(id);
    setMessages((prevMessage) =>
      prevMessage.filter((message) => message.id !== id)
    );
  };

  const handlePaperDeleteBtnClick = async () => {
    await deleteRecipientApiResponse(postId);

    navigate("/list");
  };

  const getRollinginformation = useCallback(async () => {
    const response = await getRecipientsApiResponse(postId);
    if (response.detail) {
      navigate("/notFound");
    }
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
  }, [postId, navigate]);

  const handleResize = () => {
    setIsImojiContainerSmall(window.innerWidth < 768);
  };

  const getMessagesOfRecipient = useCallback(
    async (offset, type) => {
      setMessagesLoading(true);
      const response = await getMessagesApiResponse(postId, offset, type);
      if (response.detail) {
        navigate("/notFound");
      }

      setMessages((prev) => [...prev, ...response.results]);

      if (response.next) {
        setMessageNextOffset(response.next.match(/offset=(\d+)/)[1]);
      }

      setMessagesLoading(false);
      setNext(response.next);
    },
    [postId, setMessagesLoading, navigate]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setMessages([]);
    getRollinginformation();
    if (location.pathname.includes("edit")) {
      getMessagesOfRecipient("edit");
    } else {
      getMessagesOfRecipient();
    }

    setIsAddMessageCardVisible(!location.pathname.includes("edit"));
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [
    location.pathname,
    postId,
    navigate,
    getRollinginformation,
    getMessagesOfRecipient,
  ]);
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
        messagesLoading={messagesLoading}
        getMessagesOfRecipient={getMessagesOfRecipient}
        isAddMessageCardVisible={isAddMessageCardVisible}
        next={next}
        messages={messages}
        messageNextOffset={messageNextOffset}
        image={image}
        onCardDeleteBtnClick={handleCardDeleteBtnClick}
        onPaperDeleteBtnClick={handlePaperDeleteBtnClick}
      />
    </>
  );
}

export default PostDetail;
