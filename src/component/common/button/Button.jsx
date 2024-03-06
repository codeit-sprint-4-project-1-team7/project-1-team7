import styles from "./Button.module.css";
import CircleButton from "./CircleButton";

/**
 *
 * @param {string} children
 * @param {string} type (primary, secondary, outlined, circle, toggle)
 * @param {string} width (width120, width280, widthAuto)
 * @param {string} height (tall, standard, short)
 * @param {string} icon (add, share, plus, delete, check)
 *
 * @returns
 */

function Button({
  children,
  id,
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

  const className = `${styles.btn} ${styles[height]} ${styles[type]} ${
    icon ? styles[icon] : ""
  } ${width ? styles[width] : ''}`;

  return (
    <button
      id={id}
      type="button"
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children && <span className={styles.name}>{children}</span>}
    </button>
  );
}

export default Button;
