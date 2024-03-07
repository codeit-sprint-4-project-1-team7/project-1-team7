import styles from "./DropDown.module.css";
import { fontMappings } from "./fontMappings";

function DropDown({ select, onClick }) {
  return (
    <li
      className={styles.li}
      onClick={onClick}
      style={{ fontFamily: fontMappings[select] || "Pretendard" }}
    >
      {select}
    </li>
  );
}

export default DropDown;
