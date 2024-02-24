import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <h1>임시 메인 페이지입니다.</h1>
      <h1>
        컴포넌트 개발 중에는 각자의 이름을 클릭하여 이동 후 테스트 해보시면
        됩니다!
      </h1>
      <h1>
        충돌 방지를 위해 자신의 페이지에서 테스트 하시고 컴포넌트 개발을 마친
        뒤엔 삭제 할 예정입니다!
      </h1>
      <br />
      <h2>
        <Link to="/kim">김수환</Link>
      </h2>
      <h2>
        <Link to="/yang">양서연</Link>
      </h2>
      <h2>
        <Link to="/yun">윤아영</Link>
      </h2>
      <h2>
        <Link to="/choi">최원석</Link>
      </h2>
      <h2>
        <Link to="/hong">홍성욱</Link>
      </h2>
    </>
  );
}

export default Main;
