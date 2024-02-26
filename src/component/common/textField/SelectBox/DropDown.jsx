import styles from "./DropDown.module.css";

function DropDown({ select, onClick }) {
  return (
    <li className={styles.li} onClick={onClick}>
      {select}
    </li>
  );
}

export default DropDown;
