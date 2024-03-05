import { useEffect } from "react";
const { Kakao } = window;

function KaKaoShare({ className, name, image }) {
  const url = window.location.href;
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("fe9739da7235c8aa3133ed61bb23d7a0");
  }, []);

  const handleKakaoClick = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `Rolling | `,
        description: `${name}님의 롤링 페이퍼를 확인해보세요!`,
        imageUrl: `${image}`,
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
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
      카카오톡 공유
    </div>
  );
}

export default KaKaoShare;
