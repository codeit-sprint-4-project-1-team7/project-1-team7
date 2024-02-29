import { useState } from "react";
import styles from "./ImageOption.module.css";
import checkIcon from "../../../asset/img/optionIcon/check_Icon.png";
import sample01 from "../../../asset/img/optionIcon/sample_Image_01.jpg";
import sample02 from "../../../asset/img/optionIcon/sample_Image_02.jpg";

function ImageOption() {
  const [clickImage, setClickImage] = useState('baseImg1');

  const handleClick = (e) => {
    setClickImage(e.target.value === clickImage ? '' : e.target.value);
  }

  const CHECKED_BACKGROUND = 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))';


  return (
    <div className={styles.imgOptions}>
      <button
        style={'baseImg1' === clickImage ? {backgroundImage: `${CHECKED_BACKGROUND}, url(${sample01})`} : {backgroundImage: `url(${sample01})`}}
        className={styles.option}
        type='button' value='baseImg1'
        onClick={handleClick}>
        {'baseImg1' === clickImage
          && <img className={styles.ImgChecked} src={checkIcon} alt="check" />}
      </button>

      <button
        style={'baseImg2' === clickImage ? {backgroundImage: `${CHECKED_BACKGROUND}, url(${sample02})`} : {backgroundImage: `url(${sample02})`}}
        className={styles.option}
        type='button'
        value='baseImg2'
        onClick={handleClick}>
        {'baseImg2' === clickImage
          && <img className={styles.ImgChecked} src={checkIcon} alt="check" />}
      </button>

      <button
        style={'baseImg3' === clickImage ? {backgroundImage: `${CHECKED_BACKGROUND}, url(${sample01})`} : {backgroundImage: `url(${sample01})`}}
        className={styles.option}
        type='button'
        value='baseImg3'
        onClick={handleClick}>
        {'baseImg3' === clickImage
          && <img className={styles.ImgChecked} src={checkIcon} alt="check" />}
      </button>

      <button
        style={'baseImg4' === clickImage ? {backgroundImage: `${CHECKED_BACKGROUND}, url(${sample02})`} : {backgroundImage: `url(${sample02})`}}
        className={styles.option}
        type='button' value='baseImg4'
        onClick={handleClick}>
        {'baseImg4' === clickImage
          && <img className={styles.ImgChecked} src={checkIcon} alt="check" />}
      </button>
    </div>
  );

}

export default ImageOption;