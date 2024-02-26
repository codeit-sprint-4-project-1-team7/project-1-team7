import "./tempReset.css";
import styles from "./Button.module.css";

const Button = ({
  children,
  width,
  height = "standard",
  bold,
  color,
  shape,
  disabled,
}) => {
  const className = `${styles.btn} ${styles[height]} ${styles[color]} ${
    shape ? styles[shape] : ""
  } ${bold ? styles.bold : ""}`;
  const style = width ? { width: `${width}` } : {};

  return (
    <button
      type="button"
      style={style}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
