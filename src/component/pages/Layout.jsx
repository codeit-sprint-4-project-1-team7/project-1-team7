import { Outlet, useLocation } from "react-router-dom";
import Header from "../common/header/Header";
import { useEffect, useState } from "react";

function Layout() {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        window.innerWidth < 360 && location.pathname.includes("post")
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <>
      {!isMobile && <Header />}
      <Outlet />
    </>
  );
}

export default Layout;
