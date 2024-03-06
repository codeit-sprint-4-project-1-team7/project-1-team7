import React, { useRef } from "react";
import styles from "./UserProfileOption.module.css";
import { upLoadImg } from "../../../util/api";

function UserProfileOption({ currentProfileImg, onChangeProfileImg }) {
  const fileInput = useRef(null);

  const handleAddImageDataChange = async (e) => {
    const { files } = e.target;
    const uploadFile = files[0];

    if (!uploadFile) return;

    const newImageUrl = await upLoadImg(uploadFile);
    onChangeProfileImg(newImageUrl);
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.profile}
        onClick={() => {
          fileInput.current.click();
        }}
      >
        <img
          className={styles.profileImg}
          src={currentProfileImg}
          alt="profile-Img"
        />
        <input
          type="file"
          style={{ display: "none" }}
          accept="image/png, image/jpg, image/jpeg"
          onChange={handleAddImageDataChange}
          ref={fileInput}
        />
      </button>
    </div>
  );
}

export default React.memo(UserProfileOption);
