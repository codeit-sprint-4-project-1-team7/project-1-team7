import React, { useState } from "react";
import spinner from "../../../asset/img/loadingGif/spinner.gif";
import styles from "./ProfileImgSelectList.module.css";

function ProfileImgSelectList({ idx, profileImg, onClickImg }) {
  const [isLoad, setIsLoad] = useState(false);
  const handleLoad = () => {
    setIsLoad(true);
  };

  return (
    <img
      className={styles.img}
      onClick={() => onClickImg(idx)}
      src={isLoad ? profileImg : spinner}
      alt="profileImg"
      onLoad={() => {
        handleLoad();
        console.log(`${idx} 번째 로드 성공`);
      }}
    />
  );
}

export default React.memo(ProfileImgSelectList);
