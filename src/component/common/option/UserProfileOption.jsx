import { useRef, useState } from 'react';
import baseProfile from '../../../asset/img/optionIcon/base_profile_icon.png';
import styles from './UserProfileOption.module.css';

function UserProfileOption() {
  const[image, setImage] = useState(baseProfile);
  const fileInput = useRef(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      setImage(baseProfile);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <div>
      <button type='button' className={styles.profile} onClick={() => fileInput.current.click()}>
        <img className={styles.profileImg} src={image} alt='profile-Img'/>
        <input type="file"
          style={{display: 'none'}}
          accept="image/png, image/jpg, image/jpeg"
          onChange={handleChange}
          ref={fileInput}/>
      </button>
    </div>
  )
}

export default UserProfileOption;