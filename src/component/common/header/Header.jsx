import styles from "./Header.module.css";
import heaferIcon from "../../../asset/img/headerIcon/rolling-icon.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const HEADER_LOGO_TEXT = "Rolling";
const HEADER_BUTTON_TEXT = "롤링 페이퍼 만들기";
function Header() {
  const [isMakeRollingPaperVisible, setIsMakeRollingPaperVisible] =
    useState(false);
  const navigation = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    navigation("/");
  };

  const handleRollingPaperButtonClick = () => {
    navigation("/post");
  };
  useEffect(() => {
    setIsMakeRollingPaperVisible(!location.pathname.includes("post"));
  }, [location.pathname]);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <div onClick={handleLogoClick} className={styles.logoContainer}>
            <img src={heaferIcon} alt="headerIcon" />
            <span className={styles.logoText}>{HEADER_LOGO_TEXT}</span>
          </div>
          {isMakeRollingPaperVisible && (
            <div
              onClick={handleRollingPaperButtonClick}
              className={styles.button}
            >
              <span className={styles.buttonText}>{HEADER_BUTTON_TEXT}</span>
            </div>
          )}
        </div>
      </div>
      <div className={styles.line} />
    </>
  );
}

export default Header;
