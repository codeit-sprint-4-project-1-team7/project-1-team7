import { useRef} from "react";
import Button from "../button/Button";
import styles from "./ImageOption.module.css";
import checkIcon from "../../../asset/img/optionIcon/check_Icon.png";

function ImageOption({ clickItem, imageData, onChange, onClick }) {
  const CHECKED_BACKGROUND = 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))';
  const fileInput = useRef(null);

  return (
    <div className={styles.imgOptions}>
      <button
        className={`${styles.option} ${styles.imageAddButton}`}
        type="button"
        onClick={() => fileInput.current.click()}>
        <div className={styles.ImgChecked}><Button type='circle' icon='plus' /></div>
        <input
          type="file"
          style={{display: 'none'}}
          accept="image/png, image/jpg, image/jpeg"
          ref={fileInput}
          onChange={onChange}/>
      </button>
      {imageData.map((item) => {
        return (
          <button
            style={clickItem === item 
                    ? {backgroundImage: `${CHECKED_BACKGROUND}, url(${item})`}
                    : {backgroundImage: `url(${item})`}}
            className={styles.option}
            type='button'
            value= {item}
            onClick={onClick}>
            { clickItem === item
              && <img className={styles.ImgChecked} src={checkIcon} alt="check" />}
          </button>
        )
      })}
    </div>
  );

}

export default ImageOption;