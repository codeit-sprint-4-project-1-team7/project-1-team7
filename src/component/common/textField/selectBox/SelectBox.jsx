import React, { useState, useEffect, useRef } from "react";
import styles from "./SelectBox.module.css";
import DropDown from "./DropDown";
import arrowTop from "../../../../asset/img/textFieldIcon/arrow_top.png";
import arrowDown from "../../../../asset/img/textFieldIcon/arrow_down.png";
import { fontMappings } from "./fontMappings";

function SelectBox({ selectValue, onSelectValueChange, selectType }) {
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
    // clickedIdx 변경될 때마다 onSelectValueChange 호출
    onSelectValueChange(selectType[clickedIdx]);

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickedIdx, onSelectValueChange, selectType]);

  return (
    <div className={styles.container} ref={selectBoxRef}>
      <button className={styles.button} onClick={handleOnClick}>
        <div style={{ fontFamily: fontMappings[selectValue] || "Pretendard" }}>
          {selectValue}
        </div>
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

export default React.memo(SelectBox);
