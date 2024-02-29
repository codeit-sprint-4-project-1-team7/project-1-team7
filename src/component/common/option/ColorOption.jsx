import { useState } from 'react';
import checkIcon from '../../../asset/img/optionIcon/check_Icon.png';
import styles from './ColorOption.module.css';

function ColorOption() {
  const [clickItem, setClickItem] = useState('beige');

  const handleClick = (e) => {
    setClickItem(e.target.value === clickItem ? '' : e.target.value);
  }

  return (
    <div className={styles.backgroundOptions}>
      <button
        type='button'
        value='beige'
        className={`${styles.option} ${styles.colorBeige}`}
        onClick={handleClick}>
        {'beige' === clickItem
          && <img className={styles.backgroundChecked} src={checkIcon} alt="check" />}
      </button>

      <button
        type='button'
        value='purple'
        className={`${styles.option}
        ${styles.colorPurple}`}
        onClick={handleClick}>
        {'purple' === clickItem
          && <img className={styles.backgroundChecked} src={checkIcon} alt="check" />}
      </button>

      <button
        type='button'
        value='blue'
        className={`${styles.option} ${styles.colorBlue}`}
        onClick={handleClick}>
        {'blue' === clickItem
          && <img className={styles.backgroundChecked} src={checkIcon} alt="check" />}
      </button>

      <button
        type='button'
        value='green'
        className={`${styles.option} ${styles.colorGreen}`}
        onClick={handleClick}>
        {'green' === clickItem
          && <img className={styles.backgroundChecked} src={checkIcon} alt="check" />}
      </button>
    </div>
  );
}

export default ColorOption;
