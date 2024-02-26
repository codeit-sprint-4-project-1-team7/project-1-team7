import { useState } from "react";
import styles from "./ToggleBtn.module.css";

const toggleItems = ["컬러", "이미지"];

const ToggleGroup = () => {
  const [activeItem, isActiveItem] = useState(toggleItems[0]);

  const handleBtnClick = (e) => isActiveItem(e.target.innerText);

  return (
    <div className={styles.toggleArea}>
      {toggleItems.map((item) => {
        return item === activeItem ? (
          <button
            key={item}
            className={`${styles.button} ${styles.active}`}
            onClick={handleBtnClick}
          >
            {item}
          </button>
        ) : (
          <button key={item} className={styles.button} onClick={handleBtnClick}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default ToggleGroup;
