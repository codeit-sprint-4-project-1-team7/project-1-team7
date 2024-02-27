import { useState } from "react";
import styles from "./ImageOption.module.css";
import checkIcon from "../../../asset/img/optionIcon/check_Icon.png";

function ImageOption() {
  const [clickImage, setClickImage] = useState('baseImg1');

  const handleClick = (e) => {
    setClickImage(e.target.value === clickImage ? '' : e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className={styles.ImgOptions}>
      <button className={styles.baseImg01} type='button' value='baseImg1' onClick={handleClick}>
        {'baseImg1' === clickImage && <img className={styles.ImgChecked} src={checkIcon} alt="check" />}
      </button>

      <button className={styles.baseImg02} type='button' value='baseImg2' onClick={handleClick}>
        {'baseImg2' === clickImage && <img className={styles.ImgChecked} src={checkIcon} alt="check" />}
      </button>

      <button className={styles.baseImg03} type='button' value='baseImg3' onClick={handleClick}>
        {'baseImg3' === clickImage && <img className={styles.ImgChecked} src={checkIcon} alt="check" />}
      </button>

      <button className={styles.baseImg04} type='button' value='baseImg4' onClick={handleClick}>
        {'baseImg4' === clickImage && <img className={styles.ImgChecked} src={checkIcon} alt="check" />}
      </button>
    </div>
  );

}

export default ImageOption;