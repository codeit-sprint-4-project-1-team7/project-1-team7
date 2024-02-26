import add from "../../asset/img/buttonIcon/add-24.png";
import plus from "../../asset/img/buttonIcon/plus.png";
import deleted from "../../asset/img/buttonIcon/deleted.png";
import arrowRight from "../../asset/img/buttonIcon/arrow_right.png";
import CircleBtn from "../common/button/CircleBtn";
import SquareBtn from "../common/button/SquareBtn";
import PrimaryBtn from "../common/button/PrimaryBtn";
import SecondaryBtn from "../common/button/SecondaryBtn";
import OutlinedBtn from "../common/button/OutlinedBtn";
import ToggleGroup from "../common/button/ToggleGroup";

export function Yun() {
  return (
    <>
      <h1>여기에 자유롭게 수정하면서 테스트 해보시면 됩니다!</h1>
      <CircleBtn>
        <img src={plus} alt="더하기" />
      </CircleBtn>

      <br />

      <CircleBtn disabled>
        <img src={plus} alt="더하기" />
      </CircleBtn>

      <br />

      <CircleBtn type="arrow">
        <img src={arrowRight} alt="오른쪽 화살표" />
      </CircleBtn>

      <br />

      <SquareBtn disabled>
        <img src={deleted} alt="휴지통" />
      </SquareBtn>

      <br />

      <SquareBtn>
        <img src={deleted} alt="휴지통" />
      </SquareBtn>

      <br />
      <br />

      <PrimaryBtn width="28rem" height="standard">
        Primary
      </PrimaryBtn>

      <br />
      <br />

      <PrimaryBtn height="standard">Primary</PrimaryBtn>

      <br />
      <br />

      <PrimaryBtn height="standard" disabled>
        Primary_disabled
      </PrimaryBtn>

      <br />
      <br />

      <SecondaryBtn height="standard">Secondary</SecondaryBtn>

      <br />
      <br />

      <SecondaryBtn height="standard" disabled>
        Secondary_disabled
      </SecondaryBtn>

      <br />
      <br />

      <OutlinedBtn height="standard">
        <img src={add} alt="추가" />
        Outlined
      </OutlinedBtn>

      <br />
      <br />

      <OutlinedBtn height="standard" disabled>
        Outlined_disabled
      </OutlinedBtn>

      <br />
      <br />

      <ToggleGroup />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
