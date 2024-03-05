import React, { useState, useEffect, useRef } from "react";
import styles from "./Input.module.css";
import { PLACEHOLDER } from "./placeholder";

function Input({ inputValue, onInputValueChange }) {
  const [isError, setIsError] = useState(false);
  const inputRef = useRef(null);

  const className = isError ? styles.error : styles.input;

  const handleonChangeValue = (e) => {
    onInputValueChange(e.target.value);
  };

  useEffect(() => {
    //value === "" 일때 에러 처리 하였습니다.
    const handleMakeErrorClickOutside = (e) => {
      if (
        inputValue === "" &&
        inputRef.current &&
        !inputRef.current.contains(e.target)
      ) {
        setIsError(true);
      } else {
        setIsError(false);
      }
    };

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
        value={inputValue}
        onChange={handleonChangeValue}
      />
      {isError && <div className={styles.errorMessage}>값을 입력해 주세요</div>}
    </div>
  );
}

export default React.memo(Input);

//  TODO: 추후에 disabled 상황 있을시 추가예정
//  const [isDisabled, setIsDisabled] = useState(false);
