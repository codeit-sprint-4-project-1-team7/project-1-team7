import image from "../../asset/img/notFoundImg/notFound_Img.png";
import styles from "./NotFound.module.css";
export function NotFound() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <img src={image} alt="notFound" height="600px" />
        <div className={styles.text}>페이지가 없거나 잘못된 요청입니다</div>
      </div>
    </div>
  );
}
