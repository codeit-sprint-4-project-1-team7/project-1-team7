import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../common/header/Header";
import { useEffect, useState } from "react";

function Layout() {
  const location = useLocation();
  const navigation = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isMakeRollingPaperVisible, setIsMakeRollingPaperVisible] =
    useState(false);
  useEffect(() => {
    setIsMakeRollingPaperVisible(!location.pathname.includes("post"));
    const handleResize = () => {
      setIsMobile(
        window.innerWidth < 360 && location.pathname.includes("post")
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname]);

  const handleLogoClick = () => {
    navigation("/");
  };

  const handleRollingPaperButtonClick = () => {
    navigation("/post");
  };
  return (
    <>
      {!isMobile && (
        <Header
          onLogoClick={handleLogoClick}
          onRollingPaperButtonClick={handleRollingPaperButtonClick}
          isMakeRollingPaperVisible={isMakeRollingPaperVisible}
        />
      )}
      <Outlet />
    </>
  );
}

export default Layout;
