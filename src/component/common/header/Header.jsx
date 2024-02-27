import styles from "./Header.module.css";
import heaferIcon from "../../../asset/img/headerIcon/rolling-icon.png";
import { useNavigate } from "react-router-dom";

const HEADER_LOGO_TEXT = "Rolling";
const HEADER_BUTTON_TEXT = "롤링 페이퍼 만들기";
function Header() {
  const navigation = useNavigate();

  const handleLogoClick = () => {
    navigation("/");
  };

  const handleRollingPaperButtonClick = () => {
    navigation("/post");
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <div onClick={handleLogoClick} className={styles.logoContainer}>
            <img src={heaferIcon} alt="headerIcon" />
            <span className={styles.logoText}>{HEADER_LOGO_TEXT}</span>
          </div>
          <div
            onClick={handleRollingPaperButtonClick}
            className={styles.button}
          >
            <span className={styles.buttonText}>{HEADER_BUTTON_TEXT}</span>
          </div>
        </div>
      </div>
      <div className={styles.line} />
    </>
  );
}

export default Header;
