import React, { useRef } from "react";
import styles from "./UserProfileOption.module.css";

function UserProfileOption({ currentProfileImg, onChangeProfileImg }) {
  const fileInput = useRef(null);

  const upLoadImg = async (imgFile) => {
    try {
      const formData = new FormData();
      formData.append("image", imgFile);
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=d0683b0869118bab9113ca272a7d46b1",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response?.ok) {
        throw new Error("이미지를 업로드 하는 데 실패했습니다.");
      }
      const data = await response.json();
      return data.data.url;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

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

export default UserProfileOption;
