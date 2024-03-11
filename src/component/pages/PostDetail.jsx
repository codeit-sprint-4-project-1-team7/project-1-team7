import { useCallback, useEffect, useRef, useState } from "react";
import {
  deleteMessageApiResponse,
  deleteRecipientApiResponse,
  getMessagesApiResponse,
  getReactionsApiResponse,
  getRecipientsApiResponse,
  postReactionApiResponse,
} from "../../util/api";
import HeaderService from "../common/header/HeaderService";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Card from "../common/card/Card";
import { isImageValid } from "../../util/isImageValid";
import copy from "copy-to-clipboard";
import ModalPortal from "../common/modal/ModalPortal";
import { Toast } from "../common/toast/Toast";

function PostDetail({
  contextMenuVisibleList,
  setIsEmojiApiContextMenuVisible,
}) {
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
  const [contextMenuEmojiList, setContextMenuEmojiList] = useState([]);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const target = useRef(null);
  const pageUrl = window.location.href;

  const backgroundImageStyle = (imageUrl) => ({
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: `repeat`,
    backgroundSize: `100vw`,
    backgroundPosition: `top`,
  });

  const getEmoji = useCallback(async () => {
    const response = await getReactionsApiResponse(postId);
    if (!response) return;
    setContextMenuEmojiList(response.results);
    return response.results;
  }, [postId]);

  const postEmoji = async (e) => {
    const obj = { emoji: e.emoji, type: "increase" };
    const response = await postReactionApiResponse(obj, postId);
    if (!response) return;
    return getEmoji();
  };

  const handleEmojiClick = async (e) => {
    const emojiLists = await postEmoji(e);
    setContextMenuEmojiList(emojiLists);
    setIsEmojiApiContextMenuVisible(false);
  };

  const handleShareUrlClick = () => {
    copy(pageUrl);
    setIsToastVisible(!isToastVisible);
  };

  const handleToastCloseClick = () => setIsToastVisible(!isToastVisible);

  const handleCardDeleteBtnClick = useCallback(async (e, id) => {
    e.stopPropagation();

    await deleteMessageApiResponse(id);
    setMessages((prevMessage) =>
      prevMessage.filter((message) => message.id !== id)
    );
  }, []);

  const handlePaperDeleteBtnClick = useCallback(async () => {
    await deleteRecipientApiResponse(postId);
    navigate("/list");
  }, [postId, navigate]);

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
      if (isValid) {
        setImage(backgroundImageURL);
      } else {
        let colorImageUrl = "";
        switch (backgroundColor) {
          case "beige":
            colorImageUrl = "https://i.ibb.co/YPzXQ4s/2024-03-05-170431.png";
            break;
          case "green":
            colorImageUrl = "https://i.ibb.co/8DdHnVT/2024-03-05-170616.png";
            break;
          case "blue":
            colorImageUrl = "https://i.ibb.co/phjpSB8/2024-03-05-170612.png";
            break;
          case "purple":
            colorImageUrl = "https://i.ibb.co/D8dZB0x/2024-03-05-170608.png";
            break;
          default:
            colorImageUrl = "https://i.ibb.co/YPzXQ4s/2024-03-05-170431.png";
            break;
        }
        setImage(colorImageUrl);
      }
    });

    setMessageCount(messageCount);
    setRecentMessages(recentMessages);
    setName(name);
  }, [postId, navigate]);

  const handleResize = () => {
    setIsImojiContainerSmall(window.innerWidth <= 1248);
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
    handleResize();
    getEmoji();
    getRollinginformation();
    setIsAddMessageCardVisible(!location.pathname.includes("edit"));

    if (location.pathname.includes("edit")) {
      getMessagesOfRecipient("edit");
    } else {
      getMessagesOfRecipient();
    }

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
    getEmoji,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isToastVisible) setIsToastVisible(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [isToastVisible]);

  const handleCardModalClick = (item) => {
    setModalItem(item);
    setIsModalVisible(!isModalVisible);
  };

  const handleAddMessageButtonClick = () => {
    navigate("message");
  };

  const handlePreventRightClick = (e) => {
    e.preventDefault();
  };

  const handleEditButtonClick = () => {
    navigate("edit");
  };

  const handleGoBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && next) {
          getMessagesOfRecipient(messageNextOffset);
        }
      },
      { threshold: 1 }
    );

    if (target.current) {
      observer.observe(target.current);
    }
    return () => observer.disconnect();
  }, [
    messageNextOffset,
    getMessagesOfRecipient,
    next,
    isAddMessageCardVisible,
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
        onEmojiClick={handleEmojiClick}
        onShareUrlClick={handleShareUrlClick}
        contextMenuEmojiList={contextMenuEmojiList}
        pageUrl={pageUrl}
      />

      <Card
        isModalVisible={isModalVisible}
        target={target}
        modalItem={modalItem}
        onCardModalClick={handleCardModalClick}
        onAddMessageButtonClick={handleAddMessageButtonClick}
        onPreventRightClick={handlePreventRightClick}
        onEditButtonClick={handleEditButtonClick}
        onGoBackClick={handleGoBackClick}
        backgroundImageStyle={backgroundImageStyle}
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
      <ModalPortal>
        {isToastVisible && <Toast onClick={handleToastCloseClick} />}
      </ModalPortal>
    </>
  );
}

export default PostDetail;
