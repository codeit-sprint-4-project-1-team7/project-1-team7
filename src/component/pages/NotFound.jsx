import { Link } from "react-router-dom";
import image from "../../asset/img/notFoundImg/notFound_Img.png";
import Button from "../common/button/Button";
import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <img className={styles.notFoundImg} src={image} alt="notFound" height="600px" />
        <div className={styles.errorText}>
          <span className={styles.text}>페이지가 없거나 잘못된 요청입니다.</span>
          <Link to="/">
            <Button type="primary" width="width120">홈으로</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
