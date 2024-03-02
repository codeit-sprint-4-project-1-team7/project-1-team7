import { useEffect } from "react";
const { Kakao } = window;

function KaKaoShare({ className, name, description, imageUrl }) {
  const url = window.location.href;
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("e9dde7fd5c20bdfdf100d47b1f8da3d3");
  }, []);

  const handleKakaoClick = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `롤링 페이퍼 | `,
        description: `${name}님의 롤링 페이퍼를 확인해보세요!`,
        imageUrl:
          "https://i0.wp.com/library.re.kr/wp-content/uploads/2022/05/996907.jpg?resize=1080%2C675&ssl=1",
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
