import { useState } from "react";
import styles from "./Post.module.css";
import Input from "../common/textField/Input/Input";
import ColorOption from "../common/option/ColorOption";
import Button from "../common/button/Button";

function Post() {
  const [inputValue, setInputValue] = useState("")

  const handleInputValue = (value) => setInputValue(value);
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.inputBox}>
          <div className={styles.inputName}>To.{inputValue}</div>
          <Input inputValue={inputValue} onInputValueChange={handleInputValue}/>
        </div>

        <div className={styles.describeBackgroundInfo}>
          <h2 className={styles.describeTitle}>배경화면을 선택해 주세요</h2>
          <p className={styles.describeSubtitle}>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        </div>
        <div className={styles.selectButton}>
          <Button type="toggle" />
        </div>
        <ColorOption />
      </div>
    </div>
  )
}

export default Post;
