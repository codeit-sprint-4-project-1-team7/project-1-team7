import ColorOption from "../common/option/ColorOption";
import ImageOption from "../common/option/ImageOption";
import UserProfileOption from "../common/option/UserProfileOption";

export function Yang() {
  return (
    <>
      <h1>여기에 자유롭게 수정하면서 테스트 해보시면 됩니다!</h1>
      <UserProfileOption />
      <ColorOption />
      <ImageOption />
    </>
  )
}
