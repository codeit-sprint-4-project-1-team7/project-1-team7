import { useEffect } from "react";
import texts from "./headerCommonTexts";
const { Kakao } = window;

function KaKaoShare({ className, name, image, url }) {
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("fe9739da7235c8aa3133ed61bb23d7a0");
  }, []);

  const handleKakaoClick = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `Rolling | `,
        description: `${name}${texts.description}!`,
        imageUrl: `${image}`,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: `${texts.kakaobuttonTitle}`,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };
  return (
    <div onClick={handleKakaoClick} className={className}>
      {texts.kakaoshare}
    </div>
  );
}

export default KaKaoShare;
