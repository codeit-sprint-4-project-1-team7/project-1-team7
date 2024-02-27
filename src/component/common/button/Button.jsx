import styles from "./Button.module.css";

const Button = ({
  children,
  type,
  width,
  height = "standard",
  shape,
  disabled,
}) => {
  const className = `${styles.btn} ${styles[height]} ${styles[type]} ${
    shape ? styles[shape] : ""
  }`;
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
