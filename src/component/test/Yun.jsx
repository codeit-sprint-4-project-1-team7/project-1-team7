import add from "../../asset/img/buttonIcon/add-24.png";
import plus from "../../asset/img/buttonIcon/plus.png";
import deleted from "../../asset/img/buttonIcon/deleted.png";
import arrowRight from "../../asset/img/buttonIcon/arrow_right.png";
import Button from "../common/button/Button";
import ToggleGroup from "../common/button/ToggleGroup";

export function Yun() {
  return (
    <>
      <h1>여기에 자유롭게 수정하면서 테스트 해보시면 됩니다!</h1>
      <Button type="dark" height="tall" shape="circle">
        <img src={plus} alt="더하기" />
      </Button>

      <br />

      <Button type="dark" height="tall" shape="circle" disabled>
        <img src={plus} alt="더하기" />
      </Button>

      <br />

      <Button type="arrow" height="standard" shape="circle" disabled>
        <img src={arrowRight} alt="오른쪽 화살표" />
      </Button>

      <br />

      <Button type="outlined" height="compact" shape="square">
        <img src={deleted} alt="휴지통" />
      </Button>

      <br />

      <Button type="outlined" height="compact" shape="square" disabled>
        <img src={deleted} alt="휴지통" />
      </Button>

      <br />
      <br />

      <Button type="primary" width="280px" height="standard">
        Primary_width280
      </Button>

      <br />
      <br />

      <Button type="primary" height="standard">
        Primary
      </Button>

      <br />
      <br />

      <Button type="primary" height="standard" disabled>
        Primary_disabled
      </Button>

      <br />
      <br />

      <Button type="secondary" height="standard">
        Secondary
      </Button>

      <br />
      <br />

      <Button type="secondary" height="standard" disabled>
        Secondary_disabled
      </Button>

      <br />
      <br />

      <Button type="outlined" height="standard">
        <img src={add} alt="추가" />
        Outlined
      </Button>

      <br />
      <br />

      <Button type="outlined" height="standard" disabled>
        Outlined_disabled
      </Button>

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
