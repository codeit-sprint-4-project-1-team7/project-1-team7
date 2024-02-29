import { useRef } from "react";
import baseProfile from "../../../asset/img/optionIcon/base_profile_icon.png";
import styles from "./UserProfileOption.module.css";

function UserProfileOption({ currentProfileImg, onChangeProfileImg }) {
  const fileInput = useRef(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      onChangeProfileImg(e.target.files[0]);
    } else {
      onChangeProfileImg(baseProfile);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        onChangeProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.profile}
        onClick={() => fileInput.current.click()}
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
          onChange={handleChange}
          ref={fileInput}
        />
      </button>
    </div>
  );
}

export default UserProfileOption;
