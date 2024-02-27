import { useState } from 'react';
import checkIcon from '../../../asset/img/optionIcon/check_Icon.png';
import styles from './ColorOption.module.css';

function ColorOption() {
  const [clickItem, setClickItem] = useState('orange');

  const handleClick = (e) => {
    setClickItem(e.target.value === clickItem ? '' : e.target.value);
  }

  return (
    <div className={styles.backgroundOptions}>
      <button type='button' value='orange' className={styles.backgroundOrange} onClick={handleClick}>
        {'orange' === clickItem && <img className={styles.backgroundChecked} src={checkIcon} alt="check" />}
      </button>

      <button type='button' value='purple' className={styles.backgroundPurple} onClick={handleClick}>
        {'purple' === clickItem && <img className={styles.backgroundChecked} src={checkIcon} alt="check" />}
      </button>

      <button type='button' value='blue' className={styles.backgroundBlue} onClick={handleClick}>
        {'blue' === clickItem && <img className={styles.backgroundChecked} src={checkIcon} alt="check" />}
      </button>

      <button type='button' value='green' className={styles.backgroundGreen} onClick={handleClick}>
        {'green' === clickItem && <img className={styles.backgroundChecked} src={checkIcon} alt="check" />}
      </button>
    </div>
  );
}

export default ColorOption;
