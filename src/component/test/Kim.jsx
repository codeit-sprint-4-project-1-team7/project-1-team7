import Card from "../common/card/Card";
import CardList from "../common/cardList/CardList";
import Header from "../common/header/Header";
import HeaderService from "../common/header/HeaderService";

export function Kim() {
  return (
    <>
      <h1>여기에 자유롭게 수정하면서 테스트 해보시면 됩니다!</h1>
      <Header />
      <HeaderService />
      <CardList />
      <Card />
    </>
  );
}
