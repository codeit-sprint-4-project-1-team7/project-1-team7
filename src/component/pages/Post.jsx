import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import Input from "../common/textField/Input/Input";
import ColorOption from "../common/option/ColorOption";
import ToggleButton from "../common/button/ToggleButton";
import ImageOption from "../common/option/ImageOption";
import Button from "../common/button/Button";

const BUTTON_NAME = ["컬러", "이미지"];

function Post() {
  const [inputValue, setInputValue] = useState("");
  const [selectedButtonName, setSelectedButtonName] = useState("컬러");
  const handleInputValue = (value) => setInputValue(value);
  const handleButtonClick = (e) => setSelectedButtonName(e.target.innerText);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.inputBox}>
          <div className={styles.inputName}>To. {inputValue}</div>
          <Input
            inputValue={inputValue}
            onInputValueChange={handleInputValue}
          />
        </div>

        <div className={styles.describeBackgroundInfo}>
          <h2 className={styles.describeTitle}>배경화면을 선택해 주세요</h2>
          <p className={styles.describeSubtitle}>
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </p>
        </div>
        <div className={styles.selectButton}>
          <div onClick={handleButtonClick}>
            <ToggleButton />
          </div>
        </div>
        {selectedButtonName === BUTTON_NAME[0] && <ColorOption />}
        {selectedButtonName === BUTTON_NAME[1] && <ImageOption />}
        <Link to="/post/{id}" style={{ textDecoration: "none" }}>
          <div className={styles.createButton}>
            <Button type="primary" height="tall" disabled={!inputValue}>
              생성하기
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Post;
