import styles from "./Header.module.css";
import headerIcon from "../../../asset/img/headerIcon/rolling-icon.png";
import texts from "./headerCommonTexts";

function Header({
  onLogoClick,
  onRollingPaperButtonClick,
  isMakeRollingPaperVisible,
}) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <div onClick={onLogoClick} className={styles.logoContainer}>
            <img src={headerIcon} alt={texts.headerIcon} />
            <span className={styles.logoText}>{texts.headerLogo}</span>
          </div>
          {isMakeRollingPaperVisible && (
            <div onClick={onRollingPaperButtonClick} className={styles.button}>
              <span className={styles.buttonText}>{texts.headerButton}</span>
            </div>
          )}
        </div>
      </div>
      <div className={styles.line} />
    </>
  );
}

export default Header;
