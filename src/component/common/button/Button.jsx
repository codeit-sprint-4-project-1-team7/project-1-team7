import styles from "./Button.module.css";
import CircleButton from "./CircleButton";
import ToggleButton from "./ToggleButton";

const Button = ({
  children,
  type = "outlined",
  width,
  height = "standard",
  icon,
  disabled,
  onClick,
}) => {
  if (type === "circle") {
    return <CircleButton icon={icon} onClick={onClick} />;
  }

  if (type === "toggle") {
    return <ToggleButton />;
  }

  const className = `${styles.btn} ${styles[height]} ${styles[type]} ${
    icon ? styles[icon] : ""
  }`;
  const style = width ? { width: `${width}px` } : {};

  return (
    <button
      type="button"
      style={style}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children && <span className={styles.name}>{children}</span>}
    </button>
  );
};

export default Button;
