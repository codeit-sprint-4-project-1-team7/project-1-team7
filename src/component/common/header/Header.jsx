import styles from "./Header.module.css";
import heaferIcon from "../../../asset/img/headerIcon/rollingIcon.png";

const HEADER_LOGO_TEXT = "Rolling";
const HEADER_BUTTON_TEXT = "롤링 페이퍼 만들기";
function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <img src={heaferIcon} alt="headerIcon" />
            <span className={styles.logoText}>{HEADER_LOGO_TEXT}</span>
          </div>
          <div className={styles.button}>
            <span className={styles.buttonText}>{HEADER_BUTTON_TEXT}</span>
          </div>
        </div>
      </div>
      <div className={styles.line} />
    </>
  );
}

export default Header;
