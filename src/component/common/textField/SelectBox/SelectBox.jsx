import { useState, useEffect } from "react";
import styles from "./SelectBox.module.css";
import DropDown from "./DropDown";

function SelectBox({
  selectValue,
  handleSelectValue,
  selectType,
  isDisabled = false,
  isError = false,
}) {
  const [view, setView] = useState(false);
  const [clickedIdx, setClickedIdx] = useState(0);

  const buttonClassName = isDisabled
    ? styles.disabled
    : isError
    ? styles.error
    : styles.button;

  const handleOnClick = () => {
    setView((prev) => !prev);
  };
  const handleOnClickDropDown = (idx) => {
    setClickedIdx(idx);
    setView((prev) => !prev);
  };

  useEffect(() => {
    // clickedIdx 변경될 때마다 handleSelectValue 호출
    handleSelectValue(selectType[clickedIdx]);
  }, [clickedIdx]);

  return (
    <>
      <button
        className={buttonClassName}
        onClick={handleOnClick}
        disabled={isDisabled}
      >
        <div>{selectValue}</div>
        {/* TODO: image로 바꿔주기 */}
        <div>{view ? "⌃" : "⌄"}</div>
      </button>
      <div className={view ? styles.DropDown : styles.invisible}>
        {view &&
          selectType.map((select, idx) => (
            <DropDown
              key={idx}
              select={select}
              onClick={() => handleOnClickDropDown(idx)}
            />
          ))}
      </div>
      {isError && <div className={styles.errorMessage}>선택해주세요</div>}
    </>
  );
}

export default SelectBox;
