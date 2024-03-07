import React, { useState } from "react";
import spinner from "../../../asset/img/loadingGif/spinner.gif";
import styles from "./ProfileImgSelectList.module.css";
import check from "../../../asset/img/optionIcon/check_Icon.png";

function ProfileImgSelectList({ idx, profileImg, onClickImg, isSelected }) {
  const [isLoad, setIsLoad] = useState(false);
  const [isCheckLoad, setIsCheckLoad] = useState(false);

  const handleLoad = () => {
    setTimeout(() => {
      setIsLoad(true);
      if (isLoad) setIsCheckLoad(true);
    }, 100);
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        onClick={() => onClickImg(idx)}
        src={isLoad ? profileImg : spinner}
        alt="profileImg"
        onLoad={handleLoad}
        style={{ opacity: isSelected && isCheckLoad && "50%" }}
      />
      <img
        className={isSelected && isCheckLoad ? styles.check : styles.invisible}
        src={check}
        alt="check"
      />
    </div>
  );
}

export default React.memo(ProfileImgSelectList);
