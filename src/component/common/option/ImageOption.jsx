import { useEffect, useRef, useState } from "react";
import { getBackgroundImagesApiResponse } from "../../../util/api";
import Button from "../button/Button";
import styles from "./ImageOption.module.css";
import checkIcon from "../../../asset/img/optionIcon/check_Icon.png";

function ImageOption({ clickItem, onClick }) {
  const CHECKED_BACKGROUND = 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))';
  const [baseImages, setBaseImages] = useState([]);
  const fileInput = useRef(null);

  const upLoadImg = async (imgFile) => {
    try {
      const formData = new FormData();
      formData.append('image', imgFile);
      const response = await fetch("https://api.imgbb.com/1/upload?key=d0683b0869118bab9113ca272a7d46b1", {
        method: 'POST',
        body: formData,
      })

      if (!response?.ok) {
        throw new Error('이미지를 업로드 하는 데 실패했습니다.')
      }
      const data = await response.json();
      return data.data.url

    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }

  const handleAddImageDataChange = async (e) => {
    const { files } = e.target;
    const uploadFile = files[0];

    if (!uploadFile) return;

      const newImageUrl = await upLoadImg(uploadFile);
      setBaseImages((prev) => ([newImageUrl, ...prev]));
    } 


  const getBaseImages = async () => {
    const { imageUrls } = await getBackgroundImagesApiResponse();
    
    if (!imageUrls) return;

    setBaseImages(imageUrls);
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