import Button from "../common/button/Button";

export function Yun() {
  return (
    <>
      <h1>여기에 자유롭게 수정하면서 테스트 해보시면 됩니다!</h1>
      <br />

      <Button type="outlined" height="standard">
        롤링 페이퍼 만들기
      </Button>

      <br />

      <Button type="primary" width="280">
        구경해보기
      </Button>

      <br />

      <Button type="outlined" height="short" icon="add">
        추가
      </Button>

      <br />

      <Button type="outlined" height="short" icon="share" />

      <br />

      <Button type="circle" icon="plus" />

      <br />

      <Button type="primary" width="120" height="standard">
        확인
      </Button>

      <br />

      <Button type="primary" width="92" height="standard">
        삭제하기
      </Button>

      <br />

      <Button type="outlined" height="standard" icon="delete" />

      <br />

      <Button type="circle" icon="check" />

      <Button type="toggle" />
    </>
  );
}
