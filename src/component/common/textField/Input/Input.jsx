import { useState, useEffect, useRef } from "react";
import styles from "./Input.module.css";
import { PLACEHOLDER } from "./placeholder";

function Input({ inputValue, handleInputValue }) {
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const inputRef = useRef(null);

  const className = isDisabled
    ? styles.disabled
    : isError
    ? styles.error
    : styles.input;

  const handleonChangeValue = (e) => {
    handleInputValue(e.target.value);
  };

  //value === "" 일때 에러 처리 하였습니다.
  const handleMakeErrorClickOutside = (e) => {
    if (
      inputValue === "" &&
      inputRef.current &&
      !inputRef.current.contains(e.target)
    ) {
      setIsError(true);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleMakeErrorClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleMakeErrorClickOutside);
      setIsError(false);
    };
  }, [inputValue]);

  return (
    <div>
      <input
        className={className}
        type="text"
        ref={inputRef}
        placeholder={PLACEHOLDER.to}
        disabled={isDisabled}
        value={inputValue}
        onChange={handleonChangeValue}
      />
      {isError && <div className={styles.errorMessage}>값을 입력해 주세요</div>}
    </div>
  );
}

export default Input;
