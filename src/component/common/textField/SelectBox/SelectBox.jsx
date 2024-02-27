import { useState, useEffect, useRef } from "react";
import styles from "./SelectBox.module.css";
import DropDown from "./DropDown";
import arrowTop from "../../../../asset/img/textFieldIcon/arrow_top.png";
import arrowDown from "../../../../asset/img/textFieldIcon/arrow_down.png";

function SelectBox({ selectValue, handleSelectValue, selectType }) {
  const [view, setView] = useState(false);
  const [clickedIdx, setClickedIdx] = useState(0);
  const selectBoxRef = useRef(null);

  const handleOnClick = () => {
    setView((prev) => !prev);
  };

  const handleOnClickDropDown = (idx) => {
    setClickedIdx(idx);
    setView((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectBoxRef.current && !selectBoxRef.current.contains(e.target)) {
        setView(false);
      }
    };
    // clickedIdx 변경될 때마다 handleSelectValue 호출
    handleSelectValue(selectType[clickedIdx]);

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickedIdx, handleSelectValue, selectType]);

  return (
    <div className={styles.container} ref={selectBoxRef}>
      <button className={styles.button} onClick={handleOnClick}>
        <div>{selectValue}</div>
        <div className={styles.imgContainer}>
          {view ? (
            <img className={styles.img} src={arrowDown} alt="arrowDown" />
          ) : (
            <img className={styles.img} src={arrowTop} alt="arrowTop" />
          )}
        </div>
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
    </div>
  );
}

export default SelectBox;

// TODO: 추후에 error 상황이나 disabled 상황 있을시 추가 예정
// const [isError, setIsError] = useState(false);
// const [isDisabled, setIsDisabled] = useState(false);
// const buttonClassName = isDisabled
//   ? styles.disabled
//   : isError
//   ? styles.error
//   : styles.button;
//    {isError && <div className={styles.errorMessage}>선택해주세요</div>}
