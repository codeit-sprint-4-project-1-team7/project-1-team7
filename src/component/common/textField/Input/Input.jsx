import styles from "./Input.module.css";
import { PLACEHOLDER } from "./placeholder";

function Input({
  isDisabled = false,
  isError = false,
  ErrorMessage = "에러메시지",
}) {
  const className = isDisabled
    ? styles.disabled
    : isError
    ? styles.error
    : styles.input;

  return (
    <div>
      <input
        className={className}
        type="text"
        placeholder={PLACEHOLDER.to}
        disabled={isDisabled}
      />
      {isError && <div className={styles.errorMessage}>{ErrorMessage}</div>}
    </div>
  );
}

export default Input;
