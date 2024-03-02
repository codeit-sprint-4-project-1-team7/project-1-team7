import { useEffect, useRef, useState } from "react";
import { getBackgroundImagesApiResponse } from "../../../util/api";
import Button from "../button/Button";
import styles from "./ImageOption.module.css";
import checkIcon from "../../../asset/img/optionIcon/check_Icon.png";

function ImageOption({ clickItem, onClick }) {
  const CHECKED_BACKGROUND = 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))';
  const [baseImages, setBaseImages] = useState([]);
  const fileInput = useRef(null);

  const getBaseImages = async () => {
    const { imageUrls } = await getBackgroundImagesApiResponse();
    
    if (!imageUrls) return;

    setBaseImages(imageUrls);
  }


  const handleAddImageDataChange = (e) => {
    const { files } = e.target;
    const uploadFile = files[0];

    if (!uploadFile) return;
    
    const newUrl = URL.createObjectURL(uploadFile);
    setBaseImages([newUrl, ...baseImages]);
  }

  useEffect(() => {
    getBaseImages();
  }, [])

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
          onChange={handleAddImageDataChange}/>
      </button>
      {baseImages.map((item) => {
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