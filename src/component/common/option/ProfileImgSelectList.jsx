import React, { useState } from "react";
import spinner from "../../../asset/img/loadingGif/spinner.gif";
import styles from "./ProfileImgSelectList.module.css";

function ProfileImgSelectList({ idx, profileImg, onClickImg }) {
  const [isLoad, setIsLoad] = useState(false);
  const handleLoad = () => {
    setTimeout(() => {
      setIsLoad(true);
    }, 200);
  };

  return (
    <img
      className={styles.img}
      onClick={() => onClickImg(idx)}
      src={isLoad ? profileImg : spinner}
      alt="profileImg"
      onLoad={handleLoad}
    />
  );
}

export default React.memo(ProfileImgSelectList);
