import styles from "./CircleButton.module.css";

function CircleButton({ icon, onClick }) {
  return (
    <button
      className={`${styles.btn} ${
        icon.includes("Arrow")
          ? `${styles.arrow} ${styles[icon]}`
          : styles[icon]
      }`}
      onClick={onClick}
    />
  );
}

export default CircleButton;
