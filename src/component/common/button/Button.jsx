import styles from "./Button.module.css";
import CircleButton from "./CircleButton";
import ToggleButton from "./ToggleButton";

/**
 *
 * @param {string} children
 * @param {string} type (primary, secondary, outlined, circle, toggle)
 * @param {string} width (280)
 * @param {string} height (tall, standard, short)
 * @param {string} icon (add, share, plus, delete, check)
 *
 * @returns
 */

function Button({
  children,
  type = "outlined",
  width,
  height = "standard",
  icon,
  disabled,
  onClick,
}) {
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
}

export default Button;
